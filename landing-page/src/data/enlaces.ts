/**
 * Enlaces de la campaña, centralizados para no repetir URLs en los
 * componentes: si el formulario o el programa cambian, se edita solo acá.
 */

/** Programa completo en PDF (vive en public/documents-pdf/). */
export const PROGRAMA_PDF_URL =
  '/documents-pdf/programa-myriam-barahona-senado-universitario.pdf'

/**
 * Formulario público de adhesión (Google Forms).
 * Se usa la ruta /viewform, no /preview: /preview solo carga para quien tiene
 * permiso de edición del formulario, así que rompería para las visitas.
 */
export const FORMULARIO_APOYO_URL =
  'https://docs.google.com/forms/d/1h0Y6qbDAnIBxo0MrGWz9LjQsMIz75zQYOM2cA0teaHY/viewform'
