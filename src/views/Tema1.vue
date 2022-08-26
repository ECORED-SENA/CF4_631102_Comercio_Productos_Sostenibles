<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Impacto ambiental

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-8(data-aos="fade")
        p El rápido crecimiento de las empresas y el mercado cada día más globalizado hacen del mundo un lugar exigente y altamente competitivo para las compañías, la primera que llegue a un sector de mercado, la que fabrique el producto más innovador, la que pueda llegar a zonas recónditas, siempre las empresas buscando un factor diferencial en cuanto a producto o servicio ofrecido; pero, ¿qué pasa en medio del proceso?

        p Empresas del sector de la industria de la moda, con tendencias de <em>fast fashion</em>, se han vuelto grandes contaminadores del medio ambiente, dado que para el manejo de los desechos y residuos y muchas veces por la velocidad en la que el mercado les demanda, se olvidan de las políticas verdes que deben seguir.

        p.mb-0 Siempre que se hable de producción, de crear un producto para satisfacer una necesidad o de ofrecer un servicio, intrínsecamente se puede hablar del impacto ambiental que genera directa o indirectamente, ya sea por extracción de materias primas, procesamiento de estas o al brindar un servicio de puerta a puerta, donde el medio de transporte genera un tipo de impacto.
      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")

    p(data-aos="fade").mb-5 Hoy en día los gobiernos buscan mitigar estos impactos ambientales con beneficios tributarios, estrategias verdes, fomentando los medios con cero emisiones, con la construcción de ciclovías, entre otras acciones que se contemplan en los planes de desarrollo de cada departamento o país, y no solo se queda allí, cada empresa tiene políticas, formas en que enfrentan la relación de sostenibilidad contra producción, como llegar a ser altamente productivos, eficientes minimizando costos, y obteniendo el mayor beneficio posible.

    .row(data-aos="zoom-in").justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.bloq--pink.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_02.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Si se habla de impacto ambiental, hace referencia a toda alteración que afecte la calidad del medio ambiente, y que sea consecuencia de la actividad humana directa o indirecta. El impacto ambiental debe ser valorado por expertos para determinar si el impacto es positivo o negativo y en qué medida.

    p(data-aos="fade") Para este caso, la prioridad se dará en los impactos ambientales negativos; partiendo de esta premisa algunas de las causas de estos impactos son:

    .row.justify-content-center.mb-5
      .col-lg-5
        .crd.crd--topAvatar.purple.hg-100.p-4(data-aos="flip-left")
          figure.mb-2
            img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt").img125.m-auto
          h5.text-center Las actividades económicas e industriales
          p.mb-0 El uso de tecnologías avanzadas y nuevos procesos de producción involucran cada vez más la transformación de recursos naturales, comprometiendo las especies tanto animales como vegetales. Las principales acciones industriales que impactan el medio ambiente son la sobreexplotación de los recursos, la ocupación y la contaminación. Los sectores industriales más contaminantes son los de producción eléctrica, minera y textil.
      .col-lg-5
        .crd.crd--topAvatar.yellow.hg-100.p-4(data-aos="flip-left")
          figure.mb-2
            img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt").img125.m-auto
          h5.text-center La desregulación en materia ambiental
          p.mb-0 Cada país es responsable de definir e implementar regulaciones en materia ambiental, es importante promulgar las leyes y normas necesarias para generar mayor control sobre las industrias y para proteger efectivamente los recursos naturales. Sin embargo, es normal que las regulaciones necesarias no sean implementadas debido a intereses económicos que priman sobre el cuidado ambiental.

    p(data-aos="fade").mb-5 El auge de la sociedad de consumo que fomenta los productos de un solo uso corresponde, principalmente, al consumo de productos en su mayoría plásticos, que son diseñados para su desecho inmediato. Algunos ejemplos son los vasos, platos o cubiertos desechables, las botellas de agua o pañales y, por esto, el impacto ambiental se genera principalmente sobre el aire, suelo y agua; así:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Aire")
        .col-lg-9.mb-4.mb-lg-0
          p El principal impacto que se genera sobre el aire es la contaminación, causada por la presencia en la atmósfera de sustancias o residuos tóxicos que generan graves consecuencias para el medio ambiente y la salud humana, generando enfermedades respiratorias y dermatológicas.      
        .col-lg-3.col-12
          figure
            img(src='@/assets/curso/temas/t1/t1_05.jpg', alt='')

      .row.justify-content-center(titulo="Suelo")
        .col-lg-9.mb-4.mb-lg-0
          p Consiste en la variación de la superficie terrestre debido a sustancias químicas o a prácticas productivas que afectan los ecosistemas y también la salud humana. Actividades que pueden resultar perjudiciales para el suelo son la ganadería extensiva o la contaminación por agua de riego. La contaminación de suelos causa la pérdida de la fertilidad de la tierra y afecta el hábitat de diversas especies.     
        .col-lg-3.col-12
          figure
            img(src='@/assets/curso/temas/t1/t1_06.jpg', alt='')

      .row.justify-content-center(titulo="Agua")
        .col-lg-9.mb-4.mb-lg-0
          p Las principales problemáticas concernientes al agua consisten en el despilfarro y la contaminación, que afecta su calidad y que puede generar daños a todos los seres vivos. Algunas de las principales fuentes de contaminación acuática son los pesticidas, aguas residuales, hidrocarburos y metales.    
        .col-lg-3.col-12
          figure
            img(src='@/assets/curso/temas/t1/t1_07.jpg', alt='')

    p(data-aos="fade").mb-5 Los impactos ambientales pueden ser clasificados con base en su naturaleza o con base en los atributos, de la siguiente forma:

    .crd(data-aos="fade").cstm_h3.mb-4
      h3 Impactos ambientales según su naturaleza: 

    .crd.crd--purple.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos de sobreexplotación
            p Los tipos de impacto se pueden ordenar de acuerdo con el tipo de recursos, ya sean naturales renovables o no renovables. 
            p.mb-0 La sobreexplotación de recursos naturales renovables hace referencia a cantidades extraídas del recurso mayores a su tasa de renovación, por ejemplo: la  extracción de recursos acuíferos subterráneos que superan la tasa de recarga anual, extracción de aguas superficiales sin tener en cuenta los caudales ecológicos, extracción de madera de los bosques sin dar tiempo a procesos de reforestación, ganadería intensiva que emplea técnicas inadecuadas y actividades de pesca y caza abusivas que acaban incluso con especies protegidas.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_08.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0           
            p.mb-0 Por otra parte, la sobreexplotación de recursos naturales no renovables consiste en niveles de consumo muy altos que provocan el agotamiento de los recursos, por ejemplo: la minería y extracción de arenas; estas prácticas no solo agotan los recursos, sino que causan afectaciones en la morfología de los terrenos y paisajes.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_09.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos de ocupación            
            p.mb-0 Consiste en la ocupación de ecosistemas naturales y la adaptación del suelo para actividades humanas, estas actividades suelen ser irreversibles, corresponden principalmente a la construcción de edificios, equipos e instalaciones y en su proceso suelen causar desviaciones de cauces y extracción de materiales de la zona. Algunas de las consecuencias que tienen estas actividades sobre el medio ambiente son la fragmentación de ecosistemas y territorios para convertirlos en parcelas, las infraestructuras que se convierten en barreras para la fauna como carreteras e instalaciones eléctricas o hidráulicas, el uso de ecosistemas acuáticos para recreación o turismo, entre otros.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_10.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos por emisión de efluentes           
            p.mb-0 Los efluentes industriales son desechos residuales líquidos, gaseosos o sólidos que proceden en su mayoría de plantas industriales, minería y metalurgia. Los efluentes por lo general contienen sustancias contaminantes como tóxicos, materiales biodegradables, sustancias inorgánicas y orgánicas que causan la degradación de los recursos naturales.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_11.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos por la pasividad          
            p.mb-0 Consiste en la falta de intervención para disminuir o evitar posibles impactos ambientales, está estrechamente relacionado con la desregulación en materia ambiental, que no obliga a las industrias a tomar medidas preventivas y correctivas. Algunos de estos impactos son la erosión de la tierra por prácticas de cultivo inadecuadas o por el pastoreo excesivo, incendios forestales causados por prácticas inadecuadas, recolección excesiva de especies silvestres, industrias cuyos residuos peligrosos son arrojados en la naturaleza.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_12.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos positivos        
            p.mb-0 El impacto ambiental no siempre es negativo, existen acciones que generan impactos positivos como la reforestación, el tratamiento de aguas y el uso de energías renovables.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_13.png', alt='')
    
            
    .crd(data-aos="fade").cstm_h3.mb-4
      h3 Impactos ambientales según los atributos:

    p(data-aos="fade").mb-5 Estos pueden ser impactos naturales positivos o negativos.

    .crd.crd--paleYellow.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos según la extensión            
            p.mb-0 Hace referencia al área en la que se presenta el impacto, se considera un impacto puntual cuando se da en un área muy localizada; es parcial cuando afecta una zona apreciable del entorno; es extremo cuando afecta gran parte del entorno y es total cuando afecta todo el entorno.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_14.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos según el momento             
            p.mb-0 Hace referencia al tiempo desde que se realizan las acciones hasta que se presentan los efectos. Estos impactos son inmediatos cuando el efecto se produce al llevarse a cabo la acción en el entorno; y son latentes cuando el efecto aparece al cierto tiempo. A su vez, los impactos latentes se clasifican según unos rangos de tiempo establecidos de la siguiente forma: si el efecto ocurre en menos de un año se considera un efecto a corto plazo; si ocurre entre 1 y 5 años se considera un efecto a mediano plazo; y si ocurre en más de 5 años se considera un impacto a largo plazo.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_15.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos según su capacidad de recuperación           
            p.mb-0 Pueden ser reversibles o irreversibles. Se consideran reversibles los impactos que pueden ser asimilados naturalmente por el medio ambiente; por su parte, los impactos irreversibles no logran ser asimilados naturalmente, sino que requieren medidas humanas correctoras que contrarresten los efectos, estos impactos pueden ser recuperables cuando los efectos se logran eliminar, mitigables cuando el efecto puede contrarrestarse en gran medida o irrecuperables cuando los efectos no se pueden mitigar ni eliminar.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_16.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos según la persistencia del efecto             
            p.mb-0 Hace referencia al tiempo de duración del efecto sobre el medio ambiente, estos impactos pueden ser temporales o permanentes. Los impactos temporales se clasifican según rangos de tiempo establecidos de la siguiente forma: se considera un efecto fugaz cuando dura menos de un año, se considera temporal si dura entre 1 y 3 años, y se considera pertinaz si dura entre 4 y 10 años. Por su parte, los efectos permanentes son los que tienen una duración mayor a 10 años.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_16A.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos según el tipo de efecto             
            p.mb-0 Los efectos pueden ser directos e indirectos, son directos cuando son consecuencia directa de la acción realizada sobre el entorno estos son inmediatos y de fácil percepción; y son indirectos cuando no son causa de una acción directa y no son inmediatos ni percibidos a simple vista.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_17.png', alt='')        

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Impactos según su periodicidad           
            p.mb-0 Es la regularidad con la que se manifiesta el efecto, estos pueden ser continuos o discontinuos. Los impactos continuos son los que tienen efecto mientras dura la acción y los impactos discontinuos se refieren a aquellos efectos que aparecen y desaparecen mientras se ejecuta la acción.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_18.png', alt='')

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade") 1.1 Consumo

    p(data-aos="fade").mb-5 El consumo puede definirse como el acto de comprar, obtener o apropiarse de las cosas que han sido destinadas para satisfacer algún tipo de necesidad o deseo, ya sea personal o colectivo. Este inicia desde que se siente la necesidad y finaliza al dar uso a lo adquirido; consumimos bienes o servicios que pueden ser utilizados como alimento, objeto de entretenimiento, disfrute, vestido, decoración, entre muchos otros. Generalmente el consumo termina en la destrucción o finalización de las cosas, generando desechos y residuos.

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .bloque-texto-g.bloq--purple.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_19.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Desde el punto de vista de la economía es posible definirlo como el fin de todo el proceso económico, se pretende que todo cuanto se produce llegue a ser consumido, ya que de no ser así el proceso económico sufriría devastadores efectos, debido a que este proceso se basa principalmente en que se produce para consumir, y al hacerlo surge nuevamente la necesidad de producir.

    p.mb-5 En el siguiente video explica cómo, desde el rol de consumidor, también se generan impactos ambientales y se define con más detalle este concepto:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tTJ3Zgl1DRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .bloque-texto-g.custom_01.yellow.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_20.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para entender mejor la importancia del consumo sostenible, es necesario profundizar en los efectos negativos que genera el consumismo, entendiendo que los daños causados por el comercio afectan principalmente al medio ambiente, y que se incrementan de forma exponencial, presentados anteriormente de forma detallada en impacto ambiental.

    p(data-aos="fade") El consumo se puede clasificar de tres formas: con base en las motivaciones de los consumidores, según el sector en que se realiza y de acuerdo con base a su finalidad, así de esta manera se puede entender mejor de donde proviene o cómo se da en el momento en que las personas y/o empresas lo generan.

    p(data-aos="fade").mb-4 Con base a las motivaciones de los consumidores, se clasifica así:

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade")
        LineaTiempoD.tl--purple
          p(numero="1" titulo="Consumo racional") El consumidor reflexiona y analiza la necesidad y utilidad de los bienes o servicios antes de adquirirlos, es una decisión consciente.

          p(numero="2" titulo="Consumo compulsivo") Hace referencia a la adquisición de bienes o servicios con base en un deseo impulsivo y no a una necesidad, no se lleva a cabo una reflexión al momento de comprar.

          p(numero="3" titulo="Consumo sugestionado") La decisión de compra se realiza por motivaciones creadas a través de campañas publicitarias, que tienen la intención de influir en el comportamiento de los consumidores.

          p(numero="4" titulo="Consumo sostenible") Los consumidores buscan satisfacer necesidades con productos o servicios que respeten el medio ambiente, los Derechos Humanos y que generen los menores impactos posibles.

          p(numero="5" titulo="Consumo experimental") Consiste en la adquisición de productos nuevos con los que se busca reemplazar los productos que se usaban antes.

      .col-lg-6.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_21.jpg", alt="alt")

    p(data-aos="fade").mb-5 Según el sector en que se realiza y su finalidad, el consumo se clasifica de la siguiente forma:

    .row.justify-content-center.align-items-stretch
      .col-lg-6.col-md-10.mb-4.mb-lg-0
        .row.justify-content-center.hg_100.align-items-stretch
          .col-lg-6.mb-4.mb-lg-0.hg_custm(data-aos="flip-left")
            .crd.crd--paleYellow.hg_100
              figure.mb-4
                img(src="@/assets/curso/temas/t1/t1_22.svg", alt="alt").img90.m-auto
              h5 Consumo privado
              p.mb-0 Hace referencia a todos los bienes o servicios que son adquiridos por organizaciones, familias o individuos.
          .col-lg-6(data-aos="flip-left")
            .crd.crd--paleYellow.hg_100
              figure.mb-4
                img(src="@/assets/curso/temas/t1/t1_23.svg", alt="alt").img90.m-auto
              h5 Consumo público
              p.mb-0 Consiste en todo el gasto realizado por el Estado, en diferentes instancias, y usualmente para satisfacer las necesidades de la comunidad. 
          .col-12(data-aos="fade")         
            .crd.crd--gray.hg_35
              h5.text-center.mb-0 Según el sector

      .col-lg-6.col-md-10
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.crd--yellow.hg_100
              figure.mb-4
                img(src="@/assets/curso/temas/t1/t1_24.svg", alt="alt").img90.m-auto
              h5 Consumo improductivo
              p.mb-0 Los bienes o servicios terminan o se destruyen con su uso, por ejemplo, el calzado, los alimentos y la ropa.
          .col-lg-6(data-aos="flip-left")
            .crd.crd--yellow.hg_100
              figure.mb-4
                img(src="@/assets/curso/temas/t1/t1_25.svg", alt="alt").img90.m-auto
              h5 Consumo productivo 
              p.mb-0 Corresponde a los productos o servicios que son consumidos con la finalidad de producir otros bienes o servicios, por ejemplo, la compra de algodón que es utilizado para la producción de ropa.
          .col-12.mt-3(data-aos="fade")
            .crd.crd--gray
              h5.text-center.mb-0 Según su finalidad

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade") 1.2 Riesgos y medidas de mitigación

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade")
            .topSquare
              p.mb-0 El impacto ambiental puede ocurrir de distintas formas y en diversos medios, afectando así a la mayoría de los seres vivos y todos los ecosistemas, dependiendo el medio en que se produzca el impacto ambiental, este puede generar gran cantidad de riesgos y efectos que varían según el daño ocasionado al entorno, por esta razón es de vital importancia conocer dichos daños y efectos, así como tener en cuenta las medidas de mitigación que se pueden efectuar para evitarlos o disminuir el impacto que generan.
          .col-lg-3.col-8(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/t1/t1_26.svg", alt="alt")

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .bloque-texto-g.bloq--pink.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_27.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El riesgo ambiental es la probabilidad de ocurrencia de un evento que genere un impacto ambiental negativo. Puede clasificarse en riesgos ambientales naturales, que son eventos causados únicamente por fenómenos naturales, y en riesgos ambientales antrópicos, que son eventos causados por la acción del ser humano; en estos últimos se tendrá un mayor enfoque.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_28.png", alt="alt")
      .col-lg-8(data-aos="fade")
        p Los riesgos antrópicos, generados por la acción humana, se generan principalmente debido a las actividades de los sectores industriales, por eso es de vital importancia que las organizaciones empiecen a implementar sistemas de gestión ambiental, a través de los que se puedan identificar, evaluar y valorar los riesgos ambientales que se pueden generar, con la finalidad de implementar medidas de prevención y mitigación, para que los impactos ambientales generados no causen daños irreversibles en el entorno.

        p Los aspectos organizacionales que se deben evaluar para la gestión de riesgo son los que están relacionados directamente con el medio ambiente o que pueden generar impactos ambientales de manera indirecta, algunos de estos son las emisiones, ruido, vertidos, manejo de residuos y filtraciones al suelo. 

        p.mb-0 A través de la gestión de riesgos es necesario valorar el nivel de riesgo, para hacerlo se debe medir la probabilidad de ocurrencia del riesgo y se debe medir la gravedad del riesgo, el nivel de riesgo se calcula multiplicando la probabilidad por la gravedad.

    p(data-aos="fade").text-center.mb-5 Algunos de los principales riesgos ambientales que se pueden identificar son los siguientes:

    .crd.crd--purple.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Explosiones             
            p.mb-0 Pequeñas explosiones pueden presentarse principalmente en puntos concretos de almacenamiento de sustancias altamente combustibles, este riesgo se ve incrementado por la falta de medidas de seguridad y prevención en puntos de riesgo, falta de capacitación en cuanto al manejo de este tipo de sustancias, medidas de almacenamiento inadecuadas o insuficientes.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_29.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Vertimientos accidentales           
            p.mb-0 Consisten en la descarga accidental de aguas residuales o desechos en cuerpos de agua cercanos o incluso en el suelo, un ejemplo de esto son los vertimientos accidentales de los líquidos generados por la descomposición de las basuras.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_30.png', alt='')       

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Fugas de sustancias peligrosas           
            p.mb-0 Liberación accidental de sustancias tóxicas, en niveles que pueden poner en riesgo la vida humana y el medio ambiente.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_31.png', alt='')

        .row.justify-content-center          
          .col-lg-4.mb-4.mb-lg-0
            h4 Incendios         
            p.mb-0 Las industrias que presentan este riesgo en mayor medida son las estaciones de servicio, depósitos de combustibles, almacenes de muebles y droguerías.
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/t1/t1_32.png', alt='')

    p(data-aos="fade") Con el gran desarrollo industrial cada vez es más común la ocurrencia de riesgos que generan graves impactos medioambientales, causando efectos devastadores y problemáticas ambientales tanto a nivel nacional como global; a continuación, se abordan los efectos ocasionados por el impacto ambiental:
    p(data-aos="fade").mb-5 Los efectos del impacto ambiental son los problemas ambientales que afectan variedad de ecosistemas y a las poblaciones humanas, las principales problemáticas ambientales que enfrenta el mundo en la actualidad son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="El cambio climático")      
        .col-lg-9.mb-4.mb-md-0
          p El calentamiento global es uno de los efectos más latentes, y es el aumento de la temperatura del planeta y ocurre a causa del aumento en las emisiones de efecto invernadero. El problema consiste en que las emisiones han aumentado considerablemente y han aumentado la temperatura considerablemente, esto a raíz de la industrialización, al crecimiento poblacional, prácticas agrícolas intensivas, mayor deforestación y uso de energías fósiles. Todo esto está generando consecuencias devastadoras como el deshielo de los polos, aumento del nivel del mar, pérdida de superficie en zonas costeras habitadas, entre otros.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/t1/t1_33.png', alt='')

      .row(titulo="Reducción de la capa de ozono")      
        .col-lg-9.mb-4.mb-md-0
          p La capa de ozono se encarga de filtrar los rayos ultravioletas de la luz del sol, esto es de vital importancia debido a que esta radiación dificulta la fotosíntesis, impidiendo el crecimiento de las plantas; afecta también el sistema inmune de los animales y las personas. La reducción en la capa de ozono se produce por procesos industriales en los que se libera cloro o bromo a la atmósfera y estas moléculas destruyen las moléculas de ozono. Un aspecto que podría contribuir para mitigar estos efectos sería el fortalecimiento en el cumplimiento de las políticas ambientales internacionales para los sectores industriales, también la creación de normas nacionales que se centren en la protección del medio ambiente.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/t1/t1_34.png', alt='')

      .row(titulo="Pérdida de la biodiversidad")      
        .col-lg-9.mb-4.mb-md-0
          p Es la pérdida de cualquier especie del planeta, tales como animales, especies vegetales, protozoos, hongos o bacterias, genera inestabilidad dentro del funcionamiento de los ecosistemas, ya que cada una de estas es necesaria y tiene un papel único. La pérdida de especies imposibilita la regeneración de los ecosistemas, son pérdidas irreversibles causados principalmente por los daños generados por la acción humana.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/t1/t1_35.png', alt='')

      .row(titulo="Agotamiento de los recursos naturales")      
        .col-lg-9.mb-4.mb-md-0
          p La población humana continúa creciendo de forma exponencial, lo que hace que ya no haya recursos naturales suficientes para satisfacer la demanda y las necesidades de todos. Los recursos naturales terminarán por agotarse, esto es inevitable si a medida que la población aumenta se continúan destruyendo los recursos no renovables como combustibles fósiles, minerales, metales, gases naturales. También se están sobreexplotando los recursos naturales renovables como energía solar, eólica, agua, flora y fauna. Esto genera graves problemas de seguridad alimentaria en el mundo y los suelos fértiles disminuyen cada vez más a causa de la contaminación y la erosión.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/t1/t1_36.png', alt='')

      .row(titulo="Afectación de la salud")      
        .col-lg-9.mb-4.mb-md-0
          p Los seres vivos dependemos directamente del medio ambiente para nuestra supervivencia, por lo que al acceder o tener interacción con recursos naturales contaminados se producen gran variedad de enfermedades que afectan la calidad de vida.
        .col-lg-3
          figure
            img(src='@/assets/curso/temas/t1/t1_37.png', alt='')

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .bloque-texto-g.custom_01.purple.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_38.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las medidas de mitigación buscan evitar, atenuar o compensar los impactos ambientales negativos, estas medidas pueden ser preventivas, correctivas o compensatorias. Las medidas preventivas son aquellas que pueden evitar la ocurrencia de los efectos ambientales perjudiciales, las medidas correctivas son llevadas a cabo después de la ocurrencia del impacto y minimizan los efectos generados, por último, las medidas compensatorias son aquellas que no evitan, minimizan ni anulan los efectos, estas son acciones positivas que buscan compensar los impactos negativos que no es posible corregir. 

    p(data-aos="fade").mb-5 Desde el punto de vista del comercio, existen medidas de mitigación que pueden llevarse a cabo desde los sectores productivos y otras medidas desde el rol de consumidor, entre estas medidas a implementarse desde las industrias están:  

    .row.justify-content-lg-around.justify-content-center.mb-5
      .col-lg-6(data-aos="fade")
        LineaTiempoD.tl--purple
          p(numero="1" titulo="Tratamiento de aguas residuales") Tratamiento de aguas residuales para evitar la contaminación de redes fluviales.

          p(numero="2" titulo="Recuperación de suelos") Recuperación de suelos contaminados.

          p(numero="3" titulo="Tratamiento de suelo") Tratamiento de suelo vegetal para favorecer su regeneración, mediante su adecuado almacenamiento para utilizarlo como insumo para la revegetación.

          p(numero="4" titulo="Emisiones contaminantes") Filtros en los procesos productivos para evitar emisiones contaminantes.

          p(numero="5" titulo="Insonorización") Insonorización para evitar ruidos y emisiones sonoras demasiado fuertes.

          p(numero="6" titulo="Localización de plantas industriales") Localización de plantas industriales teniendo en cuenta la protección y el cuidado de los factores ambientales.

      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_39.svg", alt="alt")

    .row.justify-content-lg-around.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_40.svg", alt="alt")
      .col-lg-6(data-aos="fade")
        LineaTiempoD.tl--purple
          p(numero="7" titulo="Vertimientos de residuos") Impedir los vertimientos de residuos contaminantes al medio ambiente.

          p(numero="8" titulo="Programas ambientales") Establecer programas para la correcta disposición y eliminación de residuos.

          p(numero="9" titulo="Sedimentación del agua") Implementación de sistemas de infiltración para filtrar los sedimentos del agua y evitar que los residuos sólidos lleguen a la red fluvial.

          p(numero="10" titulo="Barreras anti-derrames") Construir barreras que permitan contener derrames de agentes contaminantes.

          p(numero="11" titulo="Reforestación") Implementar programas de reforestación.

          p(numero="12" titulo="Sistemas de gestión ambiental") Implementar herramientas y sistemas de gestión ambiental para la prevención de riesgos ambientales.

    figure(data-aos="zoom-in").mb-5
      img(src="@/assets/curso/temas/t1/t1_41.jpg", alt="alt")

    p(data-aos="fade") Por otra parte, desde el consumidor es fundamental implementar algunas prácticas de consumo sostenible, que contribuyan a la mitigación de los impactos ambientales y que se pueden podamos promover desde el entorno propio, por ejemplo:    

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-6
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/t1_42.svg', alt='')          

          .tarjeta.color-primario.p-3(x="40%" y="15%" numero="8")
            .h5.mb-2 Reciclaje
            p.mb-0 Reciclaje de los residuos para minimizar el impacto generado por las grandes cantidades de basura y hacer parte de campañas medioambientales.

          .tarjeta.color-primario.p-3(x="58%" y="15%" numero="1")
            .h5.mb-2 Fuentes hídricas
            p.mb-0 Cuidar el agua y las fuentes hídricas.

          .tarjeta.color-primario.p-3(x="80%" y="28%" numero="2")
            .h5.mb-2 Alimentos naturales
            p.mb-0 Incrementar el consumo de alimentos naturales y frescos en reemplazo de los alimentos altamente procesados.

          .tarjeta.color-primario.p-3(x="80%" y="70%" numero="3")
            .h5.mb-2 Recursos naturales
            p.mb-0 Hacer uso adecuado de los recursos y ser más consciente con los recursos naturales.

          .tarjeta.color-primario.p-3(x="62%" y="82%" numero="4")
            .h5.mb-2 Transportes
            p.mb-0 Fomentar el uso de medios de transporte no contaminantes.

          .tarjeta.color-primario.p-3(x="37%" y="82%" numero="5")
            .h5.mb-2 Un solo uso
            p.mb-0 Buscar alternativas que puedan reemplazar los productos de un solo uso.

          .tarjeta.color-primario.p-3(x="18%" y="70%" numero="6")
            .h5.mb-2 Turismo
            p.mb-0 Reducir el impacto como turistas.         

          .tarjeta.color-primario.p-3(x="18%" y="28%" numero="7")
            .h5.mb-2 Consumo consciente
            p.mb-0 Consumir lo necesario y realizar un análisis consciente antes de realizar cualquier tipo de compra. 

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade") 1.3 Huellas (ecológica, carbono, hídrica)
    
    p(data-aos="fade") La huella ecológica, de carbono e hídrica son formas de medir el impacto que la humanidad ejerce sobre el planeta; sin embargo, es necesario resaltar que la huella ecológica tiene en cuenta todos los factores del estilo de vida del ser humano, sin importar si la actividad produce o no gases de efecto invernadero; por su parte, la huella de carbono se utiliza para evaluar el impacto de las actividades antropogénicas, es decir, por la actividad del ser humano en la tierra y tiene en cuenta todos los gases de efecto invernadero. 
    p(data-aos="fade").mb-5 En el siguiente recurso se profundizará en el tema de huellas ecológicas:

    TabsB.color-acento-contenido.mb-5(data-aos="fade")
      .py-4.py-md-5(titulo="Huella ecológica" :icono="require('@/assets/curso/temas/t1/t1_49.svg')")        
            
        p También conocida como huella medioambiental, permite medir el impacto de los hábitos de consumo, como indicadores de sostenibilidad a escala internacional. 
        p.mb-5 El cálculo de la huella ecológica tiene aspectos como la alimentación, el hogar, el transporte, los bienes de consumo, servicios y estos pueden encontrarse divididos en subcategorías:

        .row.justify-content-center
          .col-lg-10
            .row.justify-content-center
              .col-lg-4.mb-4
                .crd.crd--paleYellow.hg-100
                  figure.mb-3
                    img(src="@/assets/curso/temas/t1/t1_43.svg", alt="alt").img75.m-auto
                  p.mb-0 #[strong Cultivos:] superficie en la cual se desarrollan actividades agrícolas, orientadas al suministro de productos como alimentos, fibra, aceites, entre otros.
              .col-lg-4.mb-4
                .crd.crd--purple.hg-100
                  figure.mb-3
                    img(src="@/assets/curso/temas/t1/t1_44.svg", alt="alt").img75.m-auto
                  p.mb-0 #[strong Pastos:] área dedicada a pastos, dedicados a la producción animal y productos como carne, leche, cueros y lana.
              .col-lg-4.mb-4
                .crd.crd--paleYellow.hg-100
                  figure.mb-3
                    img(src="@/assets/curso/temas/t1/t1_45.svg", alt="alt").img75.m-auto
                  p.mb-0 #[strong Bosques:] la superficie ocupada por los bosques de donde principalmente se obtienen productos derivados de la madera, empleados en la producción de bienes o también de combustibles como leña.                  
              .col-lg-4.mb-4
                .crd.crd--purple.hg-100
                  figure.mb-3
                    img(src="@/assets/curso/temas/t1/t1_46.svg", alt="alt").img75.m-auto
                  p.mb-0 #[strong Mar:] la superficie marítima biológicamente productiva.
              .col-lg-4.mb-4
                .crd.crd--paleYellow.hg-100
                  figure.mb-3
                    img(src="@/assets/curso/temas/t1/t1_47.svg", alt="alt").img75.m-auto
                  p.mb-0 #[strong Superficie construida:] área ocupada por edificios, embalses y otro tipo de infraestructura, que no es biológicamente productiva.
              .col-lg-4.mb-4
                .crd.crd--purple.hg-100
                  figure.mb-3
                    img(src="@/assets/curso/temas/t1/t1_48.svg", alt="alt").img75.m-auto
                  p.mb-0 #[strong Energía:] área de bosque necesaria para absorber las emisiones de CO#[sub 2], derivadas de la quema de combustibles fósiles.

      .py-4.py-md-5(titulo="Huella de carbono" :icono="require('@/assets/curso/temas/t1/t1_50.svg')")        
            
        p La huella de carbono (CO#[sub 2]) o HC, realiza la contabilidad de las emisiones de carbono emitidas por gases de efecto invernadero producto de la acción humana, la deforestación, la utilización de combustibles fósiles, la producción animal, entre otras. 
        p.mb-5 Las fuentes de emisión de CO#[sub 2] están divididas entre emisiones directas o indirectas y estas últimas tienen además otra clasificación:

        .row.justify-content-center
          .col-lg-10
            .tabla-a.custom01.mb-5  
              table
                thead
                  tr
                    th Emisiones directas                      
                    th Emisiones indirectas                     
                    th Otras emisiones indirectas
                tbody
                  tr
                    td.p-4 Son aquellas que provienen de fuentes que son propiedad de la entidad que reporta (ya sea una empresa u otra instituci&oacute;n) o controladas por esta, como por ejemplo, consumo el&eacute;ctrico, combustibles f&oacute;siles, embalajes, entre otras.

                    td.p-4 Son aquellas que ocurren como consecuencia de las actividades de la entidad que reporta, pero que provienen de fuentes que no son propiedad de esta, ni tampoco controladas por ella como suele ser el transporte o las relacionadas con el uso o reciclaje del producto cuando ya est&aacute; en poder del consumidor.

                    td.p-4 Son consecuencia de las actividades de la organizaci&oacute;n que ocurren fuera de esta y no son controladas o generadas por esta, como lo son los viajes, la gesti&oacute;n y disposici&oacute;n de residuos, la producci&oacute;n de insumos, etc.

      .py-4.py-md-5(titulo="Huella hídrica" :icono="require('@/assets/curso/temas/t1/t1_51.svg')")        
            
        p Se toma como indicador de consumo porque permite saber el volumen de agua que es utilizado para producir bienes y servicios consumidos, debido a lo anterior, hay una gran relación con la huella ecológica, pues esta última calcula el área total de espacio productivo requerido para producir los productos y servicios consumidos por una determinada población. 

        p.mb-5 Además, la huella hídrica total de un país tiene un componente interno y otro externo, como se observa a continuación:

        .row.justify-content-center
          .col-lg-8
            .tabla-a.custom01.mb-5  
              table
                thead
                  tr
                    th Interno
                    th Externo
                   
                tbody
                  tr
                    td.p-4 Se refiere al volumen de agua necesario para cultivar y proporcionar los bienes y servicios que se producen y consumen dentro de ese país

                    td.p-4 Es el resultante del consumo de bienes importados, es el agua que se utiliza para la producción de bienes en el país exportador.

    .crd.bg--paleYellow(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-lg-7.px-5.py-5.py-lg-0.order-2.order-lg-1
          p.mb-0 En resumen, la huella ecológica tiene como objetivo determinar qué superficie es ecológicamente productiva para producir recursos para el ser humano y para poder tolerar los residuos que genera. Según Schneider y Samaniego (2009), citando a Carballo (2008), permite también medir el impacto de los hábitos de consumo, lo cual es un indicador de sostenibilidad a escala internacional. Además, el cálculo de la huella ecológica tiene aspectos como la alimentación, el hogar, el transporte, los bienes de consumo, servicios, y estos según Schneider y Samaniego (2009) pueden estar divididos en las subcategorías ya mencionadas
        .col-lg-5.order-1.order-lg-2
          .bg_img.img_03

    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_53.svg", alt="alt")
      .col-lg-7(data-aos="fade")
        p En cuanto a la huella de carbono, esta se utiliza para evaluar el impacto de la actividad antropogénica en el medio ambiente. La HC considera los 6 GEI identificados en el Protocolo de Kioto: dióxido de carbono (CO#[sub 2]), metano (CH#[sub 4]), óxido nitroso (N#[sub 2]O), hidrofluorocarbonos (HFC), perfluorocarbonos (PFC) y hexafluoruro de azufre (SF#[sub 6]). La HC se mide en toneladas equivalentes de dióxido de carbono (tCO#[sub 2]e), a fin de poder expresar las emisiones de los distintos gases de efecto invernadero en una unidad común. La medida (CO#[sub 2]e) se calcula multiplicando las emisiones de cada uno de los 6 GEI por su respectivo potencial de calentamiento global (PCG) al cabo de 100 años (p. 25).
        p.mb-0 Por tal razón, es necesario que las organizaciones y países industrializados midan su huella de carbono, primero identificando las fuentes de emisión para la toma de decisiones frente a la producción y cómo se puede revertir la emisión directa o indirecta. 

    p(data-aos="fade") Finalmente, #[strong la huella hídrica] tiene en cuenta para su cálculo el agua utilizada de los ríos, lagos y acuíferos (aguas superficiales y subterráneas) para la agricultura, la industria y el uso doméstico, así como el agua de lluvia utilizada para los cultivos. (Schneider y Samaniego, 2009).  Además, según información del Fondo Mundial para la Naturaleza - WWF por sus siglas en inglés, se contempla también el consumo doméstico y la importancia del agua virtual del país. (WWF, 2008, citado por Schneider y Samaniego, 2009).     

           
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
