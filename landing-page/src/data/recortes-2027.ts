export interface DocumentoRecortes {
  id: string
  // Etiqueta para las pestañas de escritorio
  pestana: string
  // Etiqueta corta para la barra inferior en móvil
  corta: string
  numero: string
  titulo: string
  // Archivo HTML dentro de public/analisis-presupuesto-2027/ (generado desde el análisis en context/)
  archivo: string
}

export interface FuentePresupuesto {
  titulo: string
  descripcion: string
  // Nombre del archivo dentro de public/documents-pdf/presupuesto/
  archivo: string
  peso: string
}

// Los dos documentos del análisis, en el orden en que se leen.
export const documentosRecortes: DocumentoRecortes[] = [
  {
    id: 'general',
    pestana: '1 · Datos generales',
    corta: 'Datos generales',
    numero: '1',
    titulo: 'Presupuesto 2027 vs Ley 2026 y lo que toca a la U. de Chile',
    archivo: '01-comparativo-general-y-uchile-2026-2027.html',
  },
  {
    id: 'donde-baja',
    pestana: '2 · Recortes U. de Chile',
    corta: 'Recortes U. de Chile',
    numero: '2',
    titulo: 'Las líneas de la U. de Chile, 2026 vs 2027',
    archivo: '02-uchile-comparativo-2026-2027.html',
  },
]

// Fuentes oficiales descargables desde el comparativo general.
// Se ofrece la copia de DIPRES del proyecto 2027 (3,5 MB) en vez del escaneo de la Cámara (64 MB): mismo texto.
export const fuentesPresupuesto: FuentePresupuesto[] = [
  {
    titulo: 'Ley de Presupuestos 2026',
    descripcion:
      'Ley N° 21.796, versión DIPRES adecuada a la sentencia del Tribunal Constitucional y a la Ley N° 21.806. Todas las partidas y glosas.',
    archivo: 'ley-presupuestos-2026-dipres.pdf',
    peso: 'PDF · 3,6 MB · 1.302 págs.',
  },
  {
    titulo: 'Proyecto de Ley de Presupuestos 2027',
    descripcion:
      'Mensaje N° 180 y articulado presentados al Congreso el 30 de septiembre de 2026 (copia publicada por DIPRES).',
    archivo: 'proyecto-ley-presupuestos-2027-mensaje-y-articulado-dipres.pdf',
    peso: 'PDF · 3,5 MB · 71 págs.',
  },
]

export const DIPRES_PROYECTO_2027_URL =
  'https://www.dipres.gob.cl/597/w3-multipropertyvalues-15168-38403.html'

export function recortesHref(doc: DocumentoRecortes): string {
  return `/analisis-presupuesto-2027/${doc.archivo}`
}

export function fuenteHref(fuente: FuentePresupuesto): string {
  return `/documents-pdf/presupuesto/${encodeURIComponent(fuente.archivo)}`
}
