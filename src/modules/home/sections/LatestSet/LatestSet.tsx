import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import djImage from '../../../../assets/images/dj.png';
import { Button } from '../../../../shared/ui/Button/Button';
import { Section } from '../../../../shared/ui/Section/Section';
import styles from './LatestSet.module.scss';

const ARGENTINA_TIME_ZONE = 'America/Argentina/Buenos_Aires';
const THURSDAY = 4;
const TRANSMISSION_HOUR = 21;
const LATEST_SET_URL = '/sets/deep-house-bass-house-marzo';

type ArgentinaDateParts = {
  day: number;
  hour: number;
  minute: number;
  month: number;
  second: number;
  weekday: number;
  year: number;
};

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: ARGENTINA_TIME_ZONE,
  weekday: 'short',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const weekdays: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const getArgentinaDateParts = (date: Date): ArgentinaDateParts => {
  const parts = formatter.formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '0';

  return {
    day: Number(value('day')),
    hour: Number(value('hour')),
    minute: Number(value('minute')),
    month: Number(value('month')),
    second: Number(value('second')),
    weekday: weekdays[value('weekday')] ?? 0,
    year: Number(value('year')),
  };
};

const getNextTransmissionDate = (now: Date) => {
  const argentinaNow = getArgentinaDateParts(now);
  const hasStartedToday =
    argentinaNow.weekday === THURSDAY &&
    (argentinaNow.hour > TRANSMISSION_HOUR ||
      (argentinaNow.hour === TRANSMISSION_HOUR && (argentinaNow.minute > 0 || argentinaNow.second > 0)));
  const daysUntilThursday = (THURSDAY - argentinaNow.weekday + 7) % 7;
  const daysUntilTransmission = hasStartedToday ? 7 : daysUntilThursday;

  return new Date(
    Date.UTC(argentinaNow.year, argentinaNow.month - 1, argentinaNow.day + daysUntilTransmission, TRANSMISSION_HOUR + 3),
  );
};

const getTimeLeft = (targetDate: Date, now: Date) => {
  const totalSeconds = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

const padTime = (value: number) => value.toString().padStart(2, '0');

export function LatestSet() {
  const { t } = useTranslation('home');
  const [now, setNow] = useState(() => new Date());
  const nextTransmissionDate = useMemo(() => getNextTransmissionDate(now), [now]);
  const timeLeft = getTimeLeft(nextTransmissionDate, now);
  const countdownItems = [
    { label: t('latestSet.countdown.days'), value: timeLeft.days.toString() },
    { label: t('latestSet.countdown.hours'), value: padTime(timeLeft.hours) },
    { label: t('latestSet.countdown.minutes'), value: padTime(timeLeft.minutes) },
    { label: t('latestSet.countdown.seconds'), value: padTime(timeLeft.seconds) },
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <Section id="sets" eyebrow={t('latestSet.eyebrow')} title={t('latestSet.title')}>
      <motion.article
        className={styles.card}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.image}>
          <img src={djImage} alt="" />
          <div className={styles.frequency} aria-hidden="true">
            21:00 ARG
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.signal}>
            <span className={styles.liveDot} aria-hidden="true" />
            <span>{t('latestSet.label')}</span>
          </div>
          <h3>{t('latestSet.name')}</h3>
          <p>{t('latestSet.note')}</p>
          <div className={styles.countdown} aria-label={t('latestSet.countdownLabel')}>
            {countdownItems.map((item) => (
              <div key={item.label} className={styles.timeUnit}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <small>{t('latestSet.schedule')}</small>
        </div>
        <Button href={LATEST_SET_URL} variant="ghost" className={styles.action}>
          <span className={styles.kickLogo} aria-hidden="true">
            S
          </span>
          {t('latestSet.action')}
        </Button>
      </motion.article>
    </Section>
  );
}
