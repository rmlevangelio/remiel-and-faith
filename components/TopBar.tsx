export default function TopBar() {
  return (
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
        <a href="#wedding-party">Entourage</a>
        <a href="#gallery">Gallery</a>
        <a href="#rsvp">Gift</a>
      </nav>
      <div className="topbar-avatar">R&amp;F</div>
    </div>
  );
}
