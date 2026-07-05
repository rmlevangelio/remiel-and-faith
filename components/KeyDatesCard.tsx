export default function KeyDatesCard() {
  return (
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
            <div className="reminder-date">March 15, 2027 · 4:30 PM</div>
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
  );
}
