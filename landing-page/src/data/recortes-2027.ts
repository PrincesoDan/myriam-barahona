export interface DocumentoRecortes {
  id: string
  // Etiqueta corta para la pestaña
  pestana: string
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

// Los tres documentos del análisis, en el orden en que se leen.
export const documentosRecortes: DocumentoRecortes[] = [
  {
    id: 'general',
    pestana: '1 · Comparativo general',
    titulo: 'Presupuesto 2027 vs Ley 2026',
    archivo: '01-comparativo-general-2026-2027.html',
  },
  {
    id: 'lineas-uchile',
    pestana: '2 · Lo que toca a la U. de Chile',
    titulo: 'Líneas del Proyecto 2027 que afectan a la Universidad',
    archivo: '02-partidas-2027-universidad-de-chile.html',
  },
  {
    id: 'donde-baja',
    pestana: '3 · ¿Dónde baja y dónde no?',
    titulo: 'Las líneas de la U. de Chile, 2026 vs 2027',
    archivo: '03-uchile-comparativo-2026-2027.html',
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
