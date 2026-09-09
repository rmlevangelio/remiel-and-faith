import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import Background from '../components/Background';

const dietaryOptions = [
  'No dietary restrictions',
  'Vegetarian',
  'Vegan',
  'Halal',
  'Gluten-free',
  'Other',
];

export default function Rsvp() {
  const [query, setQuery] = useState('');
  const [selectedGuest, setSelectedGuest] = useState('');
  const [dietaryRestriction, setDietaryRestriction] = useState('');
  const [dietaryNote, setDietaryNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [matchingGuests, setMatchingGuests] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  const hasSearchQuery = query.trim().length >= 3;

  useEffect(() => {
    if (!hasSearchQuery) {
      setMatchingGuests([]);
      setSearchError('');
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setIsSearching(true);
      setSearchError('');
      try {
        const response = await fetch(`/api/guests?query=${encodeURIComponent(query.trim())}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Unable to search guests.');
        const data = (await response.json()) as { guests: string[] };
        setMatchingGuests(data.guests);
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        setMatchingGuests([]);
        setSearchError('We could not search the guest list. Please try again.');
      } finally {
        if (!controller.signal.aborted) setIsSearching(false);
      }
    }, 250);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [hasSearchQuery, query]);

  function selectGuest(guest: string) {
    setSelectedGuest(guest);
    setQuery(guest);
    setSubmitted(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guestName: selectedGuest,
          dietaryRestriction,
          dietaryNote,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to save your RSVP.');
      }

      setSubmitted(true);
    } catch {
      setSubmitError('We could not save your RSVP. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>RSVP · Remiel &amp; Faith</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Background />

      <main className="rsvp-page">
        <Link className="rsvp-back-link" href="/">
          &larr; Back to wedding details
        </Link>

        <section className="rsvp-panel" aria-labelledby="rsvp-title">
          <div className="rsvp-couple-photo">
            <Image
              src="/images/gallery/new/6.JPG"
              alt="Remiel and Faith"
              width={96}
              height={96}
              priority
            />
          </div>
          <p className="rsvp-eyebrow">Remiel &amp; Faith</p>
          <h1 id="rsvp-title">Will we see you at our wedding?</h1>
          <p className="rsvp-intro">Find your invitation and let us know your meal preference.</p>

          {submitted ? (
            <div className="rsvp-confirmation" role="status">
              <span className="rsvp-confirmation-mark" aria-hidden="true">
                ✓
              </span>
              <div>
                <h2>Thank you, {selectedGuest}.</h2>
                <p>Your dietary preference has been recorded.</p>
              </div>
              <button
                type="button"
                className="rsvp-text-button"
                onClick={() => setSubmitted(false)}
              >
                Edit response
              </button>
            </div>
          ) : (
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="rsvp-field">
                <label htmlFor="guest-search">Your name</label>
                <input
                  id="guest-search"
                  type="search"
                  placeholder="Start typing your name"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setSelectedGuest('');
                  }}
                  autoComplete="name"
                />
                <div className="rsvp-guest-list" role="listbox" aria-label="Matching guest names">
                  {!hasSearchQuery ? (
                    <p className="rsvp-empty-state">
                      Enter at least 3 characters to find your name.
                    </p>
                  ) : isSearching ? (
                    <p className="rsvp-empty-state">Searching guest list...</p>
                  ) : searchError ? (
                    <p className="rsvp-empty-state" role="alert">
                      {searchError}
                    </p>
                  ) : matchingGuests.length > 0 ? (
                    matchingGuests.map((guest) => (
                      <button
                        key={guest}
                        type="button"
                        role="option"
                        aria-selected={selectedGuest === guest}
                        className={`rsvp-guest-option${selectedGuest === guest ? ' rsvp-guest-option--selected' : ''}`}
                        onClick={() => selectGuest(guest)}
                      >
                        <span>{guest}</span>
                        {selectedGuest === guest && <span aria-hidden="true">Selected</span>}
                      </button>
                    ))
                  ) : (
                    <p className="rsvp-empty-state">
                      We could not find that name. Please check your invitation.
                    </p>
                  )}
                </div>
              </div>

              <fieldset className="rsvp-fieldset" disabled={!selectedGuest}>
                <legend>Dietary restriction</legend>
                <div className="rsvp-dietary-grid">
                  {dietaryOptions.map((option) => (
                    <label className="rsvp-dietary-option" key={option}>
                      <input
                        type="radio"
                        name="dietary-restriction"
                        value={option}
                        checked={dietaryRestriction === option}
                        onChange={(event) => setDietaryRestriction(event.target.value)}
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {dietaryRestriction === 'Other' && (
                  <label className="rsvp-note-label" htmlFor="dietary-note">
                    Please share the details
                    <input
                      id="dietary-note"
                      value={dietaryNote}
                      onChange={(event) => setDietaryNote(event.target.value)}
                      required
                    />
                  </label>
                )}
              </fieldset>

              <button
                className="rsvp-submit"
                type="submit"
                disabled={!selectedGuest || !dietaryRestriction || isSubmitting}
              >
                {isSubmitting ? 'Saving your RSVP...' : 'Confirm RSVP'}
              </button>
              {submitError && (
                <p className="rsvp-submit-error" role="alert">
                  {submitError}
                </p>
              )}
            </form>
          )}
        </section>
      </main>
    </>
  );
}
