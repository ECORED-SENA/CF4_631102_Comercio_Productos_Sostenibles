<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Economía circular

    .row.justify-content-center.mb-lg-5.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_01.png", alt="alt")
      .col-lg-8(data-aos="fade")
        p Es un nuevo tipo de producción y consumo que responde un desarrollo sostenible en el tiempo, promoviendo el progreso de los recursos, la reducción en el consumo de materias primas y el aprovechamiento de los residuos, reciclándolos o dándoles una nueva vida para convertirlos en nuevos productos, se presenta como una alternativa innovadora al modelo lineal.

        p La idea clave es redefinir un sistema económico esencialmente regenerativo a base de mantener los productos, componentes y materiales en su nivel más alto de utilidad y valor, bajo el principio de eliminar el despilfarro y no destruir innecesariamente los recursos para conservar el capital natural.

        p.mb-0 Los diferentes sistemas de producción anteriormente se comportan de manera lineal, donde los productos se fabricaban para ser consumidos y desechados. Sin embargo, en la actualidad, donde los tiempos en que el consumo es cada vez mayor, es posible hablar de economía circular en la que desde el diseño de los diferentes productos se busca que puedan ser reutilizados y aprovechados a los cuales se les puede aplicar el ciclo de reciclaje.

    .row.justify-content-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade")
        p De esta manera, lo que antes se convierte en basura, ahora se incorpora a la cadena productiva, este sistema permite aprovechar los recursos en todas las fases del ciclo de producción, garantizando de esta manera un óptimo desarrollo para la industria en la medida en que mejora su relación con el medio ambiente, permitiendo evaluar el impacto ambiental desde el diseño, fabricación, venta y transporte, consumo final, disposición y reciclaje. 

        p.mb-0 Es de vital importancia su desarrollo y análisis, pues permite aprovechar los diferentes recursos en las diferentes etapas, este modelo de economía permite mantener un equilibrio entre el desarrollo sostenible y el cuidado del medio ambiente. En la siguiente figura se presenta el ciclo de la materia prima para aprovechar en cada uno de los procesos la transformación de los recursos materiales, para alargar el ciclo de vida de un producto lo que más sea posible.
      .col-lg-3.col-8.order-1.order-lg-2.mb-5.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_02.svg", alt="alt")

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      h5 Figura 6.
      span Características de la economía circular

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/t6/t6_03.svg", alt="alt")

    p(data-aos="fade") Se puede observar cada una de las etapas, donde se tiene un valor determinado que debe ser aprovechado, donde los residuos y distintos productos llamados desechables son convertidos en un nuevo recurso, de esta forma se logrará tener una justa medida entre el avance y la sostenibilidad.

    p(data-aos="fade") Existen ciertos rasgos que se pueden tomar como principios para una economía circular efectiva y ser utilizada de manera correcta, algunos de ellos pueden ser: la basura se transforma en recurso de nuevo, siendo la principal característica de la economía circular, pues el material biodegradable debería volver a la naturaleza y el que no hace parte de este ciclo debería reutilizarse. 

    p(data-aos="fade").mb-5 Un segundo uso debe ser la reintroducción en el círculo económico de los productos que ya no satisfacen las necesidades de los clientes, rediseñando nuevos productos con base en los que ya se tienen hechos. También se puede realizar una valoración de los residuos que no se pueden reciclar y que se aprovechan energéticamente.

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .bloque-texto-g.custom_01.pink.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t6/t6_04.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La economía circular también se caracteriza porque propone prescindir de cientos de productos que muchas veces terminan en la basura en tan solo cinco minutos, la propuesta es establecer un método donde se alquilan los bienes, donde el producto al cumplir su función regresa a la empresa para ser reutilizado y redistribuido. Uno de los aspectos más importantes en el ciclo de la economía circular es la consideración del impacto medioambiental a corto y largo plazo, entendiendo e integrando el ciclo de vida de los diferentes productos.

    p(data-aos="fade").mb-4 Al definir la economía circular no se puede pensar en un único autor o en una fecha específica, los orígenes están adaptados a técnicas industriales y métodos económicos de la modernidad que han tomado impulso desde finales del siglo XX. Dentro de las principales escuelas de pensamiento se encuentran:

    .crd.crd--purple.mb-5(data-aos="fade")
      SlyderA(tipo="b")
        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/t6/t6_05.png', alt='')
          .col-12
            h4 Ecología industrial
            p La teoría propone imitar los ciclos propios de la naturaleza y sienta las bases de la concepción de una economía circular. Para lograr que los sistemas productivos funcionen de manera cíclica, destaca dos ejes de acción:
            p.strong.mb-2 a. Reducción drástica del consumo, denominada desmaterialización.
            p.strong.mb-0 b. Simbiosis industrial.     

        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/t6/t6_06.png', alt='')
          .col-12
            h4 Diseño regenerativo
            p.mb-0 Es una de las teorías pioneras en materia de economía circular, plantea asemejar la producción a los ciclos naturales y para ello considera vital el rediseño de la tecnología y de los productos. Este nuevo diseño se centrará en evitar la incorporación de materiales que no pudieran ser reincorporados al ciclo al finalizar su vida útil. 

        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/t6/t6_07.png', alt='')
          .col-12
            h4 Capitalismo natural
            p.mb-0 Se plantea una nueva revolución industrial encaminada a un capital humano y natural, centrándose en el incremento de la productividad de los recursos naturales, inversiones sostenibles, cambios en la oferta de productos con servicios basados en ciclos biológicos y la introducción de un nuevo modelo de negocio.

        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/t6/t6_08.png', alt='')
          .col-12
            h4 De la cuna a la cuna (<em>Cradle to cradle</em>)
            p La principal aportación, es la clasificación que realiza de los recursos presentes en la economía. A los recursos, como materias primas o productos manufacturados, los denomina #[em nutrietites] y los clasifica en dos tipos:
            p.mb-2 a. Recursos biológicos.
            p.mb-0 b. Recursos técnicos.

        .row
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/t6/t6_09.png', alt='')
          .col-12
            h4 Economía azul
            p.mb-0 Hace hincapié en la necesidad de un sistema que promueva no solo la sostenibilidad ambiental, sino también una mejora en las condiciones de vida y reducción de las desigualdades sociales. Además, realiza una recopilación de innovaciones de ámbito empresarial y científico que, tomando como modelo los ecosistemas, ya generan empleo, reducen las desigualdades sociales y disminuyen la degradación del medioambiente.

    .row.justify-content-center.mb-lg-5.mb-4
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_10.png", alt="alt")
      .col-lg-8(data-aos="fade")
        p La economía circular permite reinterpretar el uso del modelo económico tradicional que está basado en extraer, producir y desechar, este modelo aparece como una alternativa que busca redefinir el crecimiento industrial, centrándose en la sociedad y pensando en su bienestar.

        p Generar esta alternativa implica cambios en la forma en que se consumen los productos y eliminar los residuos del sistema desde el diseño. Actualmente se está llevando a cabo una transición hacia las fuentes renovables de energía, la balanza se inclina del lado de un modelo que fomenta capital de manera natural, social y sobre todo de manera consciente.

        p.mb-0 El diseño de la economía circular permite que las diferentes industrias, empresas, organizaciones, desarrollen competencias de diseño facilitando el reúso y la reutilización de los productos. El reciclaje y la reutilización requiere habilidades y métodos de trabajo que permitan la producción industrial de manera duradera y poco perecedera, para eso es indispensable que las diferentes industrias estandaricen criterios de diseño para la fabricación que crean rentables en la aplicación de coproductos y residuos.

    p(data-aos="fade").mb-5 En el siguiente video se explica cómo la economía circular proporciona nuevas oportunidades a las empresas para que aprovechen nuevas habilidades que permitan identificar los ciclos y el retorno de los materiales que se utilizan en el sistema de producción industrial:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/AyUEJ5YLB1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       

    .row.justify-content-center.align-items-center
      .col-lg-9(data-aos="fade")
        p.mb-0 Se debe tener en cuenta que todas las partes y todos los procesos, tienen responsabilidad y un rol específico en cada parte del ciclo de vida de un producto, esto es muy importante debido a que el análisis de cada una de las etapas da paso a una evaluación para poder tomar decisiones, dependiendo del ciclo o en que parte afecta un producto. Estas decisiones pueden ir desde patrones de consumo, políticas, gestiones, producción, entre otras.
      .col-lg-3.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t6/t6_11.svg", alt="alt")

    
        
      



</template>

<script>
export default {
  name: 'Tema6',
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
