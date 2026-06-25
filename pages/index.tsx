import Head from 'next/head';
import { useCountdown } from '../hooks/useCountdown';
import Background from '../components/Background';
import TopBar from '../components/TopBar';
import ProfileCard from '../components/ProfileCard';
import FunFactsCard from '../components/FunFactsCard';
import HashtagCard from '../components/HashtagCard';
import WishesCard from '../components/WishesCard';
import CountdownCard from '../components/CountdownCard';
import StoryCard from '../components/StoryCard';
import DetailsRow from '../components/DetailsRow';
import GettingThereCard from '../components/GettingThereCard';
import EntourageCard from '../components/EntourageCard';
import GalleryCard from '../components/GalleryCard';
import GiftCard from '../components/GiftCard';
import KeyDatesCard from '../components/KeyDatesCard';

export default function Home() {
  const countdown = useCountdown('2027-03-15T16:30:00');

  return (
    <>
      <Head>
        <title>Forever Begins · Remiel &amp; Faith</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Background />
      <TopBar />

      <div className="main mt-8!">
        <div className="col-left fade-in d2">
          <ProfileCard daysLeft={countdown.days2} />
          <FunFactsCard />
          <HashtagCard />
        </div>

        <div className="col-right fade-in d4" id="story">
          <CountdownCard countdown={countdown} />
          <StoryCard />
        </div>

        <DetailsRow />
        <EntourageCard />
        <GettingThereCard />
        <GalleryCard />

        <div className="bottom-row fade-in d7" id="rsvp">
          <GiftCard />
          <KeyDatesCard />
        </div>
      </div>

      <footer className="page-footer">
        <p>Remiel &amp; Faith · March 15, 2027 · Cavite, Philippines · Made with love</p>
      </footer>
    </>
  );
}
