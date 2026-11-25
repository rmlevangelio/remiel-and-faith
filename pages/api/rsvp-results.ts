import { timingSafeEqual } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

type Rsvp = {
  guest_name: string;
  attending: boolean;
  dietary_restriction: string | null;
  dietary_note: string | null;
  updated_at: string;
};

function isAuthorized(authorization: string | undefined, password: string) {
  if (!authorization?.startsWith('Basic ')) return false;

  const credentials = Buffer.from(authorization.slice(6), 'base64').toString('utf8');
  const suppliedPassword = credentials.slice(credentials.indexOf(':') + 1);
  const expected = Buffer.from(password);
  const supplied = Buffer.from(suppliedPassword);

  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const password = process.env.RESULTS_PASSWORD;
  if (!password || !isAuthorized(request.headers.authorization, password)) {
    response.setHeader('WWW-Authenticate', 'Basic realm="RSVP results"');
    return response.status(401).json({ error: 'Unauthorized.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !secretKey) {
    return response.status(500).json({ error: 'Results service is not configured.' });
  }

  const supabaseHeaders = {
    apikey: secretKey,
    Authorization: `Bearer ${secretKey}`,
  };

  const [rsvpsResponse, guestsResponse] = await Promise.all([
    fetch(
      `${supabaseUrl}/rest/v1/rsvps?select=guest_name,attending,dietary_restriction,dietary_note,updated_at&order=updated_at.desc`,
      { headers: supabaseHeaders }
    ),
    fetch(`${supabaseUrl}/rest/v1/guests?select=full_name&order=full_name.asc`, {
      headers: supabaseHeaders,
    }),
  ]);

  if (!rsvpsResponse.ok) {
    console.error('Supabase RSVP results request failed:', await rsvpsResponse.text());
    return response.status(502).json({ error: 'Unable to load RSVP results.' });
  }
  if (!guestsResponse.ok) {
    console.error('Supabase guest list request failed:', await guestsResponse.text());
    return response.status(502).json({ error: 'Unable to load RSVP results.' });
  }

  const rsvps = (await rsvpsResponse.json()) as Rsvp[];
  const guests = (await guestsResponse.json()) as { full_name: string }[];
  const respondedNames = new Set(rsvps.map((rsvp) => rsvp.guest_name));
  const pendingGuests = guests
    .map((guest) => guest.full_name)
    .filter((name) => !respondedNames.has(name));

  return response.status(200).json({ rsvps, pendingGuests });
}
