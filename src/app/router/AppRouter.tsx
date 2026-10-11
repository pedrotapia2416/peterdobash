import { useEffect, useState } from 'react';
import { JourneyDetailPage } from '../../modules/journey/pages/JourneyDetailPage';
import { HomePage } from '../../modules/home/pages/HomePage';
import { JourneyPage } from '../../modules/journey/pages/JourneyPage';
import { SoundPage } from '../../modules/sound/pages/SoundPage';
import { SetDetailPage } from '../../modules/sets/pages/SetDetailPage';
import { SetsPage } from '../../modules/sets/pages/SetsPage';
import { navigationEventName } from './navigation';

type AppRouterProps = {
  initialPathname?: string;
};

export function AppRouter({ initialPathname }: AppRouterProps) {
  const [pathname, setPathname] = useState(
    initialPathname ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
  );

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname);

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener(navigationEventName, handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener(navigationEventName, handleLocationChange);
    };
  }, []);

  if (pathname === '/sound') {
    return <SoundPage />;
  }

  if (pathname === '/journey') {
    return <JourneyPage />;
  }

  if (pathname.startsWith('/journey/')) {
    return <JourneyDetailPage pathname={pathname} />;
  }

  if (pathname.startsWith('/sets/')) {
    return <SetDetailPage pathname={pathname} />;
  }

  if (pathname === '/sets') {
    return <SetsPage />;
  }

  return <HomePage />;
}
