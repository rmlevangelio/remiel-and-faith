export default function StoryCard() {
  return (
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
              Remiel spotted Faith&rsquo;s Instagram story. She was in Paris. He slid in, a
              conversation started, then a call. Just two friends catching up. They agreed to meet
              in December. It almost never happened.
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
              Lunch at Peri Peri Chicken, reminiscing childhood. Remiel brought up long distance.
              Faith said, &ldquo;I do believe, it&rsquo;s only a matter of trust.&rdquo; Remiel
              asked: &ldquo;Do you trust me?&rdquo; Faith said no. Of course. 😄
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
            <div className="story-year">February 20, 2025 · First &ldquo;I love you&rdquo;</div>
            <div className="story-title">February 20</div>
            <div className="story-desc">
              Weeks of texts and calls from opposite ends of the world. Then on February 20, the
              first &ldquo;I love you.&rdquo;
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
              Video calls across time zones and singing together online. Asia and Europe, a screen
              between them and not much else.
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
              Sitting together in a reindeer sledge in the Arctic wilds of Tromsø, Remiel popped the
              question. Faith looked at him and said, &ldquo;Are you serious?&rdquo; Then, finally,
              yes. <em>Palagi</em> was playing.
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
              Soir&eacute;e Events Place. Surrounded by everyone we love. See you there.
            </div>
          </div>
          <span className="story-emoji">🕊️</span>
        </div>
      </div>

      {/* Our Songs */}
      <div className="story-song">
        <div className="story-song-label">🎵 Our songs</div>
        <div className="story-songs-list">
          <div className="story-songs-item">
            <div className="story-song-title">Palagi &mdash; TJ Monterde &amp; KZ Tandingan</div>
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
  );
}
