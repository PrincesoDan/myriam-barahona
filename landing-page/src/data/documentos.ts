export interface Documento {
  titulo: string
  descripcion: string
  // Nombre del archivo dentro de public/documents-pdf/
  archivo: string
}

// Documentos oficiales de la Universidad descargables desde la página del Senado.
// Los PDF viven en landing-page/public/documents-pdf/
export const documentos: Documento[] = [
  {
    titulo: 'Boletín Elecciones Senado Universitario 2026',
    descripcion:
      'Boletín oficial de la elección: fechas de la primera vuelta (18 y 19 de agosto), instrucciones de votación en Participa UChile y el listado completo de candidaturas definitivas por estamento.',
    archivo: 'ELECCIONES SENADO UNIVERSITARIO_BOLETIN.pdf',
  },
  {
    titulo: 'Reglamento Interno del Senado Universitario',
    descripcion:
      'D.U. Exento N°0023096 (2007), con modificaciones hasta 2022. Regula el funcionamiento cotidiano del órgano: comisiones, votaciones y quórums.',
    archivo: 'Reglamento Interno Senado universitario_ACTUALIZADO 2022.pdf',
  },
  {
    titulo: 'Plan de Desarrollo Institucional 2017–2026',
    descripcion:
      'Aprobado por el Senado Universitario y dictado mediante D.U. N° 0031884/2018. Fija las estrategias, objetivos e indicadores de la Universidad: es el documento contra el cual se exige el cumplimiento de lo prometido.',
    // El nombre del archivo trae un error de tipeo en el año (2016 por 2026);
    // se mantiene tal cual para no romper el enlace al PDF ya publicado.
    archivo: 'plan-desarrollo-institucional-uchile-2017-2016.pdf',
  },
  {
    titulo: 'Estatuto de la Universidad de Chile',
    descripcion:
      'D.F.L. que fija el Estatuto de la U. de Chile. Define la función normativa del Senado (Art. 24) y la estructura de gobierno triestamental.',
    archivo: 'D.F.L.Estatuto_U._de_Chile.pdf',
  },
  {
    titulo: 'Política de Corresponsabilidad Social',
    descripcion:
      'Política universitaria de corresponsabilidad social en el cuidado. Ancla institucional del compromiso con el trabajo digno y los cuidados.',
    archivo: '4. Politica de Corresponsabilidad Social.pdf',
  },
]

// URL pública del PDF, con el nombre de archivo codificado para respetar espacios.
export function documentoHref(doc: Documento): string {
  return `/documents-pdf/${encodeURIComponent(doc.archivo)}`
}
