export default function HashtagCard() {
  return (
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
        <div className="hashtag-tag">#REMainInFAITH</div>
        <div className="hashtag-desc">
          Snap, post, and tag your photos so we can relive every moment together.
        </div>
        <a
          href="https://www.instagram.com/explore/tags/REMainInFAITH/"
          target="_blank"
          rel="noopener noreferrer"
          className="hashtag-link"
        >
          View on Instagram ↗
        </a>
      </div>
    </div>
  );
}
