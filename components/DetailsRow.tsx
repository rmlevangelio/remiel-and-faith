export default function DetailsRow() {
  return (
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
              <strong>Formal evening attire is warmly encouraged</strong>
            </div>
            <div className="detail-line" style={{ marginTop: '6px' }}>
              Please no white — let the bride shine ✨
            </div>
          </div>
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
          <div className="dc-attire">
            <div className="dc-attire-col">
              <div className="dc-attire-label">👔 Gentlemen</div>
              <ul className="dc-attire-list">
                <li>Blazer or suit jacket</li>
                <li>Dress trousers</li>
                <li>Collared button-down</li>
              </ul>
            </div>
            <div className="dc-attire-col">
              <div className="dc-attire-label">👗 Ladies</div>
              <ul className="dc-attire-list">
                <li>Floor-length or midi gown</li>
                <li>Cocktail dress</li>
                <li>Avoid white, ivory &amp; bridal tones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
