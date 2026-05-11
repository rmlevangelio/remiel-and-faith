import { useState, useEffect } from 'react';
import Head from 'next/head';

interface Countdown {
  d: string;
  h: string;
  m: string;
  s: string;
  days2: string | number;
}

export default function Home() {
  const [countdown, setCountdown] = useState<Countdown>({
    d: '--',
    h: '--',
    m: '--',
    s: '--',
    days2: '--',
  });
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const photos = [
    { src: '/images/archery.jpg', alt: 'Archery', span: true },
    { src: '/images/coffee.jpg', alt: 'Coffee', span: false },
    { src: '/images/logo.jpg', alt: 'Remiel & Faith', span: false },
    { src: '/images/norway-1.jpg', alt: 'Norway', span: true },
    { src: '/images/IMG_0213.jpg', alt: 'Photo', span: false },
    { src: '/images/IMG_1317.jpg', alt: 'Photo', span: false },
    { src: '/images/IMG_4309.JPG', alt: 'Photo', span: true },
    { src: '/images/IMG_4574.JPG', alt: 'Photo', span: false },
    { src: '/images/IMG_4677.JPG', alt: 'Photo', span: false },
    { src: '/images/IMG_4930.JPG', alt: 'Photo', span: true },
    { src: '/images/IMG_6392.JPG', alt: 'Photo', span: false },
    { src: '/images/IMG_6553.JPG', alt: 'Photo', span: false },
    { src: '/images/IMG_7852.JPG', alt: 'Photo', span: true },
    { src: '/images/IMG_9361.JPG', alt: 'Photo', span: false },
    { src: '/images/IMG_9793.JPG', alt: 'Photo', span: false },
    { src: '/images/IMG_9848.JPG', alt: 'Photo', span: true },
  ];
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const openPhoto = (index: number) => setPhotoIndex(index);
  const closePhoto = () => setPhotoIndex(null);
  const prevPhoto = () =>
    setPhotoIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  const nextPhoto = () => setPhotoIndex((i) => (i !== null ? (i + 1) % photos.length : 0));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (photoIndex === null) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closePhoto();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [photoIndex]);

  useEffect(() => {
    const update = () => {
      const target = new Date('2027-03-15T16:30:00');
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');
      if (diff <= 0) {
        setCountdown({ d: '00', h: '00', m: '00', s: '00', days2: '00' });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCountdown({ d: pad(d), h: pad(h), m: pad(m), s: pad(s), days2: d });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Forever Begins · Remiel &amp; Faith</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Background */}
      <div className="bg-wrap">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
        <div className="bg-sweep"></div>
      </div>

      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-logo">
          <svg viewBox="0 0 18 18" fill="white">
            <path
              d="M9 1a8 8 0 100 16A8 8 0 009 1zm0 2a6 6 0 110 12A6 6 0 019 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
              opacity="0.6"
            />
            <circle cx="9" cy="9" r="2" fill="white" />
          </svg>
          Forever Begins
        </div>
        <div className="topbar-spacer"></div>
        <nav className="topbar-nav">
          <a href="#story">Story</a>
          <a href="#details">Details</a>
          <a href="#getting-there">Getting There</a>
          <a href="#gallery">Gallery</a>
          <a href="#rsvp">Gift</a>
        </nav>
        <div className="topbar-avatar">R&amp;F</div>
      </div>

      {/* Banner */}
      {/* <div className="banner fade-in d1">
        <div className="banner-icon">💌</div>
        <div className="banner-text">
          <strong>You&apos;re Invited — Remiel &amp; Faith, March 15, 2027</strong>
          <span>Please RSVP by November 15th · Soirée Events Place, Cavite, Philippines</span>
        </div>
        <span className="banner-arrow ">›</span>
      </div> */}

      {/* Main Bento Grid */}
      <div className="main !mt-8">
        {/* Sidebar / Left Column */}
        <div className="col-left fade-in d2">
          {/* Profile Card */}
          <div className="card profile-card">
            <div className="card-header">
              <div
                className="card-icon"
                style={{ background: 'rgba(74,158,255,0.15)', fontSize: '14px' }}
              >
                💑
              </div>
              <div>
                <div className="card-title">The Couple</div>
                <div className="card-sub">
                  <span className="dot"></span> March 15, 2027
                </div>
              </div>
            </div>
            <div className="profile-body">
              <div className="profile-avatar-wrap">
                <span className="profile-avatar-initials">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo.jpg" alt="Remiel &amp; Faith" />
                </span>
              </div>
              <div className="profile-names">
                Remiel<span className="amp"> &amp; </span>Faith
              </div>
              <div className="profile-date">To be married in Cavite, Philippines</div>
              <div className="profile-badge">Celebrating Together</div>
              <div className="profile-divider"></div>
              <div className="profile-stat-row">
                <div className="profile-stat">
                  <span className="profile-stat-num">{countdown.days2}</span>
                  <div className="profile-stat-label">Days Left</div>
                </div>
                <div className="profile-stat">
                  <span className="profile-stat-num">200</span>
                  <div className="profile-stat-label">Guests</div>
                </div>
                <div className="profile-stat">
                  <span className="profile-stat-num">2</span>
                  <div className="profile-stat-label">Years Together</div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(240,192,96,0.15)' }}>
                ✨
              </div>
              <div>
                <div className="card-title">Fun Facts</div>
                <div className="card-sub">About us</div>
              </div>
            </div>
            <div className="fun-facts-list">
              <div className="fun-fact-item">
                <span className="fun-fact-icon">📍</span>
                <span>~10,200 km apart — Düsseldorf to Singapore</span>
              </div>
              <div className="fun-fact-item">
                <span className="fun-fact-icon">🕐</span>
                <span>7-hour timezone gap (SGT → CET)</span>
              </div>
              <div className="fun-fact-item">
                <span className="fun-fact-icon">🌍</span>
                <span>4 countries in their story</span>
              </div>
              <div className="fun-fact-item">
                <span className="fun-fact-icon">🎵</span>
                <span>Started with a song, ends with a vow</span>
              </div>
              <div className="fun-fact-item">
                <span className="fun-fact-icon">🦌</span>
                <span>Proposal in a reindeer sledge in the Arctic</span>
              </div>
            </div>
          </div>

          {/* Hashtag */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(255,143,163,0.12)' }}>
                📸
              </div>
              <div>
                <div className="card-title">Share the Moment</div>
                <div className="card-sub">Tag us on Instagram</div>
              </div>
            </div>
            <div className="hashtag-body">
              <div className="hashtag-tag">#RemielAndFaith2027</div>
              <div className="hashtag-desc">
                Snap, post, and tag your photos so we can relive every moment together.
              </div>
              <a
                href="https://www.instagram.com/explore/tags/RemielAndFaith2027/"
                target="_blank"
                rel="noopener noreferrer"
                className="hashtag-link"
              >
                View on Instagram ↗
              </a>
            </div>
          </div>

          {/* Wishes */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(167,139,250,0.12)' }}>
                💌
              </div>
              <div>
                <div className="card-title">Leave a Wish</div>
                <div className="card-sub">We&apos;d love to hear from you</div>
              </div>
            </div>
            <div className="wishes-body">
              <div className="wishes-desc">
                Send us your love, prayers, and well wishes. We&apos;ll cherish every word.
              </div>
              <a
                href="https://forms.gle/yourformlink"
                target="_blank"
                rel="noopener noreferrer"
                className="wishes-btn"
              >
                ✍️ Write a message ↗
              </a>
            </div>
          </div>
        </div>
        {/* end col-left */}

        {/* Story */}
        <div className="col-right fade-in d4" id="story">
          {/* Countdown */}
          <div className="card countdown-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(240,192,96,0.15)' }}>
                ⏳
              </div>
              <div>
                <div className="card-title">Countdown</div>
                <div className="card-sub">Until we say &quot;I do&quot;</div>
              </div>
            </div>
            <div className="countdown-body">
              <div className="cd-unit">
                <span className="cd-num">{countdown.d}</span>
                <span className="cd-label">Days</span>
              </div>
              <div className="cd-unit">
                <span className="cd-num">{countdown.h}</span>
                <span className="cd-label">Hours</span>
              </div>
              <div className="cd-unit">
                <span className="cd-num">{countdown.m}</span>
                <span className="cd-label">Mins</span>
              </div>
              <div className="cd-unit">
                <span className="cd-num">{countdown.s}</span>
                <span className="cd-label">Secs</span>
              </div>
            </div>
          </div>

          <div className="card story-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(255,143,163,0.15)' }}>
                📖
              </div>
              <div>
                <div className="card-title">Our Story</div>
                <div className="card-sub">A love in chapters</div>
              </div>
            </div>
            <div className="story-list">
              <div className="story-item">
                <div className="story-dot-col">
                  <div className="story-dot"></div>
                  <div className="story-line"></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="story-year">November 2024 · Paris, France</div>
                  <div className="story-title">A story in passing</div>
                  <div className="story-desc">
                    Remiel spotted Faith&rsquo;s Instagram story — she was in Paris. He slid in, a a
                    conversation started, then a call — just two friends catching up. They agreed to
                    meet in December. It almost never happened.
                  </div>
                </div>
                <span className="story-emoji">🗼</span>
              </div>
              <div className="story-item">
                <div className="story-dot-col">
                  <div className="story-dot"></div>
                  <div className="story-line"></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="story-year">January 6, 2025 · Estancia, Pasig, Philippines</div>
                  <div className="story-title">The day it all began</div>
                  <div className="story-desc">
                    Lunch at Peri Peri Chicken, reminiscing childhood. Remiel brought up long
                    distance — Faith said, &ldquo;I do believe, it&rsquo;s only a matter of
                    trust.&rdquo; Remiel asked: &ldquo;Do you trust me?&rdquo; Faith said no. Of
                    course. 😄
                  </div>
                </div>
                <span className="story-emoji">🌸</span>
              </div>
              <div className="story-item">
                <div className="story-dot-col">
                  <div className="story-dot" style={{ background: '#34d399' }}></div>
                  <div className="story-line"></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="story-year">
                    February 20, 2025 · First &ldquo;I love you&rdquo;
                  </div>
                  <div className="story-title">The words that changed everything</div>
                  <div className="story-desc">
                    Weeks of texts and calls, closing the distance one message at a time. Then on
                    February 20 — the first &ldquo;I love you.&rdquo;
                  </div>
                </div>
                <span className="story-emoji">💬</span>
              </div>
              <div className="story-item">
                <div className="story-dot-col">
                  <div className="story-dot" style={{ background: 'var(--gold)' }}></div>
                  <div className="story-line"></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="story-year">2025–2026 · Singapore &amp; Germany</div>
                  <div className="story-title">Long distance, short in doubt</div>
                  <div className="story-desc">
                    Two continents, one love. Video calls across time zones and singing together
                    online — Asia and Europe bridged by a screen and many songs.
                  </div>
                </div>
                <span className="story-emoji">✈️</span>
              </div>
              <div className="story-item">
                <div className="story-dot-col">
                  <div className="story-dot" style={{ background: 'var(--rose)' }}></div>
                  <div className="story-line"></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="story-year">February 20, 2026 · Tromsø, Norway</div>
                  <div className="story-title">The question</div>
                  <div className="story-desc">
                    Sitting together in a reindeer sledge in the Arctic wilds of Tromsø, Remiel
                    popped the question. Faith looked at him and said, &ldquo;Are you
                    serious?&rdquo; Then, finally — yes. <em>Palagi</em> was playing.
                  </div>
                </div>
                <span className="story-emoji">💍</span>
              </div>
              <div className="story-item">
                <div className="story-dot-col">
                  <div className="story-dot" style={{ background: '#a78bfa' }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="story-year">March 15, 2027 · Cavite, Philippines</div>
                  <div className="story-title">Forever begins</div>
                  <div className="story-desc">
                    Soirée Events Place. Surrounded by everyone we love. The next chapter starts
                    here.
                  </div>
                </div>
                <span className="story-emoji">🕊️</span>
              </div>
            </div>
            {/* Their Songs */}
            <div className="story-song">
              <div className="story-song-label">🎵 Their songs</div>
              <div className="story-songs-list">
                <div className="story-songs-item">
                  <div className="story-song-title">
                    Palagi &mdash; TJ Monterde &amp; KZ Tandingan
                  </div>
                  <div className="story-song-embed">
                    <iframe
                      width="100%"
                      height="152"
                      src="https://www.youtube.com/embed/fu9yk7gCTbc?rel=0&modestbranding=1"
                      title="Palagi by TJ Monterde &amp; KZ Tandingan"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="story-songs-item">
                  <div className="story-song-title">Goodness of God &mdash; Bethel Music</div>
                  <div className="story-song-embed">
                    <iframe
                      width="100%"
                      height="152"
                      src="https://www.youtube.com/embed/n0FBb6hnwTo?rel=0&modestbranding=1"
                      title="Goodness of God by Bethel Music"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="story-songs-item">
                  <div className="story-song-title">Ikaw at Ako &mdash; Johnoy Danao</div>
                  <div className="story-song-embed">
                    <iframe
                      width="100%"
                      height="152"
                      src="https://www.youtube.com/embed/l5ta60yfryc?rel=0&modestbranding=1"
                      title="Ikaw at Ako by Johnoy Danao"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Row */}
        <div className="details-row fade-in d5" id="details">
          <div className="card detail-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(74,158,255,0.12)' }}>
                🏛️
              </div>
              <div>
                <div className="card-title">Ceremony</div>
                <div className="card-sub">4:30 PM sharp</div>
              </div>
            </div>
            <div className="card-body" style={{ padding: '14px 18px 18px' }}>
              <div className="detail-divider"></div>
              <div className="detail-lines">
                <div className="detail-line">
                  <strong>English Garden</strong>
                </div>
                <div className="detail-line">Soirée Events Place</div>
                <div className="detail-line" style={{ marginTop: '6px' }}>
                  Guests seated from 4:00 PM. First come, first seated.
                </div>
              </div>
            </div>
          </div>
          <div className="card detail-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(240,192,96,0.12)' }}>
                🥂
              </div>
              <div>
                <div className="card-title">Reception</div>
                <div className="card-sub">7:30 PM onwards</div>
              </div>
            </div>
            <div className="card-body" style={{ padding: '14px 18px 18px' }}>
              <div className="detail-divider" style={{ background: 'rgba(240,192,96,0.4)' }}></div>
              <div className="detail-lines">
                <div className="detail-line">
                  <strong>Le Maison Grande</strong>
                </div>
                <div className="detail-line">Soirée Events Place</div>
                <div className="detail-line" style={{ marginTop: '6px' }}>
                  Cocktails 6:00 PM · Dinner 7:30 PM · Dancing until midnight.
                </div>
              </div>
            </div>
          </div>
          <div className="card detail-card detail-card--wide">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(255,143,163,0.12)' }}>
                👗
              </div>
              <div>
                <div className="card-title">Dress Code</div>
                <div className="card-sub">Black Tie Optional</div>
              </div>
            </div>
            <div className="card-body" style={{ padding: '14px 18px 18px' }}>
              <div className="detail-divider" style={{ background: 'rgba(255,143,163,0.4)' }}></div>
              <div className="detail-lines">
                <div className="detail-line">
                  <strong>Formal evening wear</strong>
                </div>
                <div className="detail-line" style={{ marginTop: '6px' }}>
                  Please no white — let the bride shine ✨
                </div>
              </div>
              {/* Colour Palette */}
              <div className="dc-palette-label">Colour Palette</div>
              <div className="dc-palette">
                <div className="dc-swatch">
                  <div className="dc-swatch-dot" style={{ background: '#1a2744' }}></div>
                  <span>Deep Navy</span>
                </div>
                <div className="dc-swatch">
                  <div className="dc-swatch-dot" style={{ background: '#6b2d5e' }}></div>
                  <span>Plum Wine</span>
                </div>
                <div className="dc-swatch">
                  <div className="dc-swatch-dot" style={{ background: '#b08a9e' }}></div>
                  <span>Muted Mauve</span>
                </div>
                <div className="dc-swatch">
                  <div className="dc-swatch-dot" style={{ background: '#e8d9b5' }}></div>
                  <span>Champagne</span>
                </div>
                <div className="dc-swatch">
                  <div className="dc-swatch-dot" style={{ background: '#7a9e7e' }}></div>
                  <span>Sage Green</span>
                </div>
              </div>
              {/* Attire Examples */}
              <div className="dc-attire">
                <div className="dc-attire-col">
                  <div className="dc-attire-label">👔 Gentlemen</div>
                  <ul className="dc-attire-list">
                    <li>Semi-formal wear</li>
                    <li>Suit &amp; tie or blazer</li>
                    <li>Dress shoes</li>
                  </ul>
                </div>
                <div className="dc-attire-col">
                  <div className="dc-attire-label">👗 Ladies</div>
                  <ul className="dc-attire-list">
                    <li>Floor-length or midi gown</li>
                    <li>Formal cocktail dress</li>
                    <li>Avoid white, ivory &amp; bridal tones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting There */}
        <div className="card getting-there-card fade-in d5" id="getting-there">
          <div className="card-header">
            <div className="card-icon" style={{ background: 'rgba(107,203,119,0.12)' }}>
              ✈️
            </div>
            <div>
              <div className="card-title">How to Get There</div>
              <div className="card-sub">For guests travelling from abroad</div>
            </div>
          </div>
          <div className="getting-there-body">
            <div className="getting-there-col">
              <div className="gt-item">
                <div className="gt-icon">🛬</div>
                <div>
                  <div className="gt-label">Nearest Airport</div>
                  <div className="gt-title">Ninoy Aquino International Airport</div>
                  <div className="gt-sub">Terminal 3 · Manila, Philippines</div>
                  <div className="gt-desc">
                    NAIA T3 is the main international terminal. Most major airlines arrive here.
                    From the airport, the venue in Cavite is approximately 1–1.5 hours by car
                    depending on traffic.
                  </div>
                </div>
              </div>
              <div className="gt-item">
                <div className="gt-icon">🚌</div>
                <div>
                  <div className="gt-label">Shuttle Service</div>
                  <div className="gt-title">Complimentary Shuttle Bus</div>
                  <div className="gt-sub">Provided by the couple</div>
                  <div className="gt-desc">
                    We are arranging shuttle buses from key pick-up points. More details to follow.
                  </div>
                  <div className="gt-stops">
                    <div className="gt-stop">
                      <span className="gt-stop-dot" style={{ background: '#4a9eff' }}></span>
                      <span>
                        <strong>Makati</strong> · TBD pick-up point
                      </span>
                    </div>
                    <div className="gt-stop">
                      <span className="gt-stop-dot" style={{ background: '#a78bfa' }}></span>
                      <span>
                        <strong>BGC</strong> · TBD pick-up point
                      </span>
                    </div>
                    <div className="gt-stop">
                      <span className="gt-stop-dot" style={{ background: '#f0c060' }}></span>
                      <span>
                        <strong>Pasig</strong> · TBD pick-up point
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="getting-there-col">
              <div className="gt-item">
                <div className="gt-icon">🚗</div>
                <div>
                  <div className="gt-label">By Car / Rideshare</div>
                  <div className="gt-title">Soirée Events Place</div>
                  <div className="gt-sub">Cavite, Philippines</div>
                  <div className="gt-desc">
                    Grab and ride-hailing apps are widely available in Metro Manila. Parking is
                    available at the venue. We recommend leaving early to account for SLEX traffic.
                  </div>
                  <a
                    href="https://www.grab.com/ph/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grab-badge"
                  >
                    <svg
                      width="36"
                      height="14"
                      viewBox="0 0 72 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6.5 6C3.46 6 1 8.46 1 11.5v5C1 19.54 3.46 22 6.5 22h5.25v-5.5H8.5V14h6.25v8H6.5C2.36 22 0 18.64 0 16.5v-5C0 7.36 2.36 4 6.5 4H14v2H6.5z"
                        fill="white"
                      />
                      <text
                        x="18"
                        y="20"
                        fontFamily="Arial,sans-serif"
                        fontWeight="800"
                        fontSize="18"
                        fill="white"
                      >
                        grab
                      </text>
                    </svg>
                    <span>Download ↗</span>
                  </a>
                </div>
              </div>
              <div className="gt-item">
                <div className="gt-icon">💡</div>
                <div>
                  <div className="gt-label">Tips</div>
                  <div className="gt-title">Travel Advice</div>
                  <div className="gt-desc">
                    <ul className="gt-tips">
                      <li>
                        Philippine peso (PHP) is the local currency — ATMs available at NAIA T3.
                      </li>
                      <li>
                        Grab app is the most reliable rideshare option in Manila.{' '}
                        <a
                          href="https://www.grab.com/ph/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gt-inline-link"
                        >
                          Get Grab ↗
                        </a>
                      </li>
                      <li>
                        Allow extra time — Metro Manila traffic can be heavy especially on weekends.
                      </li>
                      <li>Contact us if you need help arranging transport from the airport.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gt-map-wrap">
            <iframe
              title="Soirée Events Place"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.7231252259494!2d120.89277857558334!3d14.152368586282618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd83b522cf6c55%3A0xef5ffe850027931!2sSoir%C3%A9e%20Events%20Place!5e0!3m2!1sen!2ssg!4v1778430508550!5m2!1sen!2ssg"
              className="gt-map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.app.goo.gl/9JAif7dmdUsznWB29"
              target="_blank"
              rel="noopener noreferrer"
              className="gt-map-link"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div className="card gallery-card fade-in d6" id="gallery">
          <div className="card-header">
            <div
              className="card-icon"
              style={{
                background: 'linear-gradient(135deg,#ff6b6b22,#ffd93d22,#6bcb7722,#4d96ff22)',
              }}
            >
              🖼️
            </div>
            <div>
              <div className="card-title">Our Moments</div>
              <div className="card-sub">
                <span className="dot" style={{ background: '#6bcb77' }}></span> Photo Library · 4
                Photos
              </div>
            </div>
          </div>
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className={`gallery-cell${photo.span ? ' span2' : ''}`}
                onClick={() => openPhoto(index)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.alt} className="gallery-img" />
              </div>
            ))}
          </div>
          <div className="card-footer">
            <button className="more-btn">···</button>
            <span style={{ fontSize: '12px', color: 'var(--text3)' }}>4 photos</span>
          </div>
        </div>

        {/* Bottom Row: Bank Details + Key Dates */}
        <div className="bottom-row fade-in d7" id="rsvp">
          <div className="card rsvp-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(240,192,96,0.15)' }}>
                🏦
              </div>
              <div>
                <div className="card-title">Gift &amp; Bank Details</div>
                <div className="card-sub">For those who wish to send a gift</div>
              </div>
            </div>
            <div className="card-body" style={{ padding: '14px 18px 20px' }}>
              <p className="bank-note" style={{ marginTop: 0 }}>
                Your presence is already the greatest gift. But if you wish to bless us further, we
                are deeply grateful. 💛
              </p>

              {/* QR row always visible */}
              <div className="bank-qr-always-row">
                <div className="bank-qr-item">
                  <div className="bank-qr-box">
                    <span className="bank-qr-label">QR</span>
                  </div>
                  <span className="bank-qr-currency">Revolut</span>
                  <span className="bank-qr-sub">🇪🇺 EUR</span>
                </div>
                <div className="bank-qr-item">
                  <div className="bank-qr-box">
                    <span className="bank-qr-label">QR</span>
                  </div>
                  <span className="bank-qr-currency">Maribank</span>
                  <span className="bank-qr-sub">🇸🇬 SGD</span>
                </div>
                <div className="bank-qr-item">
                  <div className="bank-qr-box">
                    <span className="bank-qr-label">QR</span>
                  </div>
                  <span className="bank-qr-currency">BPI</span>
                  <span className="bank-qr-sub">🇵🇭 PHP</span>
                </div>
                <div className="bank-qr-item">
                  <div className="bank-qr-box">
                    <span className="bank-qr-label">QR</span>
                  </div>
                  <span className="bank-qr-currency">BDO</span>
                  <span className="bank-qr-sub">🇵🇭 PHP</span>
                </div>
              </div>

              <button className="bank-toggle" onClick={() => setShowBankDetails((v) => !v)}>
                {showBankDetails ? 'Hide bank details ↑' : 'View bank details →'}
              </button>

              {showBankDetails && (
                <div className="bank-details-body">
                  {/* EUR */}
                  <div className="bank-currency-heading">🇪🇺 EUR · Revolut</div>
                  <div className="bank-section">
                    <div className="bank-rows">
                      <div className="bank-row">
                        <span className="bank-key">Bank</span>
                        <span className="bank-val">Revolut</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">Account Name</span>
                        <span className="bank-val">Remiel A. Placeholder</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">IBAN</span>
                        <span className="bank-val">XX00 0000 0000 0000 0000</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">BIC/SWIFT</span>
                        <span className="bank-val">XXXXXXXX</span>
                      </div>
                    </div>
                  </div>

                  <div className="bank-divider"></div>

                  {/* SGD */}
                  <div className="bank-currency-heading">🇸🇬 SGD · Maribank</div>
                  <div className="bank-section">
                    <div className="bank-rows">
                      <div className="bank-row">
                        <span className="bank-key">Bank</span>
                        <span className="bank-val">Maribank</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">Account Name</span>
                        <span className="bank-val">Remiel A. Placeholder</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">Account No.</span>
                        <span className="bank-val">0000 0000 0000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bank-divider"></div>

                  {/* PHP BPI */}
                  <div className="bank-currency-heading">🇵🇭 PHP · BPI</div>
                  <div className="bank-section">
                    <div className="bank-rows">
                      <div className="bank-row">
                        <span className="bank-key">Bank</span>
                        <span className="bank-val">BPI Family Bank</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">Account Name</span>
                        <span className="bank-val">Remiel A. Placeholder</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">Account No.</span>
                        <span className="bank-val">0000 0000 0000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bank-divider"></div>

                  {/* PHP BDO */}
                  <div className="bank-currency-heading">🇵🇭 PHP · BDO</div>
                  <div className="bank-section">
                    <div className="bank-rows">
                      <div className="bank-row">
                        <span className="bank-key">Bank</span>
                        <span className="bank-val">BDO Unibank</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">Account Name</span>
                        <span className="bank-val">Remiel A. Placeholder</span>
                      </div>
                      <div className="bank-row">
                        <span className="bank-key">Account No.</span>
                        <span className="bank-val">0000 0000 0000</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="card reminders-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(255,143,163,0.12)' }}>
                🗓️
              </div>
              <div>
                <div className="card-title">Key Dates</div>
                <div className="card-sub">All iCloud</div>
              </div>
              <span className="card-action" style={{ fontSize: '22px', color: 'var(--accent)' }}>
                +
              </span>
            </div>
            <div className="card-body">
              <div className="reminder-item">
                <div className="reminder-dot" style={{ background: '#4a9eff' }}></div>
                <div>
                  <div className="reminder-text">RSVP Deadline</div>
                  <div className="reminder-date">November 15, 2026</div>
                </div>
              </div>
              <div className="reminder-item">
                <div className="reminder-dot" style={{ background: 'var(--rose)' }}></div>
                <div>
                  <div className="reminder-text">Ceremony Begins</div>
                  <div className="reminder-date">March 15, 2027 · 3:00 PM</div>
                </div>
              </div>
              <div className="reminder-item">
                <div className="reminder-dot" style={{ background: '#a78bfa' }}></div>
                <div>
                  <div className="reminder-text">Reception &amp; Dancing</div>
                  <div className="reminder-date">March 15, 2027 · 7:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>Remiel &amp; Faith · March 15, 2027 · Cavite, Philippines · Made with love</p>
      </footer>

      {/* Photo Modal */}
      {photoIndex !== null &&
        (() => {
          const photo = photos[photoIndex];
          return (
            <div className="photo-modal-overlay" onClick={closePhoto}>
              <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
                <button className="photo-modal-close" onClick={closePhoto}>
                  ✕
                </button>
                <button
                  className="photo-modal-arrow photo-modal-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                >
                  ‹
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.alt} className="photo-modal-img" />
                <button
                  className="photo-modal-arrow photo-modal-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                >
                  ›
                </button>
                <div className="photo-modal-counter">
                  {photoIndex + 1} / {photos.length}
                </div>
              </div>
            </div>
          );
        })()}
    </>
  );
}
