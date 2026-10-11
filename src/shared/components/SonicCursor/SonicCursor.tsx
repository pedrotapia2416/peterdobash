import { useEffect, useRef, type CSSProperties } from 'react';
import styles from './SonicCursor.module.scss';

const TRAIL_LENGTH = 9;

type Point = {
  x: number;
  y: number;
};

type TrailStyle = CSSProperties & {
  '--trail-alpha': number;
  '--trail-alpha-interactive': number;
  '--trail-size': string;
};

const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

export function SonicCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsFinePointer || prefersReducedMotion) {
      return undefined;
    }

    document.documentElement.classList.add('has-sonic-cursor');

    const target: Point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dot: Point = { ...target };
    const ring: Point = { ...target };
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ ...target }));
    let isVisible = false;
    let isInteractive = false;
    let animationFrame = 0;

    const setVisible = (nextVisible: boolean) => {
      if (isVisible === nextVisible) {
        return;
      }

      isVisible = nextVisible;
      rootRef.current?.classList.toggle(styles.visible, nextVisible);
    };

    const setInteractive = (nextInteractive: boolean) => {
      if (isInteractive === nextInteractive) {
        return;
      }

      isInteractive = nextInteractive;
      rootRef.current?.classList.toggle(styles.interactive, nextInteractive);
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      setVisible(true);
      setInteractive(Boolean((event.target as Element | null)?.closest(interactiveSelector)));
    };

    const handlePointerLeave = () => setVisible(false);
    const handlePointerDown = () => rootRef.current?.classList.add(styles.pressed);
    const handlePointerUp = () => rootRef.current?.classList.remove(styles.pressed);

    const render = () => {
      dot.x += (target.x - dot.x) * 0.9;
      dot.y += (target.y - dot.y) * 0.9;
      ring.x += (target.x - ring.x) * 0.22;
      ring.y += (target.y - ring.y) * 0.22;

      trail.forEach((point, index) => {
        const leader = index === 0 ? target : trail[index - 1];
        point.x += (leader.x - point.x) * 0.32;
        point.y += (leader.y - point.y) * 0.32;
      });

      dotRef.current?.style.setProperty('transform', `translate3d(${dot.x}px, ${dot.y}px, 0)`);
      ringRef.current?.style.setProperty('transform', `translate3d(${ring.x}px, ${ring.y}px, 0)`);

      trailRefs.current.forEach((node, index) => {
        const point = trail[index];
        node?.style.setProperty('transform', `translate3d(${point.x}px, ${point.y}px, 0)`);
      });

      animationFrame = window.requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove('has-sonic-cursor');
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.cursor} aria-hidden="true">
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef} className={styles.dot} />
      <div className={styles.trail}>
        {Array.from({ length: TRAIL_LENGTH }).map((_, index) => (
          <span
            key={index}
            ref={(node) => {
              trailRefs.current[index] = node;
            }}
            style={
              {
                '--trail-alpha': Math.max(0.1, 0.42 - index * 0.035),
                '--trail-alpha-interactive': Math.max(0.08, 0.34 - index * 0.026),
                '--trail-size': `${13 - index * 0.85}px`,
              } as TrailStyle
            }
          />
        ))}
      </div>
    </div>
  );
}
