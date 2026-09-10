import type { NextApiRequest, NextApiResponse } from 'next';

const dietaryRestrictions = new Set([
  'No dietary restrictions',
  'Vegetarian',
  'Vegan',
  'Halal',
  'Gluten-free',
  'Other',
]);

type RsvpRequest = {
  guestName?: unknown;
  attending?: unknown;
  dietaryRestriction?: unknown;
  dietaryNote?: unknown;
};

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const { guestName, attending, dietaryRestriction, dietaryNote } = request.body as RsvpRequest;
  if (typeof guestName !== 'string' || typeof attending !== 'boolean' || !guestName.trim()) {
    return response.status(400).json({ error: 'Please provide a valid RSVP.' });
  }

  if (
    attending &&
    (typeof dietaryRestriction !== 'string' ||
      typeof dietaryNote !== 'string' ||
      !dietaryRestrictions.has(dietaryRestriction) ||
      (dietaryRestriction === 'Other' && !dietaryNote.trim()))
  ) {
    return response.status(400).json({ error: 'Please provide a valid RSVP.' });
  }

  const normalizedDietaryRestriction = attending ? (dietaryRestriction as string) : null;
  const normalizedDietaryNote = attending ? (dietaryNote as string).trim() || null : null;

  const supabaseUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !secretKey) {
    console.error('Supabase RSVP environment variables are not configured.');
    return response.status(500).json({ error: 'RSVP service is not configured.' });
  }

  const guestQuery = new URLSearchParams({
    select: 'id',
    full_name: `eq.${guestName.trim()}`,
    limit: '1',
  });
  const guestResponse = await fetch(`${supabaseUrl}/rest/v1/guests?${guestQuery}`, {
    headers: { apikey: secretKey, Authorization: `Bearer ${secretKey}` },
  });
  if (!guestResponse.ok) {
    console.error('Supabase guest verification failed:', await guestResponse.text());
    return response.status(502).json({ error: 'Unable to verify guest.' });
  }
  if (((await guestResponse.json()) as { id: string }[]).length === 0) {
    return response.status(400).json({ error: 'Guest not found.' });
  }

  const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/rsvps?on_conflict=guest_name`, {
    method: 'POST',
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify({
      guest_name: guestName.trim(),
      attending,
      dietary_restriction: normalizedDietaryRestriction,
      dietary_note: normalizedDietaryNote,
    }),
  });

  if (!supabaseResponse.ok) {
    console.error('Supabase RSVP save failed:', await supabaseResponse.text());
    return response.status(502).json({ error: 'Unable to save RSVP.' });
  }

  return response.status(200).json({ ok: true });
}
