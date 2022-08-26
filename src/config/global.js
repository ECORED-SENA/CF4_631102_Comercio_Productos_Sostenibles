export default {
  global: {
    componenteFormativo: 'Impacto ambiental y economía circular',
    descripcionCurso:
      'Hoy en día ser productivos, estar a la vanguardia y sostenerse en el mercado es tarea de todas las empresas, la sostenibilidad es un tema que no puede ser omitido; proteger el medio ambiente, disminuir las huellas, además de aprovechar al máximo la materia prima, para utilizarla y reutilizarla, harán que las empresas sean realmente eficaces y efectivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Impacto ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Consumo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Riesgos y medidas de mitigación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Huellas (ecológica, carbono, hídrica)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Criterios de sostenibilidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Elementos clave de sostenibilidad en los procesos de la organización ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ciclo de vida del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Etapas del ciclo de vida',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Beneficios del ciclo de vida',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Regla de las 3R (reciclar, reutilizar, reducir)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normatividad ambiental de productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Normativa para los recursos naturales',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Recursos genéticos y propiedad intelectual',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Permisos y licencias ambientales',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Manejo de residuos.',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Sustancias o materiales peligrosos.',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Economía circular',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Impacto ambiental',
      referencia:
        'Garmendia, S., A., Crespo S., C., Garmendia, S., L., y Salvador, A., A. (2005). Evaluación de impacto ambiental (cap. 3). Pearson Educación.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4384&pg=95&ed=',
    },
    {
      tema: 'Impacto ambiental',
      referencia: 'BSG Institute. (2020). Tipos de impacto ambiental.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sNdxt3-Ipgc',
    },
    {
      tema: 'Riesgos y medidas de mitigación',
      referencia:
        'Millán López, J. A. (2005). Guía ambiental para evitar, corregir y compensar los impactos de las acciones de reducción y prevención de riesgos en el nivel municipal. Ministerio de Ambiente Vivienda y Desarrollo Territorial.',
      tipo: 'Guía',
      descarga: '/downloads/Acciones_reduccion_prevencion_riesgos.pdf',
    },
    {
      tema: 'Huellas (ecológica, carbono, hídrica)',
      referencia:
        'Ambiental Uniforce. (2021). Cálculo de la huella ecológica - revisión de conceptos de huella hídrica y huella de carbono. ',
      tipo: 'Video',
      link: 'https://youtu.be/-udnl0a07dw',
    },
    {
      tema: 'Regla de las 3R (Reciclar, Reutilizar, Reducir)',
      referencia:
        'Eco House Global. (2020). 3R de la Ecología - Educación Ambiental Digital.',
      tipo: 'Video',
      link: 'https://youtu.be/rRCZzrMjiY0',
    },
    {
      tema: 'Regla de las 3R (Reciclar, Reutilizar, Reducir)',
      referencia: 'Acciona. (2020). ¿En qué consiste la economía circular?',
      tipo: 'Video',
      link: 'https://youtu.be/wc_65-yf6zU',
    },
  ],
  glosario: [
    {
      termino: 'Consumo',
      significado:
        'acto de comprar, obtener o apropiarse de las cosas que han sido destinadas para satisfacer algún tipo de necesidad o deseo, ya sea personal o colectivo.',
    },
    {
      termino: 'Huellas ecológicas',
      significado:
        'indicador utilizado para conocer el grado de impacto que genera la sociedad sobre el medio ambiente.',
    },
    {
      termino: 'Impacto Ambiental',
      significado:
        'toda alteración que afecte la calidad del medio ambiente, y que sea consecuencia de la actividad humana directa o indirecta.',
    },
    {
      termino: 'Reciclar',
      significado:
        'referido a la acción de volver a darle un uso a algo que no sirve o que su vida útil ha terminado.',
    },
    {
      termino: 'Reducir',
      significado:
        'es evitar el uso excesivo de materiales que no son reciclables, evitar caer en la compra de materiales desechables en cortos lapsos de tiempo, esto con el fin de eludir un gasto o uso de un material innecesario.',
    },
    {
      termino: 'Reutilizar',
      significado:
        'es darle una segunda vida o hasta tercera a un objeto, esto con el fin de reducir la compra de más productos.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'políticas que aplican las empresas y el estado, para cuidar el medio ambiente y preservar los recursos, haciendo uso responsable de los mismos, por medio de políticas verdes y buenas prácticas siguiendo la regla de las 3R.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camacho, D., C. (2013). Del consumismo al consumo sostenible. Punto de Vista IV(6), 111-124.',
      link:
        'https://journal.poligran.edu.co/index.php/puntodevista/article/view/405/382',
    },
    {
      referencia:
        'Casas, E., Gonzales, D., y Rodríguez. D. (2018). La economía circular: un modelo económico alternativo para un desarrollo sostenible. Universidad de La laguna.',
      link:
        'https://riull.ull.es/xmlui/bitstream/handle/915/11991/La%20economia%20circular%20un%20modelo%20economico%20alternativo%20para%20un%20desarrollo%20sostenible.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Encinas, M., M. D., Gómez de Balugera, L., y López de Alda, Z. (2001). Evaluación de impacto ambiental. Aspectos teóricos.. Addi.',
      link: '',
    },
    {
      referencia:
        'García, C., N. (1995). Consumidores y ciudadanos. Conflictos multiculturales de la globalización. Editorial Grijalbo.',
      link:
        'https://www.perio.unlp.edu.ar/catedras/hdelconocimiento/wp-content/uploads/sites/135/2020/05/garcia_canclini._el_consumo_sirve_para_pensar.pdf',
    },
    {
      referencia:
        'Garmendia, S., A., Salvador, A., A., Crespo, S., C., y Garmendia, L. (2005). Evaluación de impacto ambiental. Pearson Educación.',
      link:
        'https://www.auditorlider.com/wp-content/uploads/2019/07/Evaluacion-impacto-ambiental-Garmendia-PDF-1.pdf',
    },
    {
      referencia:
        'Lara, G., J. D. (2009). Consumo y consumismo. Algunos elementos trazan sobre estudiantes universitarios en México. Nómadas. Revista Crítica de Ciencias Sociales y Jurídicas, 21(1), 2-19.',
      link: 'https://www.redalyc.org/articulo.oa?id=18111521024',
    },
    {
      referencia:
        'Lovins, A., Lovins, H, Hawken, P., & Lovins H. (1999). Natural Capitalism: Creating the Next Industrial Revolution. Environment & Society Portal.',
      link:
        'https://www.environmentandsociety.org/mml/natural-capitalism-creating-next-industrial-revolution',
    },
    {
      referencia:
        'McDonough, W., & Braungart, M. (2002). Cradle to Cradle: Remaking the Way We Make Things. North Point.',
      link:
        'https://www.pdfdrive.com/cradle-to-cradle-remaking-the-way-we-make-things-e158757908.html',
    },
    {
      referencia:
        'Ortiz de Mendivil-Llano, E. (2010). El consumo sostenible como perspectiva innovadora. (Tesis de maestría). Universidad Internacional de Andalucía.',
      link:
        'http://biblioteca.utec.edu.sv/siab/virtual/elibros_internet/55728.pdf',
    },
    {
      referencia:
        'Sánchez, L., y Reyes, O. (2015). Medidas de adaptación y mitigación frente al cambio climático en América Latina y el Caribe. Comisión Económica para América Latina y el Caribe (Cepal).',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/39781/S1501265_es.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'Stahel, W. (2016). The Circular Economy. Nature',
      link: 'https://www.nature.com/articles/531435a',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección general',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Otero Cano',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Cauca',
      },
      {
        nombre: 'Giovanna Andrea Escobar Ospina',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
