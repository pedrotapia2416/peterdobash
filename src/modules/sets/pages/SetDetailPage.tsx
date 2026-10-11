import { Button } from '../../../shared/ui/Button/Button';
import { sets } from '../data/sets';
import styles from './SetDetailPage.module.scss';

type SetDetailPageProps = {
  pathname?: string;
};

const getSetFromPath = (pathname: string) => {
  const slug = pathname.split('/').filter(Boolean).at(1);
  return slug ? sets[slug] : undefined;
};

export function SetDetailPage({ pathname = typeof window === 'undefined' ? '/' : window.location.pathname }: SetDetailPageProps) {
  const set = getSetFromPath(pathname);

  if (!set) {
    return (
      <main className={styles.page}>
        <section className={styles.empty}>
          <span>404 / SET NOT FOUND</span>
          <h1>Este set todavía no existe.</h1>
          <Button href="/">Volver a la home</Button>
        </section>
      </main>
    );
  }

  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(set.sourceUrl)}&color=%23d9ff00&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&visual=true`;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>SET / SOUNDCLOUD</span>
          <h1>{set.title}</h1>
          <p>{set.description}</p>
          <small>{set.meta}</small>
          <div className={styles.actions}>
            <Button href="/" variant="secondary">Volver a la home</Button>
            <Button href={set.sourceUrl} target="_blank" rel="noreferrer">Abrir en SoundCloud</Button>
          </div>
        </div>
        <div className={styles.player}>
          <iframe
            title={`SoundCloud — ${set.title}`}
            src={embedUrl}
            allow="autoplay"
            loading="eager"
          />
        </div>
      </section>
    </main>
  );
}
