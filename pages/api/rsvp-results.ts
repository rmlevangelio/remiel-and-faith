import { timingSafeEqual } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

type Rsvp = {
  guest_name: string;
  dietary_restriction: string;
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

  const supabaseResponse = await fetch(
    `${supabaseUrl}/rest/v1/rsvps?select=guest_name,dietary_restriction,dietary_note,updated_at&order=updated_at.desc`,
    {
      headers: {
        apikey: secretKey,
        Authorization: `Bearer ${secretKey}`,
      },
    }
  );

  if (!supabaseResponse.ok) {
    console.error('Supabase RSVP results request failed:', await supabaseResponse.text());
    return response.status(502).json({ error: 'Unable to load RSVP results.' });
  }

  const rsvps = (await supabaseResponse.json()) as Rsvp[];
  return response.status(200).json({ rsvps });
}
