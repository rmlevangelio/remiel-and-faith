import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import Background from '../components/Background';

type Guest = {
  id: string;
  full_name: string;
};

export default function ManageGuests() {
  const [password, setPassword] = useState('');
  const [authHeader, setAuthHeader] = useState<string | null>(null);
  const [guests, setGuests] = useState<Guest[] | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const [newGuestName, setNewGuestName] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [addError, setAddError] = useState('');

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [rowError, setRowError] = useState('');

  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const filteredGuests = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return guests ?? [];
    return (guests ?? []).filter((guest) => guest.full_name.toLowerCase().includes(term));
  }, [guests, search]);

  async function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const authorization = `Basic ${window.btoa(`guests:${password}`)}`;
      const response = await fetch('/api/manage-guests', {
        headers: { Authorization: authorization },
      });
      if (response.status === 401) throw new Error('Incorrect password.');
      if (!response.ok) throw new Error('Unable to load guests.');

      const data = (await response.json()) as { guests: Guest[] };
      setGuests(data.guests);
      setAuthHeader(authorization);
      setPassword('');
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Unable to load guests.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!authHeader || !newGuestName.trim()) return;

    setIsAdding(true);
    setAddError('');
    try {
      const response = await fetch('/api/manage-guests', {
        method: 'POST',
        headers: { Authorization: authHeader, 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: newGuestName.trim() }),
      });
      const data = (await response.json()) as { guest?: Guest; error?: string };
      if (!response.ok) throw new Error(data.error || 'Unable to add guest.');

      setGuests((current) =>
        [...(current ?? []), data.guest as Guest].sort((a, b) =>
          a.full_name.localeCompare(b.full_name)
        )
      );
      setNewGuestName('');
    } catch (caughtError) {
      setAddError(caughtError instanceof Error ? caughtError.message : 'Unable to add guest.');
    } finally {
      setIsAdding(false);
    }
  }

  function startEditing(guest: Guest) {
    setEditingId(guest.id);
    setEditingName(guest.full_name);
    setConfirmDeleteId(null);
    setRowError('');
  }

  function cancelEditing() {
    setEditingId(null);
    setEditingName('');
    setRowError('');
  }

  async function handleSaveEdit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!authHeader || !editingId || !editingName.trim()) return;

    setIsSaving(true);
    setRowError('');
    try {
      const response = await fetch('/api/manage-guests', {
        method: 'PUT',
        headers: { Authorization: authHeader, 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingId, fullName: editingName.trim() }),
      });
      const data = (await response.json()) as { guest?: Guest; error?: string };
      if (!response.ok) throw new Error(data.error || 'Unable to update guest.');

      setGuests((current) =>
        (current ?? [])
          .map((guest) => (guest.id === editingId ? (data.guest as Guest) : guest))
          .sort((a, b) => a.full_name.localeCompare(b.full_name))
      );
      cancelEditing();
    } catch (caughtError) {
      setRowError(caughtError instanceof Error ? caughtError.message : 'Unable to update guest.');
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(guest: Guest) {
    if (!authHeader) return;

    setDeletingId(guest.id);
    setRowError('');
    try {
      const response = await fetch(`/api/manage-guests?id=${encodeURIComponent(guest.id)}`, {
        method: 'DELETE',
        headers: { Authorization: authHeader },
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(data.error || 'Unable to delete guest.');

      setGuests((current) => (current ?? []).filter((item) => item.id !== guest.id));
      setConfirmDeleteId(null);
    } catch (caughtError) {
      setRowError(caughtError instanceof Error ? caughtError.message : 'Unable to delete guest.');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <>
      <Head>
        <title>Manage Guests · Remiel &amp; Faith</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Background />
      <main className="rsvp-page rsvp-results-page">
        <Link className="rsvp-back-link" href="/">
          &larr; Back to wedding details
        </Link>
        <section className="rsvp-panel" aria-labelledby="guests-title">
          <p className="rsvp-eyebrow">Private dashboard</p>
          <h1 id="guests-title">Manage guests</h1>
          {guests === null ? (
            <form className="rsvp-form" onSubmit={handleUnlock}>
              <label className="rsvp-note-label" htmlFor="guests-password">
                Password
                <input
                  id="guests-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoFocus
                />
              </label>
              <button className="rsvp-submit" type="submit" disabled={isLoading}>
                {isLoading ? 'Opening guest list...' : 'View guest list'}
              </button>
              {error && (
                <p className="rsvp-submit-error" role="alert">
                  {error}
                </p>
              )}
            </form>
          ) : (
            <div className="results-table-wrap">
              <p className="results-count">
                {guests.length} guest{guests.length === 1 ? '' : 's'} added
              </p>
              <label className="rsvp-note-label" htmlFor="guest-search">
                Search guests
                <input
                  id="guest-search"
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Type a name..."
                />
              </label>
              <form className="rsvp-form" onSubmit={handleAdd} style={{ marginTop: 0 }}>
                <label className="rsvp-note-label" htmlFor="new-guest-name">
                  Add a guest
                  <input
                    id="new-guest-name"
                    type="text"
                    value={newGuestName}
                    onChange={(event) => setNewGuestName(event.target.value)}
                    placeholder="Full name"
                    required
                  />
                </label>
                <button className="rsvp-submit" type="submit" disabled={isAdding}>
                  {isAdding ? 'Adding...' : 'Add guest'}
                </button>
                {addError && (
                  <p className="rsvp-submit-error" role="alert">
                    {addError}
                  </p>
                )}
              </form>
              {rowError && (
                <p className="rsvp-submit-error" role="alert">
                  {rowError}
                </p>
              )}
              <div className="results-table-scroll">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Guest</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGuests.map((guest) =>
                      editingId === guest.id ? (
                        <tr key={guest.id}>
                          <td colSpan={2}>
                            <form className="guest-edit-form" onSubmit={handleSaveEdit}>
                              <input
                                className="guest-edit-input"
                                type="text"
                                value={editingName}
                                onChange={(event) => setEditingName(event.target.value)}
                                required
                                autoFocus
                              />
                              <button className="rsvp-submit" type="submit" disabled={isSaving}>
                                {isSaving ? 'Saving...' : 'Save'}
                              </button>
                              <button
                                className="rsvp-text-button"
                                type="button"
                                onClick={cancelEditing}
                                disabled={isSaving}
                              >
                                Cancel
                              </button>
                            </form>
                          </td>
                        </tr>
                      ) : confirmDeleteId === guest.id ? (
                        <tr key={guest.id}>
                          <td colSpan={2}>
                            <div className="guest-confirm-delete">
                              <span>Remove {guest.full_name}?</span>
                              <button
                                className="rsvp-text-button guest-confirm-delete-yes"
                                type="button"
                                onClick={() => handleDelete(guest)}
                                disabled={deletingId === guest.id}
                              >
                                {deletingId === guest.id ? 'Removing...' : 'Yes, remove'}
                              </button>
                              <button
                                className="rsvp-text-button"
                                type="button"
                                onClick={() => setConfirmDeleteId(null)}
                                disabled={deletingId === guest.id}
                              >
                                Cancel
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr key={guest.id}>
                          <td>{guest.full_name}</td>
                          <td>
                            <button
                              className="rsvp-text-button guest-action-button"
                              type="button"
                              onClick={() => startEditing(guest)}
                            >
                              Edit
                            </button>
                            <button
                              className="rsvp-text-button guest-action-button"
                              type="button"
                              onClick={() => setConfirmDeleteId(guest.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              {guests.length === 0 && <p className="rsvp-empty-state">No guests added yet.</p>}
              {guests.length > 0 && filteredGuests.length === 0 && (
                <p className="rsvp-empty-state">No guests match your search.</p>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
