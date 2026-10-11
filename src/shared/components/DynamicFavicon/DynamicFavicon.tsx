import { useEffect } from 'react';

const FAVICON_SIZE = 64;
const FAVICON_INTERVAL_MS = 1400;

const encodeSvg = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

const faviconFrames = [
  encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${FAVICON_SIZE} ${FAVICON_SIZE}">
      <rect width="${FAVICON_SIZE}" height="${FAVICON_SIZE}" rx="12" fill="#050505"/>
      <circle cx="32" cy="32" r="20" fill="none" stroke="#d9ff00" stroke-width="5"/>
      <circle cx="32" cy="32" r="4" fill="#ededed"/>
      <path d="M32 7v13M32 44v13M7 32h13M44 32h13" stroke="#d9ff00" stroke-width="5" stroke-linecap="square"/>
      <path d="M21 21l22 22" stroke="#ededed" stroke-width="3" stroke-linecap="square" opacity=".82"/>
    </svg>
  `),
  encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${FAVICON_SIZE} ${FAVICON_SIZE}">
      <rect width="${FAVICON_SIZE}" height="${FAVICON_SIZE}" rx="12" fill="#050505"/>
      <path d="M10 48V16h18c8 0 13 4 13 11s-5 11-13 11H21v10H10Zm11-20h7c3 0 5-1 5-4s-2-4-5-4h-7v8Z" fill="#d9ff00"/>
      <text x="32" y="53" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="17" fill="#ededed" letter-spacing="1">DB</text>
    </svg>
  `),
];

const getOrCreateFaviconLink = () => {
  const existingLink = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');

  if (existingLink) {
    return existingLink;
  }

  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  document.head.appendChild(link);

  return link;
};

export function DynamicFavicon() {
  useEffect(() => {
    const faviconLink = getOrCreateFaviconLink();
    const originalHref = faviconLink.href;
    let frameIndex = 0;

    faviconLink.type = 'image/svg+xml';
    faviconLink.href = faviconFrames[frameIndex];

    const intervalId = window.setInterval(() => {
      frameIndex = (frameIndex + 1) % faviconFrames.length;
      faviconLink.href = faviconFrames[frameIndex];
    }, FAVICON_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);

      if (originalHref) {
        faviconLink.href = originalHref;
      }
    };
  }, []);

  return null;
}
