# Campaña Myriam Barahona — Senado Universitario

Landing page de la candidatura de **Myriam Barahona al Senado Universitario de la Universidad de Chile**, construida con Vite + Vue 3 + TypeScript.

La estética (paleta navy/dorado/rojo, tipografías Archivo / Newsreader / Libre Franklin) y la estructura de contenidos se basan en el diseño de `../info/Campaña Myriam Barahona - standalone.html`, enriquecido con la información de `../info/myriam-barahona-fenafuch.md` y `../info/senado-universitario-uchile.md`.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # type-check (vue-tsc) + build de producción
npm run preview  # previsualizar el build
```

## Formulario "Sumar mi apoyo"

El formulario envía los apoyos a un servicio externo. Configúralo así:

1. Copia `.env.example` a `.env`.
2. Pega tu endpoint en `VITE_FORM_ENDPOINT` (ej. un formulario de [Formspree](https://formspree.io): `https://formspree.io/f/xxxxxxxx`).

Si la variable queda vacía, el formulario funciona en **modo demo** (valida y muestra el agradecimiento, pero no envía datos).

## Pendientes

- **Logo de FENAFUCH:** el footer usa un placeholder. Reemplázalo por el logo real en `src/components/TheFooter.vue` (bloque `.fena`).

## Estructura

- `src/App.vue` — composición de las secciones.
- `src/components/*.vue` — una sección por componente (nav, hero, manifiesto, concepto, ejes, quién es, comunidad, sumarse, footer).
- `src/data/ejes.ts` — datos de los cinco compromisos.
- `src/assets/image/` — fotografías de campaña.
- `src/style.css` — variables de color/tipografía y estilos base globales.
