import { useEffect, useRef, useState } from 'react';

interface Props {
  daysLeft: string | number;
}

export default function ProfileCard({ daysLeft }: Props) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Browser blocked autoplay — user must click the button first
      });
  }, []);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }

  return (
    <div className="card profile-card">
      <audio ref={audioRef} src="/audio/music.mp3" loop />
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
            <span className="profile-stat-num">{daysLeft}</span>
            <div className="profile-stat-label">Days Left</div>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-num">200</span>
            <div className="profile-stat-label">Guests</div>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-num">2</span>
            <div className="profile-stat-label">Years Together</div>
          </div>
        </div>
        <div className="h-8"></div>
        <button
          className={`profile-music-btn${playing ? ' profile-music-btn--playing' : ''}`}
          onClick={togglePlay}
          aria-label={playing ? 'Pause music' : 'Play music'}
        >
          <span className="profile-music-icon">{playing ? '⏸' : '▶'}</span>
          <span className="profile-music-label">{playing ? 'Now Playing…' : 'Play music'}</span>
          {playing && (
            <span className="profile-music-bars">
              <span />
              <span />
              <span />
              <span />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
