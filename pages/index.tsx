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
          <a href="#gallery">Gallery</a>
          <a href="#rsvp">Gift</a>
        </nav>
        <div className="topbar-avatar">R&amp;F</div>
      </div>

      {/* Banner */}
      <div className="banner fade-in d1">
        <div className="banner-icon">💌</div>
        <div className="banner-text">
          <strong>You&apos;re Invited — Remiel &amp; Faith, March 15, 2027</strong>
          <span>Please RSVP by November 15th · Soirée Events Place, Cavite, Philippines</span>
        </div>
        <span className="banner-arrow">›</span>
      </div>

      {/* Main Bento Grid */}
      <div className="main">
        {/* Profile Card */}
        <div className="card profile-card fade-in d2">
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
                <span className="profile-stat-num">160</span>
                <div className="profile-stat-label">Guests</div>
              </div>
              <div className="profile-stat">
                <span className="profile-stat-num">6</span>
                <div className="profile-stat-label">Years Together</div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="card countdown-card fade-in d3">
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

        {/* Story */}
        <div className="col-right fade-in d4" id="story">
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
                  <div className="story-year">Spring 2019 · Florence, Italy</div>
                  <div className="story-title">The night it all began</div>
                  <div className="story-desc">
                    A gallery opening, April light, and a conversation that lasted until midnight.
                    They walked Ponte Vecchio twice and made plans to meet again at dawn.
                  </div>
                </div>
                <span className="story-emoji">🌸</span>
              </div>
              <div className="story-item">
                <div className="story-dot-col">
                  <div className="story-dot" style={{ background: 'var(--gold)' }}></div>
                  <div className="story-line"></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="story-year">2020–2022 · Two Cities</div>
                  <div className="story-title">Long distance, short in doubt</div>
                  <div className="story-desc">
                    Video calls at midnight, weekend flights, handwritten letters. Love, it turns
                    out, has no regard for geography.
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
                  <div className="story-year">December 2026 · Amalfi Coast</div>
                  <div className="story-title">The question</div>
                  <div className="story-desc">
                    Clifftop at sunset, the Mediterranean turning gold. Faith asked. Remiel said yes
                    before he finished.
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
          <div className="card detail-card">
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
                <div className="detail-line">
                  Palette: deep navy, plum wine, muted mauve, champagne, sage green
                </div>
                <div className="detail-line" style={{ marginTop: '6px' }}>
                  Please no white — let the bride shine ✨
                </div>
              </div>
            </div>
          </div>
          <div className="card detail-card">
            <div className="card-header">
              <div className="card-icon" style={{ background: 'rgba(167,139,250,0.12)' }}>
                🏨
              </div>
              <div>
                <div className="card-title">Stay</div>
                <div className="card-sub">Room block available</div>
              </div>
            </div>
            <div className="card-body" style={{ padding: '14px 18px 18px' }}>
              <div className="detail-divider" style={{ background: 'rgba(167,139,250,0.4)' }}></div>
              <div className="detail-lines">
                <div className="detail-line">
                  <strong>Canopy Farm PH</strong>
                </div>
                <div className="detail-line">TBD</div>
                <div className="detail-line" style={{ marginTop: '6px' }}>
                  Quote &quot;Remiel &amp; Faith&quot; · Deadline Aug 1st.
                </div>
              </div>
            </div>
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
            <span
              className="card-action"
              style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--accent2)' }}
            >
              Add Photos
            </span>
          </div>
          <div className="gallery-grid">
            {[
              { src: '/images/archery.jpg', alt: 'Archery', span: true },
              { src: '/images/coffee.jpg', alt: 'Coffee', span: false },
              { src: '/images/logo.jpg', alt: 'Remiel & Faith', span: false },
              { src: '/images/norway-1.jpg', alt: 'Norway', span: true },
            ].map((photo) => (
              <div
                key={photo.src}
                className={`gallery-cell${photo.span ? ' span2' : ''}`}
                onClick={() => setSelectedPhoto({ src: photo.src, alt: photo.alt })}
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
                <div className="reminder-dot" style={{ background: 'var(--gold)' }}></div>
                <div>
                  <div className="reminder-text">Hotel Block Closes</div>
                  <div className="reminder-date">February 15, 2027</div>
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
      {selectedPhoto && (
        <div className="photo-modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={() => setSelectedPhoto(null)}>
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="photo-modal-img" />
          </div>
        </div>
      )}
    </>
  );
}
