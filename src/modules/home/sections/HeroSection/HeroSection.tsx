import { motion, useScroll, useTransform } from 'motion/react';
import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import djImage from '../../../../assets/images/dj.png';
import backgroundImage from '../../../../assets/images/background-graffiti.png';
import logoImage from '../../../../assets/images/peter-do-bash-logo.png';
import { Button } from '../../../../shared/ui/Button/Button';
import styles from './HeroSection.module.scss';

const letterTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const { t } = useTranslation('home');
  const imageY = useTransform(scrollY, [0, 700], [0, 70]);
  const genres = t('hero.genres', { returnObjects: true }) as string[];
  const summary = t('hero.summary', { returnObjects: true }) as string[];

  return (
    <section
      id="home"
      className={styles.hero}
      style={{ '--hero-bg': `url(${backgroundImage})` } as CSSProperties}
    >
      <div className={styles.copy}>
        <motion.img
          className={styles.logoImage}
          src={logoImage}
          alt="PETER.do BASH"
          initial={{ opacity: 0, y: 56, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={letterTransition}
        />

        <div className={styles.genres}>
          {genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>

        <div className={styles.summary}>
          {summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className={styles.actions}>
          <Button href="mailto:booking@peterdobash.com?subject=Booking%20Peter%20Do%20Bash">
            {t('hero.primaryCta')}
          </Button>
          <Button href="#sound" variant="secondary">
            {t('hero.secondaryCta')}
          </Button>
        </div>
      </div>

      <motion.div className={styles.djWrap} style={{ y: imageY }}>
        <img src={djImage} alt="Peter Do Bash mixing on DJ decks" />
      </motion.div>

    </section>
  );
}
