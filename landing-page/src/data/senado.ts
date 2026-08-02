// Contenido de la página "¿Qué es el Senado?".
// Fuente principal: Programa Myriam Barahona Torres · Senado Universitario
// 2026–2030, PRIMERA PARTE "El Senado Universitario" (qué es, cómo funciona,
// qué puede hacer y qué no).
// Archivo: info/ultima revisión/Programa_Myriam_Barahona_Torres_Senado_Universitario_2026-2030.docx.md
// La línea de tiempo proviene de info/senado-universitario-uchile.md.

export interface Composicion {
  estamento: string
  escanos: string
  mandato: string
  // Marca la fila del estamento que representa esta candidatura.
  destacado?: boolean
}

export interface BloqueFuncionamiento {
  titulo: string
  parrafos: string[]
}

export interface Herramienta {
  palanca: string
  base: string
  uso: string
}

// Composición del Senado: 36 miembros, presididos por el Rector o Rectora.
export const composicion: Composicion[] = [
  { estamento: 'Académicas y académicos', escanos: '27', mandato: '4 años, reelegible una vez' },
  { estamento: 'Estudiantes', escanos: '7', mandato: '2 años, reelegible una vez' },
  {
    estamento: 'Funcionarias y funcionarios',
    escanos: '2',
    mandato: '4 años, reelegible una vez',
    destacado: true,
  },
]

// Cómo funciona el Senado en la práctica (Reglamento Interno).
export const funcionamiento: BloqueFuncionamiento[] = [
  {
    titulo: 'La Mesa',
    parrafos: [
      'La integran el Rector o Rectora, una Vicepresidencia, una Secretaría que actúa como ministro de fe y tres senadores colaboradores, entre quienes debe haber un representante del estamento estudiantil y otro del estamento funcionario (Art. 4). Permanecen un año en sus funciones y pueden ser reelegidos.',
      'La Mesa elabora la tabla de cada sesión (Art. 23); por ello, incidir en su composición permite participar activamente en la definición de qué temas se discuten y cuándo. Se trata de una función estratégica, no meramente protocolar.',
    ],
  },
  {
    titulo: 'Las sesiones',
    parrafos: [
      'Las sesiones ordinarias se realizan al menos semanalmente, con citación y tabla adjunta enviadas con 48 horas de anticipación (Arts. 19 y 20). Las sesiones extraordinarias pueden convocarse mediante requerimiento escrito de un tercio de los integrantes (Art. 21), lo que constituye una herramienta relevante para una minoría organizada.',
      'Las sesiones son públicas para la comunidad universitaria (Art. 16) y cualquier integrante de la comunidad puede realizar presentaciones escritas ante la Mesa y, excepcionalmente, exponer en el plenario (Art. 17). Esta es una vía directa para que las organizaciones gremiales hagan llegar sus planteamientos al Senado.',
    ],
  },
  {
    titulo: 'Las comisiones',
    parrafos: [
      'Gran parte del trabajo del Senado se desarrolla en comisiones (Arts. 40 a 45). Todas las senadoras y todos los senadores deben integrar al menos una comisión permanente.',
      'Para este programa son especialmente relevantes las comisiones de Presupuesto y Gestión (remuneraciones y distribución del Fondo General), Desarrollo Institucional (que conduce el PDI 2026–2036) y Docencia e Investigación. A ellas se suman comisiones transitorias actualmente activas y de alto interés: Bienestar y Salud Mental; Estructuras y Unidades Académicas, donde se elaboró la Política de Patrimonio; y la Comisión para una Política Integral de Fomento a la Participación, constituida en agosto de 2025.',
    ],
  },
  {
    titulo: 'Cómo se aprueban las propuestas',
    parrafos: [
      'La iniciativa corresponde al Rector o Rectora y a las senadoras y senadores (Art. 26). Las materias de mayor alcance —reglamentos estatutarios, normas generales sobre políticas y planes de desarrollo, reformas del Estatuto y consultas a la comunidad— requieren la iniciativa de al menos un tercio de los integrantes (Art. 27).',
      'Para los demás acuerdos basta la iniciativa de una senadora o un senador con el apoyo de otros cinco (Art. 28): es la vía de entrada más accesible y corresponde utilizarla desde el inicio del mandato. Los acuerdos adquieren carácter obligatorio cuando Rectoría dicta el decreto respectivo, dentro de quince días hábiles (Art. 9).',
    ],
  },
]

// Distinguir las atribuciones con precisión permite un programa responsable y
// comprometido con resultados posibles.
export const siPuede: string[] = [
  'Aprobar y modificar reglamentos universitarios',
  'Fijar políticas y planes de desarrollo (PDI)',
  'Ratificar el presupuesto y formular observaciones fundadas',
  'Requerir información y cuentas a las autoridades ejecutivas',
  'Convocar consultas vinculantes a la comunidad (2/3)',
  'Pronunciarse públicamente sobre materias universitarias',
]

export const noPuede: string[] = [
  'Ejecutar: contratar, encasillar, construir, pagar',
  'Nombrar o remover personal individualmente',
  'Aumentar el presupuesto (expresamente prohibido, Art. 25 c)',
  'Modificar el Estatuto por sí solo (requiere trámite presidencial)',
  'Reemplazar la negociación gremial con Rectoría',
  'Dictar leyes',
]

// Palancas concretas que una senadora puede accionar desde el cargo.
export const herramientas: Herramienta[] = [
  {
    palanca: 'Acuerdo reglamentario',
    base: 'Estatuto Art. 25 a) · Regl. Art. 25',
    uso: 'Crear o modificar un reglamento',
  },
  {
    palanca: 'Acuerdo genérico',
    base: 'Regl. Arts. 9 y 25',
    uso: 'Emitir un pronunciamiento o criterio institucional',
  },
  {
    palanca: 'Observación al presupuesto',
    base: 'Estatuto Art. 25 c)',
    uso: 'Exigibilidad anual y recurrente',
  },
  {
    palanca: 'Requerimiento de información',
    base: 'Estatuto Art. 25 h)',
    uso: 'Solicitar rendición de cuentas del PDI. Sin quórum especial',
  },
  {
    palanca: 'Consulta vinculante',
    base: 'Estatuto Art. 25 i)',
    uso: 'Someter una materia a toda la comunidad (2/3)',
  },
  {
    palanca: 'Sesión extraordinaria',
    base: 'Regl. Art. 21',
    uso: 'Promover la discusión de un tema con 1/3 de firmas',
  },
  {
    palanca: 'Integración de comisiones',
    base: 'Regl. Arts. 40–45',
    uso: 'Incidir en el texto antes del plenario',
  },
]

// Hitos de origen e historia del Senado.
export const historia: { anio: string; hecho: string }[] = [
  {
    anio: '1997',
    hecho:
      'Estudiantes y académicos exigen nuevos estatutos para reemplazar la normativa heredada de la dictadura.',
  },
  {
    anio: '2006',
    hecho:
      'Se promulga el nuevo Estatuto. Primeras elecciones el 15 de junio y primera sesión el 18 de julio.',
  },
  {
    anio: 'Hoy',
    hecho:
      'Funciona ininterrumpidamente como uno de los tres organismos superiores, junto al Rector y el Consejo Universitario.',
  },
]
