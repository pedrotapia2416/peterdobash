# Auditoría de la home — Peter Do Bash

## Estado

- Fecha de auditoría: 11 de octubre de 2026
- Alcance: home local, código fuente, contenido, SEO inicial, conversión, accesibilidad, responsive y performance
- URL revisada: `http://127.0.0.1:4173/`
- TypeScript: correcto
- Build/prerender SEO: implementado, pendiente de validación completa en un entorno sin bloqueo de esbuild

## Diagnóstico ejecutivo

La web tiene una identidad visual fuerte y diferenciada: underground, técnica, musical y coherente con el manual de marca. La arquitectura también está preparada para crecer.

El principal problema no es visual, sino de conversión y claridad comercial. La página comunica bien quién es Peter Do Bash, pero todavía no define con suficiente fuerza qué debería hacer el visitante después: escuchar, seguir, contratar o asistir a una fecha.

## Fortalezas

- Identidad visual consistente y reconocible.
- Hero con el nombre artístico como foco principal.
- Diferenciación frente a una web genérica de DJ.
- Secciones claras para sonido, transmisión, booking y redes.
- Soporte en español e inglés.
- Responsive y `prefers-reduced-motion` contemplados.
- Arquitectura modular con TypeScript y SCSS Modules.
- La sección `Sound System` funciona como elemento de posicionamiento artístico.

## Hallazgos priorizados

### 1. El CTA principal no lleva a una escucha inmediata

- Impacto: alto
- Confianza: alta
- Esfuerzo: S
- Tipo: oportunidad de conversión

El botón “Escuchar ahora” lleva a `#sets`, pero esa sección presenta una transmisión futura por Kick. No existe un set reproducible inmediatamente.

Recomendación:

- Cambiar el CTA principal a “Escuchar el último set”.
- Llevarlo a SoundCloud, Mixcloud, YouTube o un embed real.
- Mantener “Ver próxima transmisión” como CTA secundario.

Archivo relacionado: `src/modules/home/sections/HeroSection/HeroSection.tsx`

### 2. Los enlaces sociales son placeholders

- Impacto: crítico antes de publicar
- Confianza: alta
- Esfuerzo: S
- Tipo: bug de contenido

Actualmente apuntan a dominios generales:

```txt
https://soundcloud.com/
https://instagram.com/
https://youtube.com/
https://spotify.com/
```

Esto genera pérdida de confianza y hace que los botones no cumplan su función.

Archivo: `src/modules/home/data/homeContent.ts`

### 3. No existe un flujo real de booking

- Estado actual: parcialmente resuelto. Ya existe un CTA de email visible y accionable; quedan pendientes formulario o WhatsApp si fueran necesarios.

- Impacto: alto
- Confianza: alta
- Esfuerzo: S/M
- Tipo: oportunidad comercial

La página muestra “Booking Abierto”, pero el botón “Contacto” solo lleva a la sección de redes. No hay email, formulario, WhatsApp ni contacto profesional visible.

Propuesta inicial:

```txt
Booking / prensa
booking@peterdobash.com
WhatsApp
Instagram DM
```

CTA sugerido: `Consultar disponibilidad`

### 4. La propuesta de valor del hero está incompleta

- Impacto: alto
- Confianza: alta
- Esfuerzo: S
- Tipo: copywriting

`hero.summary` está vacío en español e inglés. El primer pantallazo muestra el nombre y los géneros, pero no una frase que explique la propuesta.

Propuesta:

> DJ y selector desde Córdoba, Argentina. UK Garage, bass, breaks y grooves de madrugada.

Archivo: `src/translations/es/home.json`

### 5. “Archive” no representa su destino actual

- Impacto: medio
- Confianza: alta
- Esfuerzo: S
- Tipo: UX/navegación

El enlace “Archive” apunta a `/#shows`, que actualmente es la sección de booking.

Opciones:

- Cambiar “Archive” por “Booking”.
- Crear una verdadera sección Archive.
- Hacer que Archive apunte a `/journey`.

### 6. Riesgo SEO de la SPA

- Impacto: alto
- Confianza: alta
- Esfuerzo: M
- Tipo: riesgo técnico

El HTML inicial de Vite contenía únicamente:

```html
<div id="root"></div>
```

Eso obligaba a esperar la ejecución de JavaScript para obtener el contenido principal. Se implementó prerender estático para las rutas públicas mediante:

- `src/entry-server.tsx`
- `scripts/prerender.mjs`
- `hydrateRoot` en `src/main.tsx`

El build ahora está preparado para generar HTML con contenido, títulos, descripciones y Open Graph por ruta.

Pendiente: validar el build completo en un entorno donde esbuild pueda crear procesos secundarios.

### 7. Falta metadata SEO complementaria

Se recomienda completar o verificar:

- Open Graph por página.
- Twitter Cards.
- URL canónica.
- JSON-LD de tipo `Person` o `MusicGroup`.
- `sitemap.xml`.
- `robots.txt`.
- Metadata específica para `/sound` y `/journey`.

Parte de esto ya fue incorporada al prerender mediante `scripts/prerender.mjs`.

### 8. Peso de imágenes elevado

- Impacto: medio/alto
- Confianza: alta
- Esfuerzo: M
- Tipo: performance

Se detectaron imágenes PNG de entre 1 y 3 MB, incluyendo:

- `background-graffiti.png`: aproximadamente 2,25 MB.
- `dj.png`: aproximadamente 1,30 MB.
- Varias imágenes de journeys superiores a 1,5 MB.

También se detectó un bundle JavaScript de aproximadamente 460 KB y CSS de aproximadamente 60 KB.

Recomendaciones:

- Convertir imágenes a WebP o AVIF.
- Generar tamaños responsive.
- Usar `srcSet`.
- Comprimir fondos.
- Reservar máxima calidad para las imágenes principales.

### 9. El contador de transmisión debe reflejar una actividad real

- Impacto: medio
- Confianza: media
- Esfuerzo: S
- Tipo: contenido/producto

La home comunica “Live todos los jueves”, pero debe confirmarse que la transmisión exista y que Kick sea el canal definitivo.

Si es real, conviene mostrar:

- próxima fecha concreta;
- hora local;
- estado “Live now” cuando corresponda;
- enlace directo;
- opción de recordatorio o suscripción.

## Nueva jerarquía recomendada

```txt
1. Hero
   Peter Do Bash
   DJ / selector / Córdoba, Argentina
   UK Garage · Bass · Breaks · Deep House
   [Escuchar último set]
   [Contrataciones]

2. Prueba inmediata
   Último set publicado
   Plataforma
   Duración
   Fecha

3. Identidad sonora
   Sound System / The Intersection

4. Booking
   Fechas disponibles
   Tipo de eventos
   Contacto directo

5. Próxima transmisión
   Solo si está confirmada

6. Journeys / Archive
   Sets, recorridos y referencias

7. Redes y footer
```

La prioridad es colocar una acción de escucha real y una acción de contratación visible antes de pedir al usuario que explore toda la página.

## Roadmap

### Ahora

- [x] Reemplazar enlaces sociales placeholder.
- [x] Agregar un set real reproducible mediante una pantalla modular de SoundCloud.
- [x] Crear CTA “Contrataciones” conectado a `booking@peterdobash.com`.
- [x] Completar el texto descriptivo del hero.
- [ ] Corregir “Archive” o implementar su destino real.
- [ ] Verificar que la transmisión de Kick sea real y actual.
- [x] Implementar prerender estático para las rutas públicas.
- [x] Agregar títulos y descripciones por ruta.
- [x] Cambiar la hidratación cliente a `hydrateRoot`.

### Siguiente iteración

- [x] Agregar email de booking visible y accionable.
- [x] Agregar formulario de booking con fallback por email y WhatsApp.
- [ ] Completar Open Graph y Twitter Cards.
- [ ] Agregar JSON-LD de artista/persona.
- [ ] Optimizar PNG a WebP/AVIF.
- [ ] Crear metadata por ruta en navegación cliente.
- [ ] Añadir eventos o pruebas sociales verificables.
- [ ] Validar el build prerenderizado en un entorno normal.

### Después

- [ ] Medir clics en “Escuchar”.
- [ ] Medir clics en “Booking”.
- [ ] Medir reproducciones o visitas a plataformas.
- [ ] Medir seguidores generados desde la web.
- [ ] Testear dos variantes del hero.
- [ ] Crear una sección Archive con sets y journeys.

## Métricas recomendadas

- CTR del CTA principal.
- Clics hacia plataformas de escucha.
- Clics en contacto/booking.
- Reproducciones iniciadas.
- Seguimientos generados.
- Tiempo hasta la primera interacción.
- Porcentaje de usuarios que llega a la sección de booking.

## Criterio de éxito

La home debería permitir que un visitante nuevo pueda, en menos de 15 segundos:

1. entender quién es Peter Do Bash;
2. identificar su universo musical;
3. escuchar algo;
4. seguirlo o contactarlo para una contratación.

