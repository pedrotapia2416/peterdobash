import fs from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const root = process.cwd();
const dist = path.resolve(root, 'dist');
const siteUrl = process.env.SITE_URL?.replace(/\/$/, '');
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const vite = await createServer({
  appType: 'custom',
  configLoader: 'native',
  root,
  server: { middlewareMode: true },
});

const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

const routes = [
  {
    path: '/',
    title: 'Peter Do Bash | DJ y selector desde Córdoba',
    description: 'Peter Do Bash: DJ y selector desde Córdoba, Argentina. UK Garage, bass, breaks, Deep House y cultura underground.',
  },
  {
    path: '/sound',
    title: 'Sound System | Peter Do Bash',
    description: 'Explorá la identidad sonora de Peter Do Bash: UK Garage, Bass, Breaks, Deep House y cultura UK.',
  },
  {
    path: '/journey',
    title: 'Journeys | Peter Do Bash',
    description: 'Recorridos, sets y paisajes sonoros de Peter Do Bash.',
  },
  {
    path: '/sets/deep-house-bass-house-marzo',
    title: 'Deep House / Bass House — Marzo | Peter Do Bash',
    description: 'Escuchá el set de Peter Do Bash entre profundidad, groove y presión de club.',
  },
  ...Array.from({ length: 12 }, (_, index) => ({
    path: `/journey/${String(index + 1).padStart(2, '0')}`,
    title: `Journey ${String(index + 1).padStart(2, '0')} | Peter Do Bash`,
    description: 'Un recorrido sonoro de Peter Do Bash entre grooves, bajos y cultura de club.',
  })),
];

const updateHead = (html, route) => html
  .replace(/<html lang="[^"]+">/, '<html lang="es">')
  .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
  .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${route.description}" />`)
  .replace('</head>', [
    siteUrl ? `<link rel="canonical" href="${siteUrl}${route.path === '/' ? '' : route.path}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${route.title}" />`,
    `<meta property="og:description" content="${route.description}" />`,
    `<meta property="og:site_name" content="Peter Do Bash" />`,
    '</head>',
  ].join(''));

for (const route of routes) {
  const body = render(route.path);
  const html = updateHead(template.replace('<div id="root"></div>', `<div id="root">${body}</div>`), route);
  const outputDirectory = path.join(dist, route.path.slice(1));
  await fs.mkdir(outputDirectory, { recursive: true });
  await fs.writeFile(path.join(outputDirectory, 'index.html'), html);
}

await vite.close();
console.log(`Prerendered ${routes.length} routes.`);
