import type { ElementType, PropsWithChildren } from 'react';
import styles from './Section.module.scss';

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title?: string;
  as?: ElementType;
  className?: string;
}>;

export function Section({ as, children, className, eyebrow, id, title }: SectionProps) {
  const Component = as ?? 'section';

  return (
    <Component id={id} className={[styles.section, className].filter(Boolean).join(' ')}>
      {(eyebrow || title) && (
        <header className={styles.header}>
          {eyebrow && <span>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
        </header>
      )}
      {children}
    </Component>
  );
}
