import { motion } from 'motion/react';
import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../../assets/images/background-graffiti.png';
import chrisStussyImage from '../../../assets/images/influences/chris-stussy.jpg';
import eastEndDubsImage from '../../../assets/images/influences/east-end-dubs.jpg';
import interplanetaryCriminalImage from '../../../assets/images/influences/interplanetary-criminal.jpg';
import joshBakerImage from '../../../assets/images/influences/josh-baker.jpg';
import mainPhaseImage from '../../../assets/images/influences/main-phase.jpg';
import silvaBumpaImage from '../../../assets/images/influences/silva-bumpa.jpg';
import soundFaceImage from '../../../assets/images/sound-face.png';
import { Button } from '../../../shared/ui/Button/Button';
import styles from './SoundPage.module.scss';

type Artist = {
  name: string;
  keys: string[];
  note?: string;
};

type SoundDefinition = {
  label: string;
  essence: string;
  body: string[];
};

const artistImages: Record<string, string> = {
  'Chris Stussy': chrisStussyImage,
  'East End Dubs': eastEndDubsImage,
  'Josh Baker': joshBakerImage,
  'Interplanetary Criminal': interplanetaryCriminalImage,
  'Main Phase': mainPhaseImage,
  'Silva Bumpa': silvaBumpaImage,
};

const diagramGenres = [
  { id: 'uk-garage', title: 'UK Garage' },
  { id: 'bassline', title: 'Bassline' },
  { id: 'dubstep', title: 'Dubstep' },
  { id: 'bass-house', title: 'Bass House' },
  { id: 'minimal-deeptech', title: 'Minimal DeepTech / Tech House' },
  { id: 'deep-house', title: 'Deep House' },
  { id: 'break-groove', title: 'Break & Groove' },
];

export function SoundPage() {
  const { t } = useTranslation('soundPage');
  const artists = t('influences.artists', { returnObjects: true }) as Artist[];
  const soundDefinitions = t('journey.sounds', { returnObjects: true }) as SoundDefinition[];
  const platforms = t('listen.platforms', { returnObjects: true }) as string[];

  return (
    <main className={styles.page} style={{ '--sound-bg': `url(${backgroundImage})` } as CSSProperties}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{t('hero.eyebrow')}</span>
            <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }}>
              {t('hero.title')}
            </motion.h1>
            <strong>{t('hero.subtitle')}</strong>
            <p>{t('hero.body')}</p>
            <div className={styles.actions}>
              <Button href="#featured">{t('hero.primary')}</Button>
              <Button href="#listen" variant="secondary">
                {t('hero.secondary')}
              </Button>
            </div>
        </div>
        <div className={styles.heroVisual}>
          <IntersectionDiagram />
        </div>
      </section>

        <section className={styles.influences}>
          <SectionTitle eyebrow={t('influences.eyebrow')} title={t('influences.title')} />
          <p className={styles.sectionText}>{t('influences.text')}</p>
          <div className={styles.artistGrid}>
            {artists.map((artist, index) => (
              <article key={artist.name}>
                <div className={styles.portrait} data-index={index + 1}>
                  <img src={artistImages[artist.name]} alt={artist.name} loading="lazy" />
                  <span aria-hidden="true">
                    {artist.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                </div>
                <h3>{artist.name}</h3>
                <p>{artist.keys.join(' / ')}</p>
                {artist.note && <small>{artist.note}</small>}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.journey}>
          <SectionTitle eyebrow={t('journey.eyebrow')} title={t('journey.title')} />
          <p className={styles.sectionText}>{t('journey.text')}</p>
          <div className={styles.soundDefinitions}>
            {soundDefinitions.map((sound, index) => (
              <article key={sound.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{sound.label}</h3>
                <strong>{sound.essence}</strong>
                {sound.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section id="featured" className={styles.featured}>
          <div className={styles.featuredCta}>
            <SectionTitle eyebrow={t('featured.eyebrow')} title={t('featured.title')} />
            <p>{t('featured.text')}</p>
            <figure className={styles.ctaPortrait}>
              <img src={soundFaceImage} alt="Peter Do Bash portrait" loading="lazy" />
            </figure>
          </div>
        </section>

        <section id="listen" className={styles.listen}>
          <div>
            <SectionTitle eyebrow={t('listen.eyebrow')} title={t('listen.title')} />
            <p>{t('listen.text')}</p>
            <Button href="#featured">{t('listen.cta')}</Button>
          </div>
          <div className={styles.liveWave} aria-hidden="true">
            {Array.from({ length: 68 }, (_, index) => (
              <span key={index} style={{ '--h': `${16 + ((index * 19) % 78)}px` } as CSSProperties} />
            ))}
          </div>
          <nav className={styles.platforms} aria-label="Listen platforms">
            {platforms.map((platform) => (
              <a href="#listen" key={platform}>
                {platform}
                <span>→</span>
              </a>
            ))}
          </nav>
        </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className={styles.sectionTitle}>
      <span aria-hidden="true" />
      <small>{eyebrow}</small>
      <h2>{title}</h2>
    </header>
  );
}

function IntersectionDiagram() {
  return (
    <div className={styles.diagram}>
      {diagramGenres.map((genre) => (
        <span className={[styles.mapGenre, styles[genre.id]].filter(Boolean).join(' ')} key={genre.id}>
          {genre.title}
        </span>
      ))}
      <i className={styles.ringOne} />
      <i className={styles.ringTwo} />
      <i className={styles.axisX} />
      <i className={styles.axisY} />
      <strong>PDB</strong>
    </div>
  );
}
