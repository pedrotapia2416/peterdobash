import { motion } from 'motion/react';
import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../../assets/images/background-graffiti.png';
import journey01 from '../../../assets/images/journeys/journey-01.png';
import journey02 from '../../../assets/images/journeys/journey-02.png';
import journey03 from '../../../assets/images/journeys/journey-03.png';
import journey04 from '../../../assets/images/journeys/journey-04.png';
import journey05 from '../../../assets/images/journeys/journey-05.png';
import journey06 from '../../../assets/images/journeys/journey-06.png';
import journey07 from '../../../assets/images/journeys/journey-07.png';
import journey08 from '../../../assets/images/journeys/journey-08.png';
import journey09 from '../../../assets/images/journeys/journey-09.png';
import journey10 from '../../../assets/images/journeys/journey-10.png';
import journey11 from '../../../assets/images/journeys/journey-11.png';
import journey12 from '../../../assets/images/journeys/journey-12.png';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './JourneyPage.module.scss';

type RouteItem = {
  id: string;
  title: string;
  description: string;
  genre: string;
  bpm: string;
  context: string;
};

type HeroStat = {
  value: string;
  label: string;
};

type FooterCta = {
  lines: string[];
  cta: string;
};

const routeImages: Record<string, string> = {
  '01': journey01,
  '02': journey02,
  '03': journey03,
  '04': journey04,
  '05': journey05,
  '06': journey06,
  '07': journey07,
  '08': journey08,
  '09': journey09,
  '10': journey10,
  '11': journey11,
  '12': journey12,
};

const radarRoutes = [
  { id: '01', label: 'The Deep Signal', x: 50, y: 46 },
  { id: '02', label: 'Bassline Theory', x: 20, y: 70 },
  { id: '03', label: 'Groove Transmission', x: 17, y: 54 },
  { id: '04', label: 'Club Pressure', x: 28, y: 30 },
  { id: '05', label: 'UK Journey', x: 50, y: 18 },
  { id: '06', label: 'Roller System', x: 76, y: 29 },
  { id: '07', label: 'Precision System', x: 88, y: 47 },
  { id: '08', label: 'Broken Patterns', x: 88, y: 61 },
  { id: '09', label: 'Bass Culture', x: 77, y: 74 },
  { id: '10', label: 'Fusion State', x: 50, y: 83 },
  { id: '11', label: 'Warehouse Files', x: 28, y: 80 },
  { id: '12', label: 'Closing Session', x: 72, y: 66 },
];

export function JourneyPage() {
  const { t } = useTranslation('journeyPage');
  const routes = t('routes', { returnObjects: true }) as RouteItem[];
  const stats = t('hero.stats', { returnObjects: true }) as HeroStat[];
  const filters = t('list.filters', { returnObjects: true }) as string[];
  const footerCta = t('footerCta', { returnObjects: true }) as FooterCta;

  return (
    <main className={styles.page} style={{ '--journey-bg': `url(${backgroundImage})` } as CSSProperties}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{t('hero.eyebrow')}</span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              {t('hero.title')}
            </motion.h1>
            <p>{t('hero.text')}</p>
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <Button href="#routes">{t('hero.cta')}</Button>
          </div>
          <JourneyRadar />
        </section>

        <section id="routes" className={styles.routes}>
          <header className={styles.routesHeader}>
            <h2>{t('list.eyebrow')}</h2>
            <div>
              <span>{t('list.filter')}</span>
              {filters.map((filter, index) => (
                <button type="button" className={index === 0 ? styles.activeFilter : undefined} key={filter}>
                  {filter}
                </button>
              ))}
            </div>
          </header>
          <div className={styles.routeGrid}>
            {routes.map((route) => (
              <a href={`/journey/${route.id}`} className={styles.routeCard} key={route.id}>
                <img src={routeImages[route.id]} alt="" loading="lazy" />
                <span>{route.id}</span>
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.description}</p>
                  <em>{route.genre}</em>
                  <small>
                    {route.bpm} <b>{route.context}</b>
                  </small>
                </div>
                <i aria-hidden="true">→</i>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.systemCta}>
          <span aria-hidden="true" />
          <p>
            {footerCta.lines.map((line, index) =>
              index === footerCta.lines.length - 1 ? <strong key={line}>{line}</strong> : <span key={line}>{line}</span>,
            )}
          </p>
          <Button href="#routes" variant="secondary">
            {footerCta.cta}
          </Button>
        </section>
    </main>
  );
}

function JourneyRadar() {
  return (
    <div className={styles.radar} aria-label="PDB routes system">
      <div className={styles.ringOne} />
      <div className={styles.ringTwo} />
      <div className={styles.ringThree} />
      <div className={styles.axisX} />
      <div className={styles.axisY} />
      <strong>PDB SYSTEM</strong>
      {radarRoutes.map((route) => (
        <span
          key={route.id}
          className={styles.radarPoint}
          style={{ '--x': `${route.x}%`, '--y': `${route.y}%` } as CSSProperties}
        >
          <b>{route.id}</b>
          {route.label}
        </span>
      ))}
    </div>
  );
}
