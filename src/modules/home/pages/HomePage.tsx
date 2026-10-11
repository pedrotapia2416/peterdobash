import { FollowLinks } from '../sections/FollowLinks/FollowLinks';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { LatestSet } from '../sections/LatestSet/LatestSet';
import { SoundIntersection } from '../sections/SoundIntersection/SoundIntersection';
import { UpcomingShows } from '../sections/UpcomingShows/UpcomingShows';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <SoundIntersection />
      <LatestSet />
      <UpcomingShows />
      <FollowLinks />
    </main>
  );
}
