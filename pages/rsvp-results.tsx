import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Background from '../components/Background';

type Rsvp = {
  guest_name: string;
  attending: boolean;
  dietary_restriction: string | null;
  dietary_note: string | null;
  updated_at: string;
};

const dietaryOptions = [
  'No dietary restrictions',
  'Vegetarian',
  'Vegan',
  'Halal',
  'Gluten-free',
  'Other',
];

type AttendanceFilter = 'all' | 'attending' | 'not-attending';

export default function RsvpResults() {
  const [password, setPassword] = useState('');
  const [rsvps, setRsvps] = useState<Rsvp[] | null>(null);
  const [pendingGuests, setPendingGuests] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attendanceFilter, setAttendanceFilter] = useState<AttendanceFilter>('all');
  const attendingCount = rsvps?.filter((rsvp) => rsvp.attending).length ?? 0;
  const notAttendingCount = rsvps?.filter((rsvp) => !rsvp.attending).length ?? 0;
  const dietaryTotals = dietaryOptions.map((option) => ({
    option,
    count:
      rsvps?.filter((rsvp) => rsvp.attending && rsvp.dietary_restriction === option).length ?? 0,
  }));
  const filteredRsvps =
    rsvps?.filter((rsvp) => {
      if (attendanceFilter === 'attending') return rsvp.attending;
      if (attendanceFilter === 'not-attending') return !rsvp.attending;
      return true;
    }) ?? [];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const authorization = `Basic ${window.btoa(`results:${password}`)}`;
      const response = await fetch('/api/rsvp-results', {
        headers: { Authorization: authorization },
      });
      if (response.status === 401) throw new Error('Incorrect password.');
      if (!response.ok) throw new Error('Unable to load RSVP results.');

      const data = (await response.json()) as { rsvps: Rsvp[]; pendingGuests: string[] };
      setRsvps(data.rsvps);
      setPendingGuests(data.pendingGuests);
      setPassword('');
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Unable to load RSVP results.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>RSVP Results · Remiel &amp; Faith</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Background />
      <main className="rsvp-page rsvp-results-page">
        <Link className="rsvp-back-link" href="/">
          &larr; Back to wedding details
        </Link>
        <section className="rsvp-panel" aria-labelledby="results-title">
          <p className="rsvp-eyebrow">Private dashboard</p>
          <h1 id="results-title">RSVP results</h1>
          {rsvps === null ? (
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <label className="rsvp-note-label" htmlFor="results-password">
                Password
                <input
                  id="results-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoFocus
                />
              </label>
              <button className="rsvp-submit" type="submit" disabled={isLoading}>
                {isLoading ? 'Opening results...' : 'View results'}
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
                {rsvps.length} response{rsvps.length === 1 ? '' : 's'} received &middot;{' '}
                {attendingCount} attending &middot; {notAttendingCount} not attending
              </p>
              <section className="results-dietary-summary" aria-labelledby="dietary-summary-title">
                <h2 id="dietary-summary-title">Dietary totals</h2>
                <div className="results-dietary-grid">
                  {dietaryTotals.map(({ option, count }) => (
                    <div className="results-dietary-total" key={option}>
                      <span>{count}</span>
                      <p>{option}</p>
                    </div>
                  ))}
                </div>
              </section>
              <div className="results-side-by-side">
                <div>
                  <div className="results-filters" role="group" aria-label="Filter by attendance">
                    {(
                      [
                        { value: 'all', label: 'All' },
                        { value: 'attending', label: 'Attending' },
                        { value: 'not-attending', label: 'Not attending' },
                      ] as const
                    ).map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        className={`results-filter-button${
                          attendanceFilter === value ? ' is-active' : ''
                        }`}
                        onClick={() => setAttendanceFilter(value)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <table className="results-table">
                    <thead>
                      <tr>
                        <th>Guest</th>
                        <th>Attending</th>
                        <th>Dietary restriction</th>
                        <th>Details</th>
                        <th>Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRsvps.map((rsvp) => (
                        <tr key={rsvp.guest_name}>
                          <td>{rsvp.guest_name}</td>
                          <td>{rsvp.attending ? 'Yes' : 'No'}</td>
                          <td>{rsvp.attending ? rsvp.dietary_restriction : '-'}</td>
                          <td>{rsvp.attending ? rsvp.dietary_note || '-' : '-'}</td>
                          <td>{new Date(rsvp.updated_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredRsvps.length === 0 && rsvps.length > 0 && (
                    <p className="rsvp-empty-state">No responses match this filter.</p>
                  )}
                </div>
                <section className="results-pending-summary" aria-labelledby="pending-title">
                  <h2 id="pending-title">Haven&apos;t RSVP&apos;d ({pendingGuests.length})</h2>
                  {pendingGuests.length > 0 ? (
                    <ul className="results-pending-list">
                      {pendingGuests.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="rsvp-empty-state">Everyone has responded.</p>
                  )}
                </section>
              </div>
              {rsvps.length === 0 && <p className="rsvp-empty-state">No RSVP responses yet.</p>}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
