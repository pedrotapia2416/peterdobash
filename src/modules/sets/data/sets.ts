export type SetItem = {
  slug: string;
  title: string;
  description: string;
  platform: 'SoundCloud';
  sourceUrl: string;
  meta: string;
};

export const sets: Record<string, SetItem> = {
  'deep-house-bass-house-marzo': {
    slug: 'deep-house-bass-house-marzo',
    title: 'Deep House / Bass House — Marzo',
    description: 'Un set de Peter Do Bash entre profundidad, groove y presión de club.',
    platform: 'SoundCloud',
    sourceUrl:
      'https://soundcloud.com/peterdobash/deep-house-bass-house-marzo?si=854deb0ba48649508c48cbd30e220cf3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    meta: 'Deep House / Bass House / Córdoba, ARG',
  },
};
