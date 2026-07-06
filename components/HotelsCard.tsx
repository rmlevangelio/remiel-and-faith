// 1 EUR ≈ 70 PHP (approximate — for guidance only)
const EUR_RATE = 70;
function toEur(php: number) {
  return `~€${Math.round(php / EUR_RATE)}`;
}

type HotelData = {
  name: string;
  area: string;
  phpFrom: number;
  desc: string;
  badge: string;
  badgeColor: string;
  maps: string;
};

const makatiHotels: HotelData[] = [
  {
    name: 'Red Planet Makati',
    area: 'Legaspi Village, Makati',
    phpFrom: 1500,
    desc: 'Clean, no-frills rooms with fast Wi-Fi. Excellent value and walkable to restaurants and cafés.',
    badge: 'Best Value',
    badgeColor: '#4a9eff',
    maps: 'https://www.google.com/maps/search/?api=1&query=Red+Planet+Makati+Legaspi+Village',
  },
  {
    name: 'New World Makati Hotel',
    area: 'Esperanza St, Makati',
    phpFrom: 6500,
    desc: 'Polished 5-star hotel in the heart of Makati CBD. Spacious rooms, outdoor pool, and walking distance to Greenbelt and the shuttle stop.',
    badge: 'Top Pick',
    badgeColor: '#6cb4ff',
    maps: 'https://www.google.com/maps/search/?api=1&query=New+World+Makati+Hotel+Esperanza+Street',
  },
  {
    name: 'Z Hostel',
    area: 'Legaspi Village, Makati',
    phpFrom: 800,
    desc: 'Stylish hostel with private rooms available. Rooftop bar and social vibe — great for solo or group guests.',
    badge: 'Rooftop Bar',
    badgeColor: '#a78bfa',
    maps: 'https://www.google.com/maps/search/?api=1&query=Z+Hostel+Makati+Legaspi+Village',
  },
];

const bgcHotels: HotelData[] = [
  {
    name: 'Seda BGC',
    area: '30th St, Bonifacio Global City',
    phpFrom: 5500,
    desc: 'Sleek Filipino business hotel in the middle of BGC. Modern rooms, rooftop pool, and right beside the shuttle stop.',
    badge: 'Best Location',
    badgeColor: '#f0c060',
    maps: 'https://www.google.com/maps/search/?api=1&query=Seda+BGC+30th+Street+Bonifacio+Global+City',
  },
  {
    name: 'A-Venue Hotel',
    area: 'Makati Ave, Makati (near BGC)',
    phpFrom: 2200,
    desc: 'Clean and comfortable hotel on the Makati–BGC border. Easy access to both areas and the shuttle pick-up.',
    badge: 'Great Access',
    badgeColor: '#4a9eff',
    maps: 'https://www.google.com/maps/search/?api=1&query=A-Venue+Hotel+Makati+Avenue',
  },
  {
    name: 'B Hotel Bonifacio Global City',
    area: 'BGC, Taguig',
    phpFrom: 2500,
    desc: 'Comfortable mid-budget hotel within the BGC district. Good amenities and a relaxed atmosphere.',
    badge: 'Mid-Range Pick',
    badgeColor: '#6cb4ff',
    maps: 'https://www.google.com/maps/search/?api=1&query=B+Hotel+Bonifacio+Global+City+Taguig',
  },
];

const midRangeHotels: HotelData[] = [
  {
    name: 'Berjaya Makati Hotel',
    area: 'De La Rosa St, Makati CBD',
    phpFrom: 4500,
    desc: 'Solid mid-range hotel right in the Makati CBD. Steps from Ayala Triangle Gardens — the shuttle pick-up point.',
    badge: 'Nearest to Shuttle',
    badgeColor: '#f0c060',
    maps: 'https://www.google.com/maps/search/?api=1&query=Berjaya+Makati+Hotel+De+La+Rosa+Street',
  },
  {
    name: 'Citadines Salcedo Makati',
    area: 'Salcedo Village, Makati',
    phpFrom: 5500,
    desc: 'Serviced apartments with kitchenette — great for families or groups. Quiet Salcedo Village location, walking distance to shuttle.',
    badge: 'Great for Groups',
    badgeColor: '#a78bfa',
    maps: 'https://www.google.com/maps/search/?api=1&query=Citadines+Salcedo+Makati',
  },
  {
    name: 'Kasa Palma BGC',
    area: '4th Ave, Bonifacio Global City',
    phpFrom: 4800,
    desc: 'Stylish boutique serviced residence inside BGC. A short walk to Market! Market! — the BGC shuttle pick-up point.',
    badge: 'Nearest to Shuttle',
    badgeColor: '#4a9eff',
    maps: 'https://www.google.com/maps/search/?api=1&query=Kasa+Palma+BGC+4th+Avenue+Bonifacio+Global+City',
  },
  {
    name: 'Holiday Inn & Suites Makati',
    area: 'Glorietta, Ayala Center, Makati',
    phpFrom: 7000,
    desc: 'Reliable international brand in Ayala Center. Steps from Greenbelt and the Makati shuttle stop — a solid comfortable choice.',
    badge: 'Central Makati',
    badgeColor: '#6cb4ff',
    maps: 'https://www.google.com/maps/search/?api=1&query=Holiday+Inn+Suites+Makati+Glorietta+Ayala+Center',
  },
];

function HotelItem({ name, area, phpFrom, desc, badge, badgeColor, maps }: HotelData) {
  return (
    <div className="hotel-item">
      <div className="hotel-item-top">
        <div>
          <div className="hotel-name">{name}</div>
          <div className="hotel-area">📍 {area}</div>
        </div>
        <span className="hotel-badge" style={{ background: `${badgeColor}22`, color: badgeColor }}>
          {badge}
        </span>
      </div>
      <div className="hotel-price">
        💰 From ₱{phpFrom.toLocaleString()}
        <span className="hotel-price-eur">&nbsp;·&nbsp;{toEur(phpFrom)} / night</span>
      </div>
      <div className="hotel-desc">{desc}</div>
      <a href={maps} target="_blank" rel="noopener noreferrer" className="hotel-maps-link">
        View on Maps →
      </a>
    </div>
  );
}

export default function HotelsCard() {
  return (
    <div className="card hotels-card fade-in d6" id="hotels">
      <div className="card-header">
        <div className="card-icon" style={{ background: 'rgba(74,158,255,0.12)' }}>
          🏨
        </div>
        <div>
          <div className="card-title">Where to Stay</div>
          <div className="card-sub">
            Hotels near the shuttle pick-up points · prices in ₱ &amp; €
          </div>
        </div>
      </div>

      {/* Budget section */}
      <div className="hotels-section-label">
        <span className="hotels-section-tag hotels-section-tag--budget">💰 Budget-Friendly</span>
      </div>
      <div className="hotels-body">
        <div className="hotels-col">
          <div className="hotels-col-heading">
            <span className="hotels-col-dot" style={{ background: '#4a9eff' }}></span>
            Makati Area
          </div>
          {makatiHotels.map((h) => (
            <HotelItem key={h.name} {...h} />
          ))}
        </div>

        <div className="hotels-col">
          <div className="hotels-col-heading">
            <span className="hotels-col-dot" style={{ background: '#a78bfa' }}></span>
            BGC / Taguig Area
          </div>
          {bgcHotels.map((h) => (
            <HotelItem key={h.name} {...h} />
          ))}
        </div>
      </div>

      {/* Mid-range section */}
      <div className="hotels-divider" />
      <div className="hotels-section-label">
        <span className="hotels-section-tag hotels-section-tag--midrange">
          🛎️ A Step Up · Mid-Range
        </span>
      </div>
      <div className="hotels-body hotels-body--midrange">
        {midRangeHotels.map((h) => (
          <HotelItem key={h.name} {...h} />
        ))}
      </div>

      <div className="hotels-note">
        💡 Prices are estimates and subject to change. EUR conversion uses ~₱70 = €1. Book early —
        March is peak season in the Philippines.
      </div>
    </div>
  );
}
