# Peter Do Bash

Home profesional para Peter Do Bash construida con React, TypeScript, Vite, SCSS Modules y una arquitectura modular preparada para crecer hacia un portal artístico completo.

## Correr el proyecto

```bash
npm install
npm run dev
```

Para validar producción:

```bash
npm run build
```

## SEO y prerender

El build genera HTML estatico prerenderizado para `/`, `/sound`, `/journey` y cada journey individual. Asi los buscadores y redes sociales reciben el contenido principal, el `title` y la descripcion sin depender de la ejecucion inicial de JavaScript.

Para generar URLs canonicas en produccion, definir `SITE_URL` antes del build. En PowerShell:

```powershell
$env:SITE_URL = 'https://tu-dominio.com'
npm run build
```

## Estructura

- `src/app`: composición global, providers y router.
- `src/modules/home`: dominio de la home, con página, secciones y contenido mockeado.
- `src/modules/sound`: página inmersiva de identidad sonora y sistema musical.
- `src/shared`: UI reutilizable, componentes globales, constantes y tipos.
- `src/assets/images`: imágenes normalizadas de la marca.
- `src/styles`: reset, variables y estilos globales.

## Cambiar contenido

La mayor parte del texto editable vive en:

```txt
src/modules/home/data/homeContent.ts
src/modules/home/i18n/homeTranslations.ts
src/modules/sound/i18n/soundPageTranslations.ts
src/shared/constants/brand.ts
src/shared/constants/navigation.ts
```

## Idiomas

La internacionalizacion usa `i18next` y `react-i18next`.

- Configuracion global: `src/app/i18n/i18n.ts`.
- Recursos comunes: `src/app/i18n/resources.ts`.
- Traducciones por pagina: `src/modules/home/i18n/homeTranslations.ts`.
- Traducciones de Sound Page: `src/modules/sound/i18n/soundPageTranslations.ts`.
- Selector de idioma: `src/shared/components/FixedTechRail`.

## Rutas

- `/`: Home.
- `/sound`: Sound Page / The Intersection.

## Cambiar imágenes

Reemplazar estos archivos manteniendo los nombres:

```txt
src/assets/images/dj.png
src/assets/images/background-graffiti.png
src/assets/images/maqueta-home.png
```

## Fuentes

Las fuentes principales se sirven localmente:

- `Anton`: display industrial para `PETER / DO`.
- `IBM Plex Mono` y `Space Mono`: textos técnicos, navegación, fechas y metadata.
- `Edo SZ`: graffiti principal para `BASH`, guardada en `src/assets/fonts/edosz.ttf`.
- `Rubik Spray Paint` y `Rubik Dirt`: fallback graffiti.

Los tokens están en `src/styles/_variables.scss`.

## Escalar

Para sumar nuevas áreas, crear módulos paralelos dentro de `src/modules`, por ejemplo:

```txt
src/modules/sets
src/modules/pressKit
src/modules/shows
src/modules/releases
src/modules/archive
```

Cada módulo debería encapsular sus páginas, secciones, componentes específicos y `data` o puertos de integración futuros.
