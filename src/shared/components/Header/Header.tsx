import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { brand } from '../../constants/brand';
import { navigationItems } from '../../constants/navigation';
import styles from './Header.module.scss';

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home" aria-label="Peter Do Bash home">
        <span className={styles.crosshair} aria-hidden="true" />
        {brand.wordmark}
      </a>

      <nav
        id="primary-navigation"
        className={[styles.nav, open ? styles.open : ''].join(' ')}
        aria-label="Primary navigation"
      >
        {navigationItems.map((item, index) => (
          <motion.a
            href={item.href}
            key={item.href}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.42 }}
            onClick={() => setOpen(false)}
          >
            {t(item.labelKey, item.label)}
          </motion.a>
        ))}
      </nav>

      <button
        className={styles.menuButton}
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span>Menu</span>
        <i aria-hidden="true" />
      </button>
    </header>
  );
}
