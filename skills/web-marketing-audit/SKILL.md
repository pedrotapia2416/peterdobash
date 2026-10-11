---
name: web-marketing-audit
description: Evalúa y mejora sitios web de marketing, portfolios y landing pages desde la perspectiva de posicionamiento, UX, conversión, copywriting, SEO, accesibilidad y calidad técnica. Usar cuando el usuario pida auditar una web, evaluar una home, mejorar una landing o proponer un roadmap de optimización.
metadata:
  short-description: Auditoría web orientada a marketing y mejora
---

# Web marketing audit

Realiza una auditoría accionable y basada en evidencia de una web. El resultado debe ayudar a decidir qué cambiar primero y por qué, sin confundir una preferencia estética con un problema de negocio.

## Alcance

Evalúa, según corresponda:

- propuesta de valor, audiencia, posicionamiento y diferenciación;
- claridad del primer pantallazo, jerarquía visual, navegación y llamadas a la acción;
- conversión: objetivo principal, fricción, confianza, prueba social y próximos pasos;
- copywriting: titular, subtítulo, tono, beneficios, especificidad y consistencia de marca;
- experiencia mobile, accesibilidad e interacción;
- SEO técnico y de contenido: title, description, headings, enlaces, indexabilidad, Open Graph y datos estructurados;
- rendimiento percibido y técnico: peso de recursos, imágenes, fuentes, LCP, CLS e INP cuando se puedan medir;
- coherencia visual, estados de componentes y calidad de implementación.

No inventes datos de conversión, audiencia o rendimiento. Distingue siempre entre:

1. evidencia observada en el navegador o el código;
2. inferencias razonables;
3. hipótesis que requieren analítica o investigación de usuarios.

## Flujo de trabajo

1. Define el objetivo de negocio de la página y su audiencia principal. Si no está documentado, declara una hipótesis explícita.
2. Revisa primero la página renderizada y los recorridos principales. Para un proyecto local, usa la URL local disponible y también inspecciona el código fuente.
3. Comprueba el primer pantallazo: en pocos segundos debe quedar claro quién es la marca, qué ofrece y cuál es la acción siguiente.
4. Audita en este orden: base técnica, accesibilidad/responsive, contenido y posicionamiento, conversión, diseño y diferenciación.
5. Clasifica cada hallazgo por impacto (alto/medio/bajo), confianza (alta/media/baja), esfuerzo (S/M/L) y tipo (bug, riesgo, oportunidad o experimento).
6. Propón cambios concretos, preferentemente con texto, estructura, componente o archivo afectado.
7. Cierra con un roadmap priorizado: ahora, siguiente iteración y después. Incluye métricas de éxito cuando tenga sentido.

## Entregable

Entrega un informe breve pero específico con:

- resumen ejecutivo;
- fortalezas actuales;
- problemas priorizados con evidencia y recomendación;
- propuesta de nueva jerarquía de la home o wireframe textual si hace falta;
- mejoras de copy y CTA con alternativas;
- checklist de SEO, accesibilidad y performance;
- roadmap con casillas `[ ]` y criterios de aceptación;
- qué debe medirse después: clics, reproducciones, contactos, reservas, seguidores u otro objetivo definido.

## Criterios especiales para portfolios artísticos y DJs

- Prioriza una identidad artística clara sobre una lista genérica de servicios.
- Distingue objetivos de escucha, seguimiento, contratación y exploración de contenido.
- Comprueba que el visitante pueda escuchar algo, entender el estilo y contactar para bookings sin buscar demasiado.
- Revisa si las pruebas de actividad (sets, fechas, venues, colaboradores, plataformas) son verificables y actuales.
- Evita recomendar elementos que contradigan el manual de identidad; propone variantes compatibles con la marca.

## Límites

- No cambies código sin que el usuario pida implementación.
- No presentes una puntuación automática como diagnóstico completo.
- No conviertas recomendaciones genéricas de SEO en promesas de posicionamiento.
- No uses datos de usuarios, analítica o tests A/B inexistentes como evidencia.

## Referencias

Para auditorías técnicas detalladas, consulta `references/sources.md`. Si hay herramientas de navegador o Lighthouse disponibles, úsalas como evidencia complementaria, no como sustituto del análisis de negocio.
