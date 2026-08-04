export interface Eje {
  numero: string
  titulo: string
  descripcion: string
}

// Cinco compromisos de la campaña. El eje 01 incorpora el contexto del
// Senado Universitario como órgano triestamental (ver senado-universitario-uchile.md).
export const ejes: Eje[] = [
  {
    numero: '01',
    titulo: 'Democracia universitaria real',
    descripcion:
      'Que la triestamentalidad sea una práctica efectiva de gobierno universitario. Impulsaremos que se complete la participación con voz y voto en todas las facultades y unidades administrativas.',
  },
  {
    numero: '02',
    titulo: 'Reconocimiento del trabajo universitario',
    descripcion:
      'Sin trabajadoras y trabajadores no hay docencia, investigación, extensión ni comunidad. Su trabajo es parte de la misión pública de la Universidad.',
  },
  {
    numero: '03',
    titulo: 'Carrera funcionaria, estabilidad y desarrollo',
    descripcion:
      'Condiciones laborales, trayectorias, encasillamiento, capacitación y movilidad interna entendidas como políticas universitarias.',
  },
  {
    numero: '04',
    titulo: 'Transparencia, presupuesto y prioridades',
    descripcion:
      'Que las prioridades institucionales se discutan con claridad y que el mundo trabajador tenga decisión informada sobre recursos y criterios.',
  },
  {
    numero: '05',
    titulo: 'Buen trato, cuidado y comunidad',
    descripcion:
      'Una Universidad que cuide a quienes trabajan en ella: salud mental, buenas prácticas laborales y bienestar cotidiano.',
  },
]
