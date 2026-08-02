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

Las adhesiones se recogen en un **Google Form** externo; el sitio no procesa ni
almacena datos. La URL vive en un solo lugar:

- `src/data/enlaces.ts` → `FORMULARIO_APOYO_URL`

Todos los CTA de apoyo (nav desktop y móvil, hero, ejes, sección "quién es",
footer, la tarjeta de `SumarseSection.vue` y los CTA de las páginas internas)
apuntan a esa constante y abren el formulario en una pestaña nueva. Para cambiar
de formulario basta editar esa línea.

> Usa la ruta `/viewform` del formulario, no `/preview`: `/preview` solo carga
> para quien tiene permiso de edición.

## Marca e imágenes

El logo de campaña (`public/logo-myriam.png`, wordmark sobre fondo navy) se usa en dos versiones derivadas, generadas con ImageMagick para fundirse limpio sobre las superficies navy:

- `public/logo-myriam-transparent.png` — logo completo (incluye el script *"Vamos juntos al Senado"*) con el fondo navy removido. Se usa en el **footer** (`TheFooter.vue`).
- `public/logo-myriam-nav.png` — recorte solo del wordmark "Myriam Barahona", más legible a la altura de la barra. Se usa en el **nav** (`TheNav.vue`).

El **hero** (`HeroSection.vue`) es un banner full-width con `public/foto-campana-hero.jpg` de fondo (versión optimizada de `foto-campaña-horizontal.jpg`, ~330 KB) y un degradado navy que oscurece la izquierda para el texto y la base para la transición a la franja de datos.

> Para regenerar los assets derivados desde los originales:
> ```bash
> convert "public/foto-campaña-horizontal.jpg" -auto-orient -resize 2000x -quality 82 -strip public/foto-campana-hero.jpg
> convert public/logo-myriam.png -fuzz 18% -transparent "srgb(17,35,68)" -trim +repage public/logo-myriam-transparent.png
> convert public/logo-myriam-transparent.png -crop 1279x520+0+300 +repage -trim +repage public/logo-myriam-nav.png
> ```

## Pendientes

- **Logo de FENAFUCH:** el footer usa un placeholder. Reemplázalo por el logo real en `src/components/TheFooter.vue` (bloque `.fena`).

## Estructura

- `src/App.vue` — composición de las secciones.
- `src/components/*.vue` — una sección por componente (nav, hero, manifiesto, concepto, ejes, quién es, comunidad, sumarse, footer).
- `src/data/ejes.ts` — datos de los cinco compromisos.
- `src/assets/image/` — fotografías de campaña usadas dentro de los componentes.
- `public/` — assets referenciados por ruta absoluta: logo de campaña (y sus versiones para nav/footer) y `foto-campana-hero.jpg` del hero.
- `src/style.css` — variables de color/tipografía y estilos base globales.
