import { Button } from '../../../shared/ui/Button/Button';
import { sets } from '../data/sets';
import styles from './SetsPage.module.scss';

export function SetsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.heading}>
        <span>ARCHIVE / SETS</span>
        <h1>Escuchar SETS</h1>
        <p>Sesiones de Peter Do Bash. Un nuevo set se suma cada semana.</p>
      </header>

      <div className={styles.list}>
        {Object.values(sets).map((set) => (
          <article className={styles.card} key={set.slug}>
            <span>{set.meta}</span>
            <h2>{set.title}</h2>
            <p>{set.description}</p>
            <Button href={`/sets/${set.slug}`} variant="ghost">Escuchar SET</Button>
          </article>
        ))}
      </div>
    </main>
  );
}
