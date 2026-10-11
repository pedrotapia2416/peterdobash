import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <a className={[styles.button, styles[variant], className].filter(Boolean).join(' ')} {...props}>
      <span>{children}</span>
      <span aria-hidden="true" className={styles.mark}>
        →
      </span>
    </a>
  );
}
