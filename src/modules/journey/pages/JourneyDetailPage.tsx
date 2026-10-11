import { journeyDetailConfigs } from '../data/journeyDetailConfigs';
import { JourneyDetailTemplate } from '../components/JourneyDetail/JourneyDetailTemplate';
import { JourneyPage } from './JourneyPage';

type JourneyDetailPageProps = {
  pathname?: string;
};

export function JourneyDetailPage({ pathname }: JourneyDetailPageProps) {
  const currentPathname = pathname ?? (typeof window === 'undefined' ? '/' : window.location.pathname);
  const id = currentPathname.split('/').filter(Boolean).at(1);
  const journey = id ? journeyDetailConfigs[id] : undefined;

  if (!journey) {
    return <JourneyPage />;
  }

  return <JourneyDetailTemplate journey={journey} />;
}
