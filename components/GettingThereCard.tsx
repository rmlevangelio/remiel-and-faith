export default function GettingThereCard() {
  return (
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
                NAIA T3 is the main international terminal. Most major airlines arrive here. From
                the airport, the venue in Cavite is approximately 1–1.5 hours by car depending on
                traffic.
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
                  <li>Philippine peso (PHP) is the local currency — ATMs available at NAIA T3.</li>
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
  );
}
