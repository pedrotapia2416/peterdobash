import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '../../../app/i18n/i18n';
import { setLanguage } from '../../../app/store/languageSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { brand } from '../../constants/brand';
import styles from './FixedTechRail.module.scss';

export function FixedTechRail() {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language.current);
  const nextLanguage: SupportedLanguage = currentLanguage === 'en' ? 'es' : 'en';

  const handleLanguageChange = () => {
    dispatch(setLanguage(nextLanguage));
  };

  return (
    <aside className={styles.rail} aria-label="Brand technical rail">
      <div className={styles.identity}>
        <span>{t('brand.railSystem')}</span>
        <span>{t('brand.railLocation')}</span>
      </div>

      <button className={styles.language} type="button" aria-label={t('language.label')} onClick={handleLanguageChange}>
        <span className={styles.globe} aria-hidden="true" />
        <span className={styles.flag} aria-hidden="true">
          {t('language.currentFlag')}
        </span>
        <span className={styles.code}>{t('language.currentCode')}</span>
      </button>

      <div className={styles.barcode} aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <i key={index} />
        ))}
      </div>

      <div className={styles.coordinates} aria-hidden="true">
        <span>{brand.coordinates}</span>
      </div>
    </aside>
  );
}
