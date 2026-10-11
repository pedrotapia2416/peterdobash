import { motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/Button/Button';
import { Section } from '../../../../shared/ui/Section/Section';
import styles from './SoundIntersection.module.scss';

type SoundGenre = {
  id: string;
  label: string;
  set: string;
  meta: string;
  note: string;
};

const trackSources: Record<string, string> = {
  'uk-garage': '/audio/sound-system/uk-garage-bassline.mp3',
  dubstep: '/audio/sound-system/drum-and-bass.mp3',
  'bass-house': '/audio/sound-system/bass-house.mp3',
  minimal: '/audio/sound-system/minimal-deep-tech.flac',
  'deep-house': '/audio/sound-system/deep-house.flac',
  'break-groove': '/audio/sound-system/break-groove.mp3',
  house: '/audio/sound-system/house-control.flac',
  breaks: '/audio/sound-system/breaks-parallel.mp3',
  'uk-garage-speed': '/audio/sound-system/uk-garage-speedgarage.mp3',
};

function TrackVisualizer({ source }: { source?: string }) {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;
    if (!canvas || !audio) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;
    const draw = (progress = 0) => {
      const width = canvas.clientWidth * window.devicePixelRatio;
      const height = canvas.clientHeight * window.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
      context.clearRect(0, 0, width, height);

      const bars = 72;
      const gap = width / bars;
      for (let index = 0; index < bars; index += 1) {
        const seed = Math.abs(Math.sin(index * 1.73) * 0.58 + Math.sin(index * 0.41) * 0.24);
        const barHeight = Math.max(5, (seed + 0.18) * height * 0.78);
        const x = index * gap + gap * 0.32;
        const y = (height - barHeight) / 2;
        context.fillStyle = index / bars <= progress ? '#d9ff00' : 'rgba(237,237,237,0.28)';
        context.fillRect(x, y, Math.max(2, gap * 0.36), barHeight);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      draw(audio.duration ? audio.currentTime / audio.duration : 0);
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      draw(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    draw(0);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [source]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      void audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const seek = (event: MouseEvent<HTMLButtonElement>) => {
    if (!audioRef.current || !duration) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((event.clientX - bounds.left) / bounds.width) * duration;
  };

  const formatTime = (value: number) => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;

  return (
    <div className={styles.trackPlayer}>
      <button className={styles.waveformButton} type="button" onClick={seek} aria-label="Buscar en el track">
        <canvas ref={canvasRef} className={styles.waveformCanvas} />
        <span className={styles.waveformProgress} style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }} />
      </button>
      {source ? (
        <>
          <audio ref={audioRef} preload="metadata" src={source} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
          <div className={styles.playerControls}>
            <button className={styles.playButton} type="button" onClick={togglePlayback} aria-label={playing ? 'Pausar track' : 'Reproducir track'}>
              {playing ? 'Ⅱ' : '▶'}
            </button>
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            <span className={styles.playerHint}>CLICK EN LA ONDA PARA BUSCAR</span>
          </div>
        </>
      ) : (
        <small>Preescucha próximamente disponible.</small>
      )}
    </div>
  );
}

export function SoundIntersection() {
  const { t } = useTranslation('home');
  const genres = t('sound.genres', { returnObjects: true }) as SoundGenre[];
  const [selectedGenreId, setSelectedGenreId] = useState(genres[0]?.id ?? '');
  const selectedGenre = useMemo(
    () => genres.find((genre) => genre.id === selectedGenreId) ?? genres[0],
    [genres, selectedGenreId],
  );
  const getGenreClassName = (genreId: string) => (genreId === 'minimal' ? 'minimal-deeptech' : genreId);

  return (
    <Section id="sound" eyebrow={t('sound.eyebrow')} title={t('sound.title')}>
      <div className={styles.grid}>
        <motion.div
          className={styles.diagram}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          {genres.map((genre) => (
            <button
              className={[styles.genre, styles[getGenreClassName(genre.id)], selectedGenre?.id === genre.id ? styles.active : ''].filter(Boolean).join(' ')}
              type="button"
              onClick={() => setSelectedGenreId(genre.id)}
              key={genre.id}
            >
              {genre.label}
            </button>
          ))}
          <i className={styles.ringOne} />
          <i className={styles.ringTwo} />
          <i className={styles.axisX} />
          <i className={styles.axisY} />
          <strong>PDB</strong>
        </motion.div>

        <div className={styles.side}>
          {selectedGenre && (
            <motion.article
              className={styles.setCard}
              key={selectedGenre.id}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.34 }}
            >
              <span>TRACK REPRESENTATIVO</span>
              <h3>{selectedGenre.set}</h3>
              <strong>{selectedGenre.label}</strong>
              <p>{selectedGenre.note}</p>
              <small>{selectedGenre.meta}</small>
              <TrackVisualizer source={trackSources[selectedGenre.id]} />
              <Button href="/sets" variant="ghost">
                {t('sound.featuredAction')}
              </Button>
            </motion.article>
          )}

        </div>
      </div>
    </Section>
  );
}
