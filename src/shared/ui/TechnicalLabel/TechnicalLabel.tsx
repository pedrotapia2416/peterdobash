import type { PropsWithChildren } from 'react';
import styles from './TechnicalLabel.module.scss';

type TechnicalLabelProps = PropsWithChildren<{
  tone?: 'default' | 'accent';
}>;

export function TechnicalLabel({ children, tone = 'default' }: TechnicalLabelProps) {
  return <span className={[styles.label, styles[tone]].join(' ')}>{children}</span>;
}
