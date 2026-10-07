// Contenido de la página "Propuestas".
// Fuente: Programa Myriam Barahona Torres · Senado Universitario 2026–2030,
// SEGUNDA PARTE "La universidad que cuida y el trabajo digno" (nueve ejes).
// Archivo: info/ultima revisión/Programa_Myriam_Barahona_Torres_Senado_Universitario_2026-2030.docx.md
//
// Todos los ejes comparten la misma estructura porque comparten la misma lógica:
// existe un compromiso institucional escrito que todavía no se traduce en
// resultados y derechos efectivos.

// Los compromisos del Eje 9 vienen rotulados en el programa ("Gobernanza.",
// "Trabajo funcionario.", …); `etiqueta` conserva ese rótulo cuando existe.
export interface Compromiso {
  etiqueta?: string
  texto: string
}

export interface Eje {
  numero: string
  titulo: string
  // Bajada en cursiva que abre el eje en el programa.
  bajada: string
  // Situación actual verificable, un string por párrafo.
  situacion: string[]
  // Propuesta y posicionamiento.
  compromisos: Compromiso[]
  // Cita de cierre para uso público.
  frase: string
}

export const ejes: Eje[] = [
  {
    numero: '01',
    titulo: 'Participación real y democracia universitaria',
    bajada:
      'Más voz para quienes sostenemos la Universidad. La ampliación de la participación triestamental ha avanzado, pero aún no alcanza a los órganos superiores.',
    situacion: [
      'Entre 2024 y 2025 el Senado armonizó los reglamentos de facultades y de elecciones e incorporó el voto triestamental en los Consejos de Facultad, con una proporción de 50 % académicos, 25 % funcionarios y 25 % estudiantes. Este avance es real y reciente. Además, en agosto de 2025 se constituyó la Comisión para la Elaboración de una Política Integral de Fomento a la Participación de la Comunidad Universitaria, actualmente en desarrollo.',
      'Sin embargo, ese avance aún no alcanza a los órganos superiores. En el Consejo Universitario el estamento funcionario tiene solo derecho a voz mediante un delegado (Estatuto, Art. 22), y en el Senado ocupa 2 de 36 escaños. Ampliar esa representación requiere una reforma del Título II: iniciativa de un tercio, consulta vinculante obligatoria a la comunidad y tramitación ante la Presidencia de la República. Por ello corresponde plantearlo como un proceso de largo alcance y no como una promesa que pueda cerrarse en un solo período. A ello se suma la necesidad de revisar la gobernanza en otro tipo de unidades administrativas.',
    ],
    compromisos: [
      {
        texto:
          'Integrar la Comisión de Participación y promover que la política aborde explícitamente la subrepresentación del estamento funcionario en los órganos superiores, además de fortalecer la participación en los espacios de base.',
      },
      {
        texto:
          'Dar seguimiento y consolidar la implementación del voto triestamental en las facultades y unidades administrativas que aún no lo aplican plenamente, mediante requerimiento de información a Rectoría (Art. 25 h).',
      },
      {
        texto:
          'Establecer una rendición de cuentas permanente del ejercicio del cargo, mediante un informe público semestral al gremio con las votaciones y sus fundamentos, utilizando el derecho a dejar constancia en acta (Art. 37) y respetando el deber de reserva que el Reglamento del Senado establece para las materias aún no resueltas en plenaria.',
      },
      {
        texto:
          'Abrir y sostener el debate de reforma estatutaria sobre la composición del Senado y sobre el derecho a voz y voto del estamento en el Consejo Universitario.',
      },
    ],
    frase:
      'Ya avanzamos en el voto triestamental de los Consejos de Facultad. Sin embargo, en el Senado seguimos siendo 2 de 36 y en el Consejo Universitario aún no tenemos derecho a voto. Sostenemos diariamente el funcionamiento de esta Universidad y nuestra capacidad de decisión sigue siendo mínima. Vamos a abrir este debate y a rendir cuenta de cada voto.',
  },
  {
    numero: '02',
    titulo: 'La planta es un derecho: estabilidad laboral',
    bajada:
      'La Universidad asumió hace casi diez años el compromiso de avanzar en la superación de la precarización del empleo. A la fecha no se ha informado públicamente cuánto se ha avanzado.',
    situacion: [
      'El PDI 2017–2026, en su Estrategia XI, Objetivo 5, se propone avanzar en la eliminación de la precarización del empleo en la Universidad, con indicadores explícitos sobre personas contratadas vía subcontrato y porcentaje de trabajadores a honorarios y a contrata sobre el total. El diagnóstico del propio Plan reconoce la desregulación en la externalización mediante subcontratación y honorarios, citando estudios de SITRAUCH y de la Mesa de Condiciones Laborales. A ello se suma el Estatuto Art. 59, que manda dictar un Reglamento General sobre derechos, deberes y carrera funcionaria.',
      'El compromiso y sus indicadores existen desde hace casi una década, pero aún no hay meta numérica, plazo definido ni informe público de cumplimiento. Después de diez años, corresponde conocer los resultados y establecer las acciones pendientes.',
    ],
    compromisos: [
      {
        texto:
          'Solicitar formalmente a Rectoría el informe de cumplimiento de los indicadores de precarización del PDI 2017–2026, desagregado por unidad académica (Art. 25 h). No requiere quórum especial y puede pedirse durante el primer mes de mandato.',
      },
      {
        texto:
          'Promover que en el PDI 2026–2036 el objetivo pase de enunciado general a meta cuantificable, con plazo definido y línea base pública.',
      },
      {
        texto:
          'Impulsar la actualización del Reglamento de Carrera Funcionaria previsto en el Art. 59, con criterios objetivos y plazos de encasillamiento, dejando la ejecución exigible a Rectoría.',
      },
    ],
    frase:
      'La Universidad asumió hace diez años el compromiso de avanzar contra la precarización, pero aún no conocemos sus resultados. Solicitaremos una rendición de cuentas clara e impulsaremos cifras, metas y plazos en el nuevo Plan de Desarrollo.',
  },
  {
    numero: '03',
    titulo: 'Funcionarias y funcionarios universitarios',
    bajada:
      'La forma en que se nos nombra también expresa cómo se reconoce nuestro trabajo. El Estatuto ya contiene la denominación adecuada; falta que la Universidad la utilice de manera coherente.',
    situacion: [
      'El Estatuto es ambiguo consigo mismo. El Art. 12 habla de «personal de colaboración», pero el Art. 15 dice literalmente que son funcionarios quienes constituyen el personal de colaboración. El Art. 59 vuelve a usar «funcionarios», y el propio PDI emplea sistemáticamente la expresión «funcionarios no académicos».',
      'La palabra ya existe en el Estatuto: lo que falta es que la nomenclatura administrativa cotidiana deje de emplear una denominación que no refleja plenamente nuestro carácter funcionario. Un cambio de fondo en el Título I sí exigiría iniciativa de un tercio, consulta vinculante y tramitación presidencial; un acuerdo sobre la nomenclatura oficial, en cambio, no requiere reforma estatutaria.',
    ],
    compromisos: [
      {
        texto:
          'Proponer un acuerdo del Senado que fije «funcionarias y funcionarios universitarios» como denominación oficial en reglamentos, decretos y comunicaciones institucionales, invocando el Art. 15 del propio Estatuto. No requiere reforma estatutaria.',
      },
      {
        texto:
          'Promover la armonización completa del texto estatutario como un objetivo de proceso, señalando con claridad que depende de una consulta vinculante y de la tramitación ante la Presidencia de la República.',
      },
    ],
    frase:
      'El Estatuto ya nos reconoce como funcionarios. Falta que la Universidad utilice esa denominación de manera coherente.',
  },
  {
    numero: '04',
    titulo: 'Vivienda y patrimonio al servicio de la comunidad',
    bajada:
      'La Universidad cuenta con patrimonio inmobiliario y con precedentes propios de haberlo destinado al bienestar de su comunidad. Todavía no dispone, en cambio, de un instrumento que lo vincule con las necesidades habitacionales de quienes trabajan en ella.',
    situacion: [
      'Este es el eje con menor desarrollo documental: el PDI no menciona la vivienda. Existen, sin embargo, dos antecedentes institucionales concretos. El primero es la Política de Patrimonio Institucional, ya aprobada y decretada por la Universidad y cuyo lanzamiento se realiza en agosto de 2026, que define criterios para la gestión de inmuebles y bienes patrimoniales: su implementación abre un espacio para que el bienestar de la comunidad sea considerado entre los usos posibles del patrimonio. El segundo es el Convenio JUNJI–Universidad de Chile de 2015, en el que la Universidad utilizó los Arts. 11 y 55 del Estatuto para poner terrenos a disposición, mediante usufructo o comodato, de una institución que financia y construye en beneficio directo de la comunidad. Es un modelo que puede estudiarse y adaptarse, respaldado por un precedente de la propia Universidad.',
      'La brecha institucional es clara: no existe todavía un instrumento que vincule el patrimonio inmobiliario de la Universidad con el bienestar habitacional de quienes trabajan en ella. No se trata de una obligación estatutaria, sino de una posibilidad que la Universidad puede concretar cuando existe voluntad institucional para hacerlo.',
    ],
    compromisos: [
      {
        texto:
          'Respaldar en el Senado el avance de los convenios de vivienda para funcionarias y funcionarios ya suscritos entre Rectoría y FENAFUCH.',
      },
      {
        texto:
          'Dar seguimiento a la implementación de la Política de Patrimonio Institucional recientemente aprobada, para que sus criterios de gestión consideren de manera explícita el bienestar de la comunidad universitaria.',
      },
      {
        texto: 'Incorporar un objetivo de habitabilidad y bienestar en el PDI 2026–2036.',
      },
      {
        texto:
          'Utilizar las observaciones fundadas al presupuesto anual (Art. 25 c) como mecanismo permanente de seguimiento y solicitar a Rectoría un informe sobre el estado de los convenios de vivienda para funcionarias y funcionarios, atribución que no requiere quórum especial (Art. 25 h).',
      },
    ],
    frase:
      'La Universidad ya destinó terrenos para salas cuna mediante el convenio con la JUNJI. Ese precedente demuestra que también puede explorar alternativas habitacionales para sus trabajadoras y trabajadores. Defenderemos lo alcanzado y trabajaremos para que la vivienda deje de ser una excepción y se convierta en una política.',
  },
  {
    numero: '05',
    titulo: 'Igual función, igual remuneración',
    bajada:
      'La herramienta ya existe: fue aprobada por el Senado en 2017, formalizada institucionalmente el 6 de noviembre de 2020 y tomada de razón por la Contraloría General de la República el 1 de diciembre de ese mismo año. El desafío es aplicarla, transparentar sus resultados y reducir la discrecionalidad.',
    situacion: [
      'El Reglamento de Remuneraciones del Personal de la Universidad de Chile fue aprobado en su totalidad por el Senado Universitario en la Sesión Plenaria N° 457, del 3 de agosto de 2017. Y el PDI, Estrategia XI Objetivo 2, se compromete a avanzar en la equidad de remuneraciones a través de ese mismo reglamento, con un indicador de monto promedio desagregado por estamento, categoría funcionaria y tipo de contrato.',
      'El reglamento existe desde hace nueve años. El diagnóstico del propio PDI reconoce desigualdad y discrecionalidad en las remuneraciones, así como brechas salariales por sexo. La herramienta está disponible; lo pendiente es aplicarla plenamente y publicar sus resultados.',
    ],
    compromisos: [
      {
        texto:
          'Solicitar y publicar el reporte anual del indicador de remuneraciones ya comprometido en el PDI, con la desagregación que el propio Plan define.',
      },
      {
        texto:
          'A partir de esa línea base, impulsar la revisión del Reglamento de Remuneraciones para reducir la discrecionalidad y consagrar el principio de igual función, igual remuneración como norma efectiva y no solo como aspiración. Este punto requiere el apoyo de un tercio del Senado para abrir la discusión.',
      },
      {
        texto:
          'Articular esta propuesta con el eje de financiamiento, considerando que el propio PDI reconoce que la distribución histórica del Fondo General genera desigualdad de remuneraciones entre facultades y unidades administrativas.',
      },
    ],
    frase:
      'El reglamento de remuneraciones aprobado por el Senado en 2017 es un avance. Lo que corresponde ahora es aplicarlo, publicar sus resultados y reducir la discrecionalidad.',
  },
  {
    numero: '06',
    titulo: 'Corresponsabilidad para toda la comunidad',
    bajada:
      'En 2017 la Universidad aprobó una política de corresponsabilidad dirigida a los tres estamentos. En 2018, sin embargo, dictó un reglamento aplicable solo a uno de ellos.',
    situacion: [
      'La Política de Corresponsabilidad Social en la Conciliación de las Responsabilidades Familiares y las Actividades Universitarias (2017) establece que la Universidad debe permitir que académicas y académicos, el «personal de colaboración» —según la denominación que emplea el propio texto— y estudiantes con responsabilidades familiares compatibilicen sus roles sin afectar el desarrollo de sus carreras y funciones. La política es explícita: comprende a los tres estamentos.',
      'Sin embargo, el reglamento operativo dictado mediante Decreto Universitario Exento en enero de 2018 se titula «Reglamento de Corresponsabilidad Social en el Cuidado de Hijas e Hijos de Estudiantes», y su Art. 2 limita los beneficios exclusivamente al estamento estudiantil. La política reconoció a los tres estamentos, pero el reglamento solo se implementó para uno. El propio documento identifica esta dificultad al constatar que, ante la ausencia de mecanismos institucionales, las unidades desarrollan estrategias sujetas al criterio de cada jefatura, lo que produce respuestas distintas frente a situaciones equivalentes.',
    ],
    compromisos: [
      {
        texto:
          'Presentar un proyecto de acuerdo reglamentario para un Reglamento de Corresponsabilidad Social para funcionarias y funcionarios universitarios, tomando como referencia el reglamento estudiantil ya vigente.',
      },
      {
        texto:
          'Defender su viabilidad: desde el punto de vista técnico, existe un modelo escrito y aplicado desde hace ocho años; desde el punto de vista institucional, resulta difícil justificar un trato distinto entre estamentos comprendidos en una misma política; y su implementación no requiere reforma estatutaria ni recursos nuevos de gran magnitud.',
      },
      {
        texto:
          'Incorporar expresamente permisos por controles médicos, cuidado de hijas e hijos enfermos, flexibilidad horaria y cuidado de familiares dependientes. Esta última medida ya fue anunciada como Línea de Acción N° 5 de la política de 2017 y aún no ha sido implementada.',
      },
    ],
    frase:
      'Ocho años después, muchas funcionarias y funcionarios todavía deben gestionar estos permisos caso a caso con su jefatura. Necesitamos un reglamento claro, común y aplicable a todo el estamento.',
  },
  {
    numero: '07',
    titulo: 'Salud mental y condiciones de trabajo',
    bajada:
      'La Política de Bienestar y Salud Mental se votará durante este período. Es una oportunidad concreta para incorporar aquello que hoy no está suficientemente considerado.',
    situacion: [
      'La Comisión de Bienestar y Salud Mental ya elaboró un borrador de la Política de Bienestar y Salud Mental de la Comunidad Universitaria, que incorpora criterios de acompañamiento, prevención y promoción del bienestar. El documento se encuentra en etapa de consulta con las unidades académicas y será presentado próximamente al Senado Universitario.',
      'El borrador no incorpora suficientemente las condiciones laborales de las funcionarias y los funcionarios como un factor determinante de la salud mental. Además, una política que no cuente con una partida presupuestaria asignada corre el riesgo de quedar limitada a una declaración de buenas intenciones.',
    ],
    compromisos: [
      {
        texto:
          'Incidir en el contenido de la política antes de su votación, considerando que el borrador ya existe, para que incorpore expresamente la carga laboral, la precariedad contractual y el trato de las jefaturas como factores que inciden en la salud mental del estamento.',
      },
      {
        texto:
          'Respaldar la política junto con la exigencia de un financiamiento claro, utilizando la ratificación presupuestaria (Art. 25 c) para promover una partida asignada y verificable.',
      },
      {
        texto:
          'Articular esta política con el Reglamento de Corresponsabilidad y con la Defensoría de la Comunidad Universitaria como instancia de orientación y reclamo.',
      },
      {
        texto:
          'Reevaluar el convenio con la ACHS para que considere de manera explícita los problemas de salud mental.',
      },
    ],
    frase:
      'La salud mental de las funcionarias y los funcionarios también depende de la carga de trabajo y del trato que reciben. Una política sin recursos suficientes corre el riesgo de no producir los cambios que la comunidad necesita.',
  },
  {
    numero: '08',
    titulo: 'Financiamiento equitativo entre facultades',
    bajada:
      'Que las oportunidades de desarrollo no dependan de la facultad a la que se pertenece. Existen dos décadas de diagnósticos coincidentes, pero aún faltan criterios objetivos de distribución.',
    situacion: [
      'El PDI 2017–2026, en su Estrategia III, Objetivo 3, propone mejorar los criterios de distribución presupuestaria para impulsar la revitalización de las unidades menos desarrolladas y promover la equidad dentro de la Universidad. El diagnóstico institucional es contundente: el Fondo General se ha distribuido con base en criterios históricos que han contribuido a mantener asimetrías y desigualdades entre las unidades académicas, visibles en infraestructura, equipamiento, remuneraciones y condiciones de trabajo. El propio Plan reconoce que este diagnóstico ya estaba presente en el PDI de 2006 y describe el resultado como un archipiélago de facultades e institutos.',
      'Para este programa, el punto central es que el propio PDI vincula esa inercia presupuestaria con la desigualdad de remuneraciones. No se trata de dos problemas separados, sino de dimensiones de una misma inequidad institucional.',
    ],
    compromisos: [
      {
        texto:
          'Exigir que el PDI 2026–2036 establezca criterios objetivos, transparentes y públicos para la distribución del Fondo General, superando progresivamente el criterio histórico.',
      },
      {
        texto:
          'Profundizar la práctica impulsada por la Comisión de Presupuesto y Gestión de reunirse con las unidades —15 de 18 en el último período— para incorporar la voz funcionaria en estas conversaciones.',
      },
      {
        texto:
          'Ejercer la ratificación presupuestaria anual con observaciones fundadas (Art. 25 c) como un mecanismo permanente de incidencia y no como un trámite formal.',
      },
    ],
    frase:
      'El propio Plan de Desarrollo reconoce que el presupuesto se ha distribuido por inercia histórica y que ello genera desigualdades de remuneraciones entre facultades. Lo señaló en 2006 y volvió a reconocerlo en 2017. En el nuevo período debemos avanzar con criterios objetivos, plazos definidos y seguimiento público.',
  },
  {
    numero: '09',
    titulo: 'Inteligencia artificial, trabajo y gobernanza',
    bajada:
      'La Universidad ya ha comenzado a regular el uso de la inteligencia artificial, pero lo ha hecho principalmente fuera del Senado Universitario. Además, los instrumentos existentes se concentran en la integridad académica y no abordan suficientemente su dimensión laboral.',
    situacion: [
      'Los lineamientos institucionales sobre el uso transparente de la IA en tesis y trabajos de titulación fueron emitidos por las Vicerrectorías de Asuntos Académicos y de Tecnologías de la Información. A ello se suma un segundo documento sobre la integración de la IA generativa en los procesos formativos, actualmente en desarrollo. En paralelo, distintas facultades han avanzado con criterios propios: Agronomía dictó lineamientos en junio de 2025; la Facultad de Medicina publicó una guía ética de IA en salud, y revistas de Arquitectura y Urbanismo establecieron reglas editoriales específicas.',
      'En otras palabras, existen orientaciones sobre IA en la Universidad de Chile, pero todavía no hay una Política Universitaria de Inteligencia Artificial. Hay decretos de vicerrectorías y reglas de facultades dispersas, sin una deliberación triestamental común. Esto plantea una tensión con el Art. 25 a) del Estatuto, que entrega al Senado la aprobación de toda norma general relativa a políticas y planes de desarrollo. Hasta ahora, el Senado solo ha realizado un foro sobre la materia.',
      'Existe, además, un segundo vacío especialmente relevante para este programa: los instrumentos vigentes regulan tesis, docencia, publicaciones y actividades estudiantiles, pero no abordan qué ocurre con el trabajo administrativo, técnico y auxiliar cuando se introducen procesos de automatización. El estamento que probablemente sentirá primero sus efectos aún no aparece en estos documentos.',
    ],
    compromisos: [
      {
        etiqueta: 'Gobernanza',
        texto:
          'Promover una Política Universitaria de Inteligencia Artificial aprobada por el Senado y construida mediante un proceso participativo: comisión, diagnóstico, consulta a las unidades y votación en el plenario. Esta iniciativa requiere el respaldo de un tercio de sus integrantes (Regl. Art. 27 b), por lo que se plantea como un compromiso de trabajo colectivo y no como una promesa individual.',
      },
      {
        etiqueta: 'Trabajo funcionario',
        texto:
          'Proponer que ningún sistema automatizado que modifique sustantivamente las funciones del estamento funcionario sea implementado sin un informe previo de impacto laboral, elaborado con participación gremial y presentado al Senado.',
      },
      {
        etiqueta: 'Derecho a la reconversión',
        texto:
          'Actualizar el compromiso de capacitación del PDI (Estrategia XI, Objetivo 4) para incorporar expresamente formación en herramientas de IA, financiada institucionalmente y realizada dentro de la jornada laboral, sin trasladar esa responsabilidad al esfuerzo personal fuera del horario de trabajo.',
      },
      {
        etiqueta: 'Protección del empleo',
        texto:
          'Establecer en la Política de IA que las mejoras de productividad derivadas de la automatización no pueden utilizarse para justificar la reducción de planta ni la sustitución de funciones permanentes por contrataciones a honorarios.',
      },
      {
        etiqueta: 'Decisiones algorítmicas sobre personas',
        texto:
          'Consagrar tres garantías mínimas —transparencia, revisión humana y una vía de reclamo ante la Defensoría— e incidir en el Reglamento de la Defensoría mientras se encuentra en su etapa final de revisión. Este principio cuenta con un antecedente institucional: en 2017, la Política de Corresponsabilidad reconoció que un criterio de medición aparentemente neutral puede reproducir desigualdades y que su corrección requiere una respuesta normativa.',
      },
      {
        etiqueta: 'Soberanía de datos',
        texto:
          'Promover que la ratificación anual del presupuesto haga visible el gasto en licencias y servicios de IA, y que la Política de Patrimonio reconozca los datos institucionales como parte del patrimonio de la Universidad.',
      },
      {
        etiqueta: 'Voz pública',
        texto:
          'Proponer que el Senado remita al Congreso un informe institucional sobre el proyecto de ley marco de inteligencia artificial, con énfasis en el trabajo, la educación pública y la protección de datos, siguiendo el precedente del informe sobre el anteproyecto constitucional enviado en 2023.',
      },
    ],
    frase:
      'Se nos dirá que la inteligencia artificial puede hacer más eficiente a la Universidad, y es posible que así sea. Pero debemos preguntarnos quién asume los costos de esa eficiencia. Si recaen sobre las funcionarias y los funcionarios, no puede considerarse un avance justo. Queremos capacitación, garantías y reconversión, no reemplazo.',
  },
]
