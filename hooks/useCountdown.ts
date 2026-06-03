import { useState, useEffect } from 'react';

export interface Countdown {
  d: string;
  h: string;
  m: string;
  s: string;
  days2: string | number;
}

export function useCountdown(targetDate: string): Countdown {
  const [countdown, setCountdown] = useState<Countdown>({
    d: '--',
    h: '--',
    m: '--',
    s: '--',
    days2: '--',
  });

  useEffect(() => {
    const update = () => {
      const target = new Date(targetDate);
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');
      if (diff <= 0) {
        setCountdown({ d: '00', h: '00', m: '00', s: '00', days2: '00' });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCountdown({ d: pad(d), h: pad(h), m: pad(m), s: pad(s), days2: d });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
