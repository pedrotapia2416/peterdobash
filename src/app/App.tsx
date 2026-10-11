import { AppProviders } from './providers/AppProviders';
import { AppRouter } from './router/AppRouter';
import { FixedTechRail } from '../shared/components/FixedTechRail/FixedTechRail';
import { Footer } from '../shared/components/Footer/Footer';
import { Header } from '../shared/components/Header/Header';

type AppProps = {
  initialPathname?: string;
};

export function App({ initialPathname }: AppProps) {
  return (
    <AppProviders>
      <div className="app-shell">
        <Header />
        <FixedTechRail />
        <AppRouter initialPathname={initialPathname} />
        <Footer />
      </div>
    </AppProviders>
  );
}
