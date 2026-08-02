// Contenido de la página "La universidad que viene".
// Fuente: "Pensar la universidad que viene · Trabajo digno y comunidad frente a
// la inteligencia artificial" (info/ultima revisión/universidad_que_viene(1).docx).

export interface Audiencia {
  actor: string
  pregunta: string
}

export interface Vision {
  numero: string
  titulo: string
  descripcion: string
  frase: string
}

export interface ItemLista {
  titulo: string
  detalle: string
}

// A quién le habla la propuesta: el cambio tecnológico golpea distinto a cada quien.
export const audiencias: Audiencia[] = [
  {
    actor: 'Estudiantes',
    pregunta: '¿Qué significa aprender y formar criterio cuando la IA responde casi cualquier pregunta?',
  },
  {
    actor: 'Académicos de planta',
    pregunta: 'Autoría, integridad y el sentido de la investigación en tiempos de producción asistida.',
  },
  {
    actor: 'Académicos y profesionales a honorarios',
    pregunta: 'Los más expuestos a que la IA se use como excusa para “necesitar menos gente”.',
  },
  {
    actor: 'Funcionarias y funcionarios',
    pregunta: 'Su función se transforma, y aportan una visión estratégica insustituible sobre cómo debe cambiar la universidad.',
  },
  {
    actor: 'Trabajadores subcontratados',
    pregunta: 'El eslabón más precario, donde la automatización puede profundizar la exclusión si nadie la gobierna.',
  },
  {
    actor: 'Autoridades',
    pregunta: 'Necesitan un marco democrático y legítimo para decidir, no soluciones técnicas impuestas desde fuera.',
  },
]

export const visiones: Vision[] = [
  {
    numero: '01',
    titulo: 'El trabajo que sostiene la universidad, frente a la máquina',
    descripcion:
      'Toda universidad se sostiene sobre trabajo: el intelectual, el profesional, el de gestión y el de servicios. Ese trabajo ya venía precarizándose, y la IA puede agravarlo o corregirlo según cómo se decida usarla. En una universidad pública, quienes trabajan no son un costo a optimizar, sino parte del patrimonio público que la sostiene.',
    frase:
      'Estamos demasiado acostumbrados a mirar la universidad como si fuera una empresa. — Fernando Atria',
  },
  {
    numero: '02',
    titulo: 'La comunidad que decide su futuro',
    descripcion:
      'Qué datos se usan, qué se automatiza y con qué reglas parecen decisiones técnicas, pero son profundamente políticas. Delegarlas a una oficina técnica o a un proveedor externo sería renunciar al autogobierno. La triestamentalidad no es completa si un estamento participa de forma decorativa: democracia universitaria es que esa voz pese, no que se escuche y se archive.',
    frase:
      'Participación real: la universidad que viene se piensa con toda la comunidad dentro, no en la puerta.',
  },
  {
    numero: '03',
    titulo: 'El Senado, el espacio para pensarla',
    descripcion:
      'Trabajo digno y comunidad que decide convergen en una propuesta: convertir el Senado en el lugar donde la Universidad de Chile piensa su futuro frente a la IA. No una oficina técnica, no un comité de expertos, no una consultora externa: el órgano triestamental y democrático donde toda la comunidad delibera.',
    frase:
      'El futuro de la universidad no se delega. Se piensa entre todos, desde el Senado.',
  },
]

// Los frentes que el Senado debe abrir: temas que hoy nadie decide democráticamente.
export const frentes: ItemLista[] = [
  {
    titulo: 'Docencia y aprendizaje',
    detalle: 'Qué significa enseñar y formar criterio cuando la IA responde casi todo; nuevas formas de evaluación.',
  },
  {
    titulo: 'Investigación e integridad',
    detalle: 'Autoría, propiedad intelectual y honestidad académica en la producción asistida por IA.',
  },
  {
    titulo: 'Trabajo universitario',
    detalle: 'Cómo se transforma el trabajo de funcionarios, honorarios y subcontratados, decidido con ellos y no sobre ellos.',
  },
  {
    titulo: 'Gobernanza de datos e infraestructura',
    detalle: 'Soberanía tecnológica de una universidad pública frente a proveedores privados.',
  },
  {
    titulo: 'Ética y servicio al país',
    detalle: 'Que la Universidad de Chile oriente el debate nacional sobre IA, en vez de seguirlo.',
  },
]

// Iniciativas concretas que la candidatura propone impulsar en el Senado.
export const iniciativas: string[] = [
  'Una política institucional de IA para docencia, investigación y gestión, construida democráticamente.',
  'Un programa permanente de formación en IA para toda la comunidad —incluidos funcionarios y subcontratados— como derecho, no como exigencia de productividad.',
  'Un Observatorio sobre IA y Educación Superior que informe la deliberación con evidencia.',
  'Principios de uso responsable de IA, que prohíban expresamente su empleo para vigilar o evaluar punitivamente el trabajo.',
  'Espacios deliberativos triestamentales permanentes sobre el futuro de la universidad.',
]
