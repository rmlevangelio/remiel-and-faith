import { timingSafeEqual } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

type Guest = { id: string; full_name: string };

function isAuthorized(authorization: string | undefined, password: string) {
  if (!authorization?.startsWith('Basic ')) return false;

  const credentials = Buffer.from(authorization.slice(6), 'base64').toString('utf8');
  const suppliedPassword = credentials.slice(credentials.indexOf(':') + 1);
  const expected = Buffer.from(password);
  const supplied = Buffer.from(suppliedPassword);

  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const password = process.env.RESULTS_PASSWORD;
  if (!password || !isAuthorized(request.headers.authorization, password)) {
    response.setHeader('WWW-Authenticate', 'Basic realm="Manage guests"');
    return response.status(401).json({ error: 'Unauthorized.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !secretKey) {
    return response.status(500).json({ error: 'Guest management is not configured.' });
  }
  const supabaseHeaders = {
    apikey: secretKey,
    Authorization: `Bearer ${secretKey}`,
    'Content-Type': 'application/json',
  };

  if (request.method === 'GET') {
    const supabaseResponse = await fetch(
      `${supabaseUrl}/rest/v1/guests?select=id,full_name&order=full_name.asc`,
      { headers: supabaseHeaders }
    );
    if (!supabaseResponse.ok) {
      console.error('Supabase guest list request failed:', await supabaseResponse.text());
      return response.status(502).json({ error: 'Unable to load guests.' });
    }
    const guests = (await supabaseResponse.json()) as Guest[];
    return response.status(200).json({ guests });
  }

  if (request.method === 'POST') {
    const fullName = (request.body as { fullName?: unknown })?.fullName;
    if (typeof fullName !== 'string' || !fullName.trim()) {
      return response.status(400).json({ error: 'Please provide a guest name.' });
    }

    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/guests`, {
      method: 'POST',
      headers: { ...supabaseHeaders, Prefer: 'return=representation' },
      body: JSON.stringify({ full_name: fullName.trim() }),
    });
    if (!supabaseResponse.ok) {
      const detail = await supabaseResponse.text();
      console.error('Supabase guest create failed:', detail);
      if (supabaseResponse.status === 409 || detail.includes('duplicate')) {
        return response.status(409).json({ error: 'A guest with that name already exists.' });
      }
      return response.status(502).json({ error: 'Unable to add guest.' });
    }
    const [guest] = (await supabaseResponse.json()) as Guest[];
    return response.status(201).json({ guest });
  }

  if (request.method === 'PUT') {
    const { id, fullName } = request.body as { id?: unknown; fullName?: unknown };
    if (typeof id !== 'string' || !id || typeof fullName !== 'string' || !fullName.trim()) {
      return response.status(400).json({ error: 'Please provide a valid guest name.' });
    }

    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/guests?id=eq.${id}`, {
      method: 'PATCH',
      headers: { ...supabaseHeaders, Prefer: 'return=representation' },
      body: JSON.stringify({ full_name: fullName.trim() }),
    });
    if (!supabaseResponse.ok) {
      const detail = await supabaseResponse.text();
      console.error('Supabase guest update failed:', detail);
      if (supabaseResponse.status === 409 || detail.includes('duplicate')) {
        return response.status(409).json({ error: 'A guest with that name already exists.' });
      }
      return response.status(502).json({ error: 'Unable to update guest.' });
    }
    const [guest] = (await supabaseResponse.json()) as Guest[];
    if (!guest) return response.status(404).json({ error: 'Guest not found.' });
    return response.status(200).json({ guest });
  }

  if (request.method === 'DELETE') {
    const id = typeof request.query.id === 'string' ? request.query.id : '';
    if (!id) return response.status(400).json({ error: 'Please provide a guest id.' });

    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/guests?id=eq.${id}`, {
      method: 'DELETE',
      headers: supabaseHeaders,
    });
    if (!supabaseResponse.ok) {
      console.error('Supabase guest delete failed:', await supabaseResponse.text());
      return response.status(502).json({ error: 'Unable to delete guest.' });
    }
    return response.status(200).json({ ok: true });
  }

  response.setHeader('Allow', 'GET, POST, PUT, DELETE');
  return response.status(405).json({ error: 'Method not allowed.' });
}
