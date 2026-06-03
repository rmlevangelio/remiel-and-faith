export default function FunFactsCard() {
  return (
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
  );
}
