import type { NextApiRequest, NextApiResponse } from 'next';

type Guest = { full_name: string };

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const query = typeof request.query.query === 'string' ? request.query.query.trim() : '';
  if (query.length < 3) return response.status(400).json({ error: 'Enter at least 3 characters.' });

  const supabaseUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !secretKey) {
    return response.status(500).json({ error: 'Guest search is not configured.' });
  }

  const parameters = new URLSearchParams({
    select: 'full_name',
    full_name: `ilike.*${query.replace(/[*,()]/g, '')}*`,
    order: 'full_name.asc',
    limit: '10',
  });
  const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/guests?${parameters}`, {
    headers: { apikey: secretKey, Authorization: `Bearer ${secretKey}` },
  });

  if (!supabaseResponse.ok) {
    console.error('Supabase guest search failed:', await supabaseResponse.text());
    return response.status(502).json({ error: 'Unable to search guests.' });
  }

  const guests = (await supabaseResponse.json()) as Guest[];
  return response.status(200).json({ guests: guests.map((guest) => guest.full_name) });
}
