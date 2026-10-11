import { useTranslation } from 'react-i18next';
import { brand } from '../../constants/brand';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <span>{brand.wordmark}</span>
      <span>{t('brand.location')}</span>
      <span>{t('brand.rights')}</span>
    </footer>
  );
}
