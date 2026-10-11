import type { NavigationItem } from '../types';

export const navigationItems: Array<NavigationItem & { labelKey: string }> = [
  { label: 'Home', labelKey: 'nav.home', href: '/' },
  { label: 'Sound', labelKey: 'nav.sound', href: '/sound' },
  { label: 'Journeys', labelKey: 'nav.journeys', href: '/journey' },
  { label: 'Archive', labelKey: 'nav.archive', href: '/#shows' },
  { label: 'Contact', labelKey: 'nav.contact', href: '#contact' },
];
