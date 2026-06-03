export default function WishesCard() {
  return (
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
  );
}
