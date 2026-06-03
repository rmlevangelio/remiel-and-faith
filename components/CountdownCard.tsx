interface Countdown {
  d: string;
  h: string;
  m: string;
  s: string;
}

interface Props {
  countdown: Countdown;
}

export default function CountdownCard({ countdown }: Props) {
  return (
    <div className="card countdown-card">
      <div className="card-header">
        <div className="card-icon" style={{ background: 'rgba(240,192,96,0.15)' }}>
          ⏳
        </div>
        <div>
          <div className="card-title">Countdown</div>
          <div className="card-sub">Until we say &quot;I do&quot;</div>
        </div>
      </div>
      <div className="countdown-body">
        <div className="cd-unit">
          <span className="cd-num">{countdown.d}</span>
          <span className="cd-label">Days</span>
        </div>
        <div className="cd-unit">
          <span className="cd-num">{countdown.h}</span>
          <span className="cd-label">Hours</span>
        </div>
        <div className="cd-unit">
          <span className="cd-num">{countdown.m}</span>
          <span className="cd-label">Mins</span>
        </div>
        <div className="cd-unit">
          <span className="cd-num">{countdown.s}</span>
          <span className="cd-label">Secs</span>
        </div>
      </div>
    </div>
  );
}
