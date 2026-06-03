export default function WeddingPartyCard() {
  return (
    <div className="card wedding-party-card fade-in d5" id="wedding-party">
      <div className="card-header">
        <div className="card-icon" style={{ background: 'rgba(167,139,250,0.12)' }}>
          💐
        </div>
        <div>
          <div className="card-title">Entourage</div>
          <div className="card-sub">The people who make it possible</div>
        </div>
      </div>

      <div className="wp-body-grid">
        <div className="wp-inner">
          {/* Parents */}
          <div className="wp-two-col">
            <div className="wp-section">
              <div className="wp-section-title">
                <span className="wp-section-icon">👨‍👩‍👦</span> Parents of the Groom
              </div>
              <div className="wp-name-list">
                <div className="wp-name-item">
                  <span className="wp-name-text">Regino Evangelio</span>
                  <span className="wp-name-role">Father</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Servina Evangelio</span>
                  <span className="wp-name-role">Mother</span>
                </div>
              </div>
            </div>

            <div className="wp-section">
              <div className="wp-section-title">
                <span className="wp-section-icon">👨‍👩‍👧</span> Parents of the Bride
              </div>
              <div className="wp-name-list">
                <div className="wp-name-item">
                  <span className="wp-name-text">Angelito Carillo</span>
                  <span className="wp-name-role">Father</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Ma. Quiteria Carillo</span>
                  <span className="wp-name-role">Mother</span>
                </div>
              </div>
            </div>
          </div>

          <div className="wp-divider"></div>

          {/* Principal Sponsors */}
          <div className="wp-section">
            <div className="wp-section-title">
              <span className="wp-section-icon">👑</span> Principal Sponsors
            </div>
            <div className="wp-name-list wp-name-list--sponsors">
              <div className="wp-name-item">
                <span className="wp-name-text">Clement &amp; Ruba Arulsamy</span>
                <span className="wp-name-role">Ninong &amp; Ninang</span>
              </div>
              <div className="wp-name-item">
                <span className="wp-name-text">Eric &amp; Hazelle Jadion</span>
                <span className="wp-name-role">Ninong &amp; Ninang</span>
              </div>
              <div className="wp-name-item">
                <span className="wp-name-text">Benny Neugebauer</span>
                <span className="wp-name-role">Ninong</span>
              </div>
              <div className="wp-name-item">
                <span className="wp-name-text">Zenith Crisostomo</span>
                <span className="wp-name-role">Ninang</span>
              </div>
            </div>
          </div>

          <div className="wp-divider"></div>

          {/* Secondary Sponsors */}
          <div className="wp-section">
            <div className="wp-section-title">
              <span className="wp-section-icon">🕯️</span> Secondary Sponsors
            </div>
            <div className="wp-secondary-grid">
              <div className="wp-sponsor-group">
                <div className="wp-sponsor-group-label">Candle</div>
                <div className="wp-name-list">
                  <div className="wp-name-item">
                    <span className="wp-name-text">Aaron Joseph Carillo</span>
                  </div>
                  <div className="wp-name-item">
                    <span className="wp-name-text">Prescilla Dangan-Ratliff</span>
                  </div>
                </div>
              </div>
              <div className="wp-sponsor-group">
                <div className="wp-sponsor-group-label">Veil</div>
                <div className="wp-name-list">
                  <div className="wp-name-item">
                    <span className="wp-name-text">Lawrence Evangelio</span>
                  </div>
                  <div className="wp-name-item">
                    <span className="wp-name-text">Heidi Nocon</span>
                  </div>
                </div>
              </div>
              <div className="wp-sponsor-group">
                <div className="wp-sponsor-group-label">Cord</div>
                <div className="wp-name-list">
                  <div className="wp-name-item">
                    <span className="wp-name-text">Rome Alen Evangelio</span>
                  </div>
                  <div className="wp-name-item">
                    <span className="wp-name-text">Alyssa Denise Mariano</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wp-divider"></div>

          {/* Honour Party */}
          <div className="wp-two-col">
            <div className="wp-section">
              <div className="wp-section-title">
                <span className="wp-section-icon">🤵</span> Best Man
              </div>
              <div className="wp-honor-row">
                <div className="wp-honor-item wp-honor-item--groom flex flex-col justify-between">
                  <span className="wp-honor-name">Lawrence Evangelio</span>
                  <span className="wp-honor-role">Best Man</span>
                </div>
              </div>
            </div>

            <div className="wp-section">
              <div className="wp-section-title">
                <span className="wp-section-icon">💐</span> Maid &amp; Matron of Honour
              </div>
              <div className="wp-honor-row">
                <div className="wp-honor-item wp-honor-item--bride flex flex-col justify-between">
                  <span className="wp-honor-name">Agape Carillo</span>
                  <span className="wp-honor-role">Maid of Honour</span>
                </div>
                <div className="wp-honor-item wp-honor-item--bride flex flex-col justify-between">
                  <span className="wp-honor-name">Vierte Mari San Diego</span>
                  <span className="wp-honor-role">Matron of Honour</span>
                </div>
              </div>
            </div>
          </div>

          <div className="wp-divider"></div>

          {/* Groomsmen & Bridesmaids */}
          <div className="wp-two-col">
            <div className="wp-section">
              <div className="wp-section-title">
                <span className="wp-section-icon">🤵</span> Groomsmen
              </div>
              <div className="wp-name-list">
                <div className="wp-name-item">
                  <span className="wp-name-text">Jayvee Arenas</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">David Blum</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Neil Patrick Cruz</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Ravi Sahijwani</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Armin Imśirevic</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Nejah Boughzala</span>
                </div>
              </div>
            </div>

            <div className="wp-section">
              <div className="wp-section-title">
                <span className="wp-section-icon">💐</span> Bridesmaids
              </div>
              <div className="wp-name-list">
                <div className="wp-name-item">
                  <span className="wp-name-text">Clariz Larocum</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Rashelyn Doromal</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Irene Mae Serrano-Luz</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Heidi Nocon</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Anna Luz Tio</span>
                </div>
                <div className="wp-name-item">
                  <span className="wp-name-text">Christine Contreras</span>
                </div>
              </div>
            </div>
          </div>

          <div className="wp-divider"></div>

          {/* Bearers & Flower Girls */}
          <div className="wp-section">
            <div className="wp-section-title">
              <span className="wp-section-icon">🌸</span> Bearers &amp; Flower Girls
            </div>
            <div className="wp-name-list wp-name-list--sponsors">
              <div className="wp-name-item">
                <span className="wp-name-text"></span>
                <span className="wp-name-role">Ring Bearer</span>
              </div>
              <div className="wp-name-item">
                <span className="wp-name-text"></span>
                <span className="wp-name-role">Coin Bearer</span>
              </div>
              <div className="wp-name-item">
                <span className="wp-name-text">Giane Angela Carillo</span>
                <span className="wp-name-role">Flower Girl</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ceremony Programme */}
        <div className="wp-programme wp-programme--col">
          <div className="wp-section-title" style={{ marginBottom: '18px' }}>
            <span className="wp-section-icon">📋</span> Ceremony Programme
          </div>
          <div className="wp-programme-list">
            <div className="wp-prog-item">
              <div className="wp-prog-time">4:00 PM</div>
              <div className="wp-prog-dot"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Guests Arrive &amp; Are Seated</div>
                <div className="wp-prog-desc">First come, first seated · English Garden</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">4:25 PM</div>
              <div className="wp-prog-dot"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Processional</div>
                <div className="wp-prog-desc">Entourage walks down the aisle</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">4:30 PM</div>
              <div className="wp-prog-dot wp-prog-dot--accent"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Bridal March</div>
                <div className="wp-prog-desc">The bride enters</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">4:35 PM</div>
              <div className="wp-prog-dot"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Opening Prayer &amp; Welcome</div>
                <div className="wp-prog-desc">Officiant opens the ceremony</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">4:45 PM</div>
              <div className="wp-prog-dot"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Exchange of Vows &amp; Rings</div>
                <div className="wp-prog-desc">The couple makes their promises</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">5:00 PM</div>
              <div className="wp-prog-dot"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Candle, Veil &amp; Cord Ceremony</div>
                <div className="wp-prog-desc">Unity rituals with secondary sponsors</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">5:15 PM</div>
              <div className="wp-prog-dot"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Signing of the Marriage Certificate</div>
                <div className="wp-prog-desc">Official declaration before witnesses</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">5:20 PM</div>
              <div className="wp-prog-dot wp-prog-dot--gold"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">First Kiss &amp; Recessional</div>
                <div className="wp-prog-desc">The newlyweds walk out together 🎉</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">6:00 PM</div>
              <div className="wp-prog-dot"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Cocktail Hour</div>
                <div className="wp-prog-desc">Drinks &amp; mingling · Le Maison Grande</div>
              </div>
            </div>
            <div className="wp-prog-item">
              <div className="wp-prog-time">7:30 PM</div>
              <div className="wp-prog-dot wp-prog-dot--rose"></div>
              <div className="wp-prog-event">
                <div className="wp-prog-title">Reception &amp; Dinner</div>
                <div className="wp-prog-desc">Celebrate, feast, and dance until midnight</div>
              </div>
            </div>
          </div>

          {/* Couple Photo */}
          <div className="wp-prog-photo">
            <img src="/images/IMG_8316.jpeg" alt="Remiel &amp; Faith" />
            <div className="wp-prog-photo-caption">
              Pineda Elementary School, Pasig, Philippines · 2026
            </div>
          </div>

          {/* Pull Quote */}
          <div className="wp-quote">
            <div className="wp-quote-mark">&ldquo;</div>
            <p className="wp-quote-text">
              We're grateful for everyone who got us here. You prayed for us, believed in us, and
              showed up. That means everything.
            </p>
            <div className="wp-quote-attr">— Remiel &amp; Faith</div>
          </div>
        </div>
      </div>
      {/* end wp-body-grid */}
    </div>
  );
}
