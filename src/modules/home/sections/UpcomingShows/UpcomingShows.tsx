import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../../../../shared/ui/Section/Section';
import { Button } from '../../../../shared/ui/Button/Button';
import styles from './UpcomingShows.module.scss';

function getNextTwoMonths(language: string) {
  const locale = language.startsWith('es') ? 'es-AR' : 'en-US';
  const now = new Date();

  return [1, 2].map((monthOffset) => {
    const date = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
    const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);

    return month.charAt(0).toUpperCase() + month.slice(1);
  });
}

export function UpcomingShows() {
  const { i18n, t } = useTranslation('home');
  const bookingMonths = useMemo(() => getNextTwoMonths(i18n.language), [i18n.language]);

  return (
    <Section id="shows" eyebrow={t('shows.eyebrow')} title={t('shows.title')}>
      <div className={styles.booking}>
        <p>{t('shows.body')}</p>
        <div className={styles.months} aria-label={t('shows.monthsLabel')}>
          {bookingMonths.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
        <Button href="#contact">{t('shows.contactCta')}</Button>
      </div>
    </Section>
  );
}
