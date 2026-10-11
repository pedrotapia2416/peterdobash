Actúa como un arquitecto frontend senior especializado en React, TypeScript, diseño modular, arquitectura escalable y UI de alto impacto visual.

Necesito que crees una web profesional para el artista/DJ **Peter Do Bash**.

El proyecto debe estar desarrollado con:

- React
- TypeScript
- Mui material
- Animaciones (buscar una muy buena librería para las animaciones de trnasisciones y letras)
- Vite
- CSS Modules o SCSS Modules
- Arquitectura modular inspirada en arquitectura hexagonal / clean architecture
- Código limpio, escalable y preparado para crecer de una home a un portal artístico completo

En la raíz del proyecto voy a tener estos archivos:

- `maqueta.png` → imagen de referencia visual de la home
- `dj.png` → imagen del DJ con bandejas, recortado sobre fondo oscuro
- `background.png` → fondo urbano/grafiteado sin el DJ
- `identidad.md` → documento con identidad visual, colores, tipografías, referencias, estilo, narrativa y reglas de marca

Tu tarea es leer visualmente y conceptualmente esos archivos y crear una primera versión funcional de la web.

OBJETIVO GENERAL

Construir una home impactante, oscura, urbana, underground, con estética profesional de música electrónica, inspirada en:

- UK Garage
- Bass House
- Deep House
- Dubstep
- cultura rave
- graffiti industrial
- diseño brutalista
- diseño técnico tipo sistema visual

La web NO debe parecer una plantilla genérica de DJ.
Debe sentirse como una marca artística seria, moderna, underground y escalable.

CONCEPTO CENTRAL

Peter Do Bash representa la intersección entre:

- Deep House
- Bass House
- Jacking House
- UK Garage
- Break & Groove
- DeepTech / Tech House
- Dubstep / Bass Culture como variante urbana

La home debe transmitir:

“Groove over hype. Selection over trends. Underground before algorithms.”

REQUISITOS VISUALES

Usar una estética:

- fondo negro
- textura urbana
- graffiti oscuro
- alto contraste
- tipografía grande
- layout editorial
- detalles técnicos
- líneas finas
- cruces
- coordenadas
- waveforms
- retícula sutil
- acentos verde ácido

Paleta sugerida:

```css
--color-black: #050505;
--color-black-soft: #111111;
--color-gray-dark: #1a1a1a;
--color-gray: #303030;
--color-white: #ededed;
--color-muted: #8a8a8a;
--color-accent: #d9ff00;
--color-accent-dark: #8fb400;
```

Tipografías sugeridas:

- Para títulos: usar `Impact`, `Arial Black` o una fuente fallback ultra bold si no hay fuentes premium.
- Para textos técnicos: `IBM Plex Mono`, `Space Mono`, `monospace`.

No importar fuentes pagas.
Usar Google Fonts si hace falta.

ESTRUCTURA DE LA HOME

Crear una home con estas secciones/componentes:

1. Header
   - Logo textual: PETER DO BASH
   - Navegación:
     - Home
     - Sound
     - Journeys
     - Archive
     - Contact

   - Menú tipo minimal/tech

2. Hero
   - Fondo principal usando `background-graffiti.png`
   - Imagen del DJ usando `dj.png`
   - Título enorme:
     PETER
     DO
     BASH
   - Géneros debajo:
     DEEP HOUSE / BASS HOUSE / JACKING HOUSE / UK GARAGE / DUBSTEP
   - Bajada:
     Groove driven. Underground minded.
     Born in Córdoba, connected to the world.
   - CTA principal:
     Listen Now
   - CTA secundario:
     Explore The Sound

3. Sound Intersection
   - Crear un gráfico visual simple con cruz/ejes:
     - arriba: UK GARAGE
     - izquierda: BREAK & GROOVE
     - derecha: BASS HOUSE
     - abajo: DEEPTECH
     - centro: PDB

   - Debe parecer un sistema técnico, no un gráfico escolar.
   - Usar líneas, puntos, brillo suave del color accent.

4. Latest Set Card
   - Card visual para el último set
   - Título: JANGADERO
   - Ubicación: Córdoba, ARG
   - Fecha: May 2024
   - Botón/flecha de acción

5. Upcoming Shows
   - Lista mínima:
     - 15.06 — BAUM FESTIVAL — Córdoba, ARG
     - 28.06 — CHILLI DAY — Córdoba, ARG
     - 12.07 — ALDEA ANTIGUA — Córdoba, ARG

6. Follow / Links
   - SoundCloud
   - Instagram
   - YouTube
   - Spotify

7. Footer
   - Peter Do Bash
   - Córdoba, Argentina
   - All rights reserved

ARQUITECTURA REQUERIDA

No quiero todo metido en `App.tsx`.

Crear una estructura escalable similar a:

```txt
src/
  app/
    App.tsx
    router/
      AppRouter.tsx
    providers/
      AppProviders.tsx

  shared/
    ui/
      Button/
        Button.tsx
        Button.module.scss
      Section/
        Section.tsx
        Section.module.scss
      TechnicalLabel/
        TechnicalLabel.tsx
        TechnicalLabel.module.scss
    components/
      Header/
      Footer/
    constants/
      brand.ts
      navigation.ts
    types/
      index.ts

  modules/
    home/
      pages/
        HomePage.tsx
      sections/
        HeroSection/
          HeroSection.tsx
          HeroSection.module.scss
        SoundIntersection/
          SoundIntersection.tsx
          SoundIntersection.module.scss
        LatestSet/
          LatestSet.tsx
          LatestSet.module.scss
        UpcomingShows/
          UpcomingShows.tsx
          UpcomingShows.module.scss
        FollowLinks/
          FollowLinks.tsx
          FollowLinks.module.scss
      data/
        homeContent.ts

  assets/
    images/
      maqueta-home.png
      dj.png
      background-graffiti.png

  styles/
    globals.scss
    variables.scss
    reset.scss
```

ARQUITECTURA HEXAGONAL APLICADA AL FRONTEND

Aplicar una separación clara:

- `app`: composición global, providers, router.
- `modules`: features o dominios funcionales.
- `shared`: componentes reutilizables, UI base, constantes.
- `data`: contenido mockeado por módulo.
- `assets`: imágenes y recursos.
- `styles`: tokens globales, variables, reset.

La idea es que después pueda crecer a:

- portal de sets
- press kit
- fechas
- releases
- blog/noticias
- galería visual
- contacto para bookings
- panel admin futuro

REGLAS DE CÓDIGO

- Usar TypeScript estricto.
- Crear componentes pequeños.
- Evitar hardcodear todo dentro de JSX.
- Separar contenido en archivos `data`.
- Usar nombres claros.
- Evitar dependencias innecesarias.
- La UI debe ser responsive.
- Mobile first o al menos correctamente adaptable.
- No usar Tailwind.
- No usar librerías UI tipo Material UI.
- No usar Bootstrap.
- Priorizar CSS propio y diseño custom.
- Mantener una estética profesional, no genérica.

INTERACCIONES

Agregar detalles simples pero elegantes:

- Hover en botones con borde verde ácido.
- Pequeñas líneas animadas.
- Efecto glow muy sutil.
- Parallax leve si es simple.
- Overlay de ruido/grain con CSS.
- Transiciones suaves.
- Nada exagerado ni gamer.

RESPONSIVE

Desktop:

- Layout editorial, imagen grande, título enorme.

Tablet:

- Reacomodar columnas.

Mobile:

- Título grande pero legible.
- Imagen del DJ debajo o integrada.
- Cards apiladas.
- Menú simplificado.

ENTREGABLES

Quiero que generes:

1. Proyecto React + TypeScript completo.
2. Estructura de carpetas limpia.
3. Componentes principales.
4. Estilos globales.
5. Variables de marca.
6. Home funcional.
7. Instrucciones para correr:

```bash
npm install
npm run dev
```

8. Un breve `README.md` explicando:
   - estructura
   - cómo correr
   - dónde cambiar contenido
   - dónde cambiar imágenes
   - cómo seguir escalando módulos

CRITERIO DE CALIDAD

La web debe verse como una pieza visual de marca, no como una práctica de React.

Debe sentirse:

- oscura
- pesada
- urbana
- underground
- técnica
- profesional
- musical
- visualmente memorable

Antes de terminar, revisá que:

- compile sin errores
- no haya imports rotos
- las imágenes estén correctamente referenciadas
- el responsive funcione
- el diseño respete `identidad.md`
- el código sea fácil de mantener
