/**
 * Enlaces del sitio, centralizados para no repetir URLs en los
 * componentes: si el formulario o el programa cambian, se edita solo acá.
 */

/** Programa completo en PDF (vive en public/documents-pdf/). */
/** Reporte «Recortes 2027 a la U. de Chile» en PDF (vive en public/documents-pdf/). */
export const REPORTE_RECORTES_PDF_URL = '/documents-pdf/reporte-recortes-2027-uchile.pdf'

export const PROGRAMA_PDF_URL =
  '/documents-pdf/programa-myriam-barahona-senado-universitario.pdf'

/**
 * Formulario público de adhesión (Google Forms).
 * Se usa la ruta /viewform, no /preview: /preview solo carga para quien tiene
 * permiso de edición del formulario, así que rompería para las visitas.
 */
export const FORMULARIO_APOYO_URL =
  'https://docs.google.com/forms/d/1h0Y6qbDAnIBxo0MrGWz9LjQsMIz75zQYOM2cA0teaHY/viewform'

/** Número de contacto, en formato E.164 sin símbolos. */
export const WHATSAPP_NUMERO = '56984923945'



/**
 * Documentos institucionales de la U. de Chile que respaldan la trayectoria de
 * Myriam en la FENAFUCH. Se usan las URL cortas uchile.cl/uXXXXXX porque son
 * los permalinks oficiales del portal (la página enlaza al PDF vigente).
 */

/** Nota de Rectoría sobre los avances del encasillamiento con la FENAFUCH (2026). */
export const UCHILE_ENCASILLAMIENTO_URL = 'https://uchile.cl/u241569'

/** Política Universitaria de Buenas Prácticas Laborales, aprobada el 13/01/2022. */
export const UCHILE_BUENAS_PRACTICAS_URL = 'https://uchile.cl/u183708'

/** Política Universitaria de Gestión y Desarrollo para la Carrera Funcionaria, 13/01/2022. */
export const UCHILE_CARRERA_FUNCIONARIA_URL = 'https://uchile.cl/u183707'

export interface RedSocial {
  /** Identifica el ícono a renderizar. */
  id: 'facebook' | 'instagram' | 'whatsapp'
  nombre: string
  /** Texto visible: el usuario debe reconocer la cuenta antes de hacer clic. */
  handle: string
  url: string
}

export const REDES: RedSocial[] = [
  {
    id: 'facebook',
    nombre: 'Facebook',
    handle: 'myriam.olga',
    url: 'https://www.facebook.com/myriam.olga',
  },
  {
    id: 'instagram',
    nombre: 'Instagram',
    handle: '@myriam.olga',
    url: 'https://www.instagram.com/myriam.olga',
  },
  {
    id: 'whatsapp',
    nombre: 'WhatsApp',
    handle: '+56 9 8492 3945',
    url: `https://wa.me/${WHATSAPP_NUMERO}`,
  },
]
