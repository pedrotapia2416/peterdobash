import { renderToStaticMarkup } from 'react-dom/server';
import '@fontsource/anton/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-300.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import '@fontsource/ibm-plex-mono/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-700.css';
import '@fontsource/space-mono/latin-400.css';
import '@fontsource/space-mono/latin-700.css';
import '@fontsource/rubik-dirt/latin-400.css';
import '@fontsource/rubik-spray-paint/latin-400.css';
import { App } from './app/App';
import './config/i18next-config';
import './styles/globals.scss';

export function render(url: string) {
  return renderToStaticMarkup(<App initialPathname={url} />);
}
