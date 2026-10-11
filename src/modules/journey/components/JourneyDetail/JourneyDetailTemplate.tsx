import { Button } from '../../../../shared/ui/Button/Button';
import type { JourneyDetailConfig } from '../../types';
import styles from './JourneyDetailTemplate.module.scss';

type Props = {
  journey: JourneyDetailConfig;
};

export function JourneyDetailTemplate({ journey }: Props) {
  return (
    <main className={styles.page}>
      <JourneyHero journey={journey} />
      <section className={styles.gridBand}>
        <JourneyConcept journey={journey} />
        <JourneyMap journey={journey} />
      </section>
      <section className={styles.mediaBand}>
        <JourneyReferences journey={journey} />
        <JourneyListen journey={journey} />
      </section>
      <section className={styles.gridBand}>
        <JourneyTechnical journey={journey} />
        <JourneyGallery journey={journey} />
      </section>
      <JourneyPager journey={journey} />
    </main>
  );
}

function JourneyHero({ journey }: Props) {
  return (
    <section className={styles.hero}>
      <a className={styles.backLink} href="/journey">
        ← Volver a viajes
      </a>
      <div className={styles.heroNumber}>{journey.id}</div>
      <div className={styles.heroTitle}>
        <h1>
          {journey.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p>
          {journey.subtitle.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
      <figure>
        <img src={journey.heroImage} alt="" />
      </figure>
      <small>PDB SYSTEM</small>
      <b>{journey.id}</b>
    </section>
  );
}

function JourneyConcept({ journey }: Props) {
  return (
    <article className={styles.concept}>
      <SectionHeading index="01" title="Concepto" />
      {journey.concept.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <strong>{journey.concept.meta}</strong>
    </article>
  );
}

function JourneyMap({ journey }: Props) {
  return (
    <article className={styles.map}>
      <SectionHeading index="02" title="Mapa del viaje" />
      <div className={styles.mapLine}>
        {journey.map.map((step) => (
          <div key={step.id}>
            <i aria-hidden="true" />
            <span>{step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function JourneyReferences({ journey }: Props) {
  return (
    <article className={styles.references}>
      <header>
        <SectionHeading index="03" title="Referencias" />
        <a href="#listen">Ver playlist →</a>
      </header>
      <div className={styles.referenceGrid}>
        {journey.references.map((reference) => (
          <a href="#listen" key={reference.name}>
            <img src={reference.image} alt={reference.name} loading="lazy" />
            <h3>{reference.name}</h3>
            <p>{reference.tags.join(' / ')}</p>
            <i aria-hidden="true">↘</i>
          </a>
        ))}
      </div>
    </article>
  );
}

function JourneyListen({ journey }: Props) {
  return (
    <article id="listen" className={styles.listen}>
      <SectionHeading index="04" title="Escuchar este viaje" />
      <div className={styles.player}>
        <span>{journey.listen.soundcloudLabel}</span>
        <button type="button" aria-label="Play SoundCloud preview">
          ▶
        </button>
        <i aria-hidden="true" />
        <small>00:00</small>
        <small>{journey.listen.duration}</small>
      </div>
      <div className={styles.video}>
        <span>{journey.listen.youtubeLabel}</span>
        <img src={journey.listen.image} alt="" loading="lazy" />
        <button type="button" aria-label="Play YouTube live set">
          ▶
        </button>
      </div>
    </article>
  );
}

function JourneyTechnical({ journey }: Props) {
  return (
    <article className={styles.technical}>
      <SectionHeading index="05" title="Ficha tecnica" />
      <dl>
        {journey.technical.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function JourneyGallery({ journey }: Props) {
  return (
    <article className={styles.gallery}>
      <SectionHeading index="06" title="Galeria & moodboard" />
      <div>
        {journey.gallery.map((item) => (
          <figure key={item.label}>
            <img src={item.image} alt={item.label} loading="lazy" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}

function JourneyPager({ journey }: Props) {
  return (
    <nav className={styles.pager} aria-label="Journey navigation">
      <a href={journey.previous.href}>
        <span>← Viaje anterior</span>
        {journey.previous.id} / {journey.previous.title}
      </a>
      <i aria-hidden="true" />
      <a href={journey.next.href}>
        <span>Siguiente viaje →</span>
        {journey.next.id} / {journey.next.title}
      </a>
      <Button href="/journey" variant="secondary">
        Volver al sistema
      </Button>
    </nav>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className={styles.sectionHeading}>
      <span>{index}</span> / {title}
    </h2>
  );
}
