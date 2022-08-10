<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Ciclo de vida del producto

    p(data-aos="fade").mb-5 Se puede detallar como el espacio de tiempo en el cual un producto se comercializa y genera utilidades, no obstante, se debe pensar en que el inicio del ciclo de vida de un producto se da por el descubrimiento de una necesidad insatisfecha, como se evidencia en la figura 2.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      h5 Figura 2.
      span Modelo de ciclo de vida del producto publicado por Levitt en 1965

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_01.svg", alt="alt")
        figcaption.mt-4 Nota. Tomado de Sánchez (2015)

    p(data-aos="fade").mb-5 Es por ello que se debe pensar en el ciclo de vida analizando el ciclo completo del producto, proceso o actividad, teniendo en cuenta las etapas de la figura 3.

    .row.justify-content-center.mb-5 
      .col-lg-8(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Análisis del ciclo de vida del producto

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t3/t3_02.svg", alt="alt")
        figcaption.mt-4 Referencia: Sena (2022)

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-xl-10
        .bloque-texto-g.bg--purple.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t3/t3_09.jpg')})`}" )
          .bloque-texto-g__texto.p-4
            p.mb-0 Así las cosas, lo que se busca con el análisis del ciclo de vida del producto es incrementar la eficiencia mediante el aprovechamiento óptimo de materias primas, contribución a diferentes etapas del ciclo de vida del producto, minimizando las afectaciones del entorno, analizando las posibles implicaciones económicas, sociales y ambientales de un producto existente y uno nuevo, todo esto permitiendo implementar mejoras en busca de un desarrollo sostenible.

    p(data-aos="fade").mb-5 El análisis del ciclo de vida de un producto o servicios tiene diferentes alcances desde dos perspectivas, como se puede evidenciar en el recurso:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--img.hg-100
          figure
            img(src="@/assets/curso/temas/t3/t3_03.jpg", alt="alt")
          .crd--img__title.p-3
            h4.mb-0 “De la cuna a la tumba”  
          .p-3                  
            p.mb-0 Tener en cuenta todas las entradas y salidas de los procesos que tiene lugar en el ciclo de vida, desde la extracción de la materia prima hasta el reciclado o disposición final, incluyendo las fases intermedias de transporte y almacenamiento, denominándose “de la cuna a la tumba”.

      .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--img.hg-100
          figure
            img(src="@/assets/curso/temas/t3/t3_04.jpg", alt="alt")
          .crd--img__title.p-3
            h4.mb-0 “De la cuna a la puerta” 
          .p-3                  
            p.mb-0 Si por el contrario solo se tiene en cuenta las entradas y salidas, desde que se obtiene materia prima hasta que el producto se comercializa (llega al mercado) se denomina “de la cuna a la puerta”.

      .col-lg-4(data-aos="flip-left")
        .crd.crd--img.hg-100
          figure
            img(src="@/assets/curso/temas/t3/t3_05.jpg", alt="alt")
          .crd--img__title.p-3
            h4.mb-0 “De la puerta a la puerta”
          .p-3                  
            p.mb-0 Finalmente, si las entradas y salidas se limitan solo al proceso de fabricación se denomina “de la puerta a la puerta”.

    p(data-aos="fade").mb-5 La siguiente figura presenta un resumen gráfico de los diferentes alcances en el análisis del ciclo de vida del producto.

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      h5 Figura 4.
      span Análisis del ciclo de vida del producto

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t3/t3_06.svg", alt="alt")
      figcaption.mt-3 Nota. Tomado de Olivera, Cristobal, y Saizar (2016)

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Etapas del ciclo de vida

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_07.svg", alt="alt")

    p(data-aos="fade").mb-4 Los productos pasan por diferentes etapas, dentro de las cuales se destacan:

    TabsA.color-acento-contenido(data-aos="fade").mb-5    
      .tarjeta.color-primario--borde.p-4(titulo="Introducción o desarrollo")
        h4 Introducción o desarrollo
        p Inicia con la llegada del producto al mercado, antes de que se pruebe una necesidad, caracterizándose por un crecimiento lento, en donde las ventas no son muy altas. 

        p Presentar un nuevo producto al mercado conlleva incertidumbre y riesgo, pues la demanda debe ser establecida desde el inicio de la etapa.La duración de esta etapa depende del grado de complicación, novedad e innovación del producto, además del grado de satisfacción de las necesidades del comercio y el nivel de competitividad.

        p Es importante tener en cuenta que para la creación de un nuevo producto se requiere:

        p Generación de nuevas ideas, establecer las fuentes para obtener las nuevas ideas, seleccionar las mejores ideas, aterrizar las ideas, con el fin de generar claridad del producto al consumidor, diseñar estrategias de marketing, desarrollar el producto, probar el producto, probar el mercado, realizar lanzamiento y comercialización del producto.

      .tarjeta.color-primario--borde.p-4(titulo="Crecimiento")
        h4 Crecimiento
        p En esta etapa la demanda del producto empieza a crecer y las oportunidades de venta se amplían también, ampliándose el mercado. 
        p.mb-0 Es aquí donde se deben empezar estrategias (publicidad, generar una cultura de producto) que permitan crecimiento constante y continuación del producto en el mercado, logrando un punto de equilibrio.

      .tarjeta.color-primario--borde.p-4(titulo="Madurez")
        h4 Madurez
        p Las actividades comerciales alcanzan niveles máximos, pues la demanda crece dependiendo de la tasa de renovación del producto y el crecimiento demográfico.
        p.mb-0 Las ventas alcanzan niveles máximos y se evidencia disminución de las mismas, generando un declive de las utilidades, la producción supera la demanda y tienden a desaparecer los vendedores más débiles, es por ello que se denomina la etapa más larga, pues aquí es donde se implementan estrategias de mejora del producto con el fin de reactivar las ventas.

      .tarjeta.color-primario--borde.p-4(titulo="Declive")
        h4 Declive
        p Disminuye la demanda del producto, posiblemente por la aparición de un nuevo producto, que satisface la misma necesidad y que tal vez es más atractivo para el consumidor. Las ventas disminuyen paulatinamente y las utilidades tienden a desaparecer, esto generado a raíz de avances tecnológicos, variaciones en precios de ventas que hacen que sean más atractivos en otras organizaciones, entre otros.

        p.mb-0 Es ahí donde se debe definir si es rentable mantener el producto en el mercado o se debe sustituir por uno más rentable, o rediseñar el  producto actual, lo que permite mantener ventas temporales.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Beneficios del ciclo de vida

    .row.justify-content-center 
      .col-lg-4(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_08.svg", alt="alt")
      .col-lg-8(data-aos="fade")
        h5 Conocer el ciclo de vida de un producto permite:
        ul.fa-ul
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Comparar la funcionalidad entre productos con características similares.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Tomar decisiones en la etapa de diseño del producto o mejoramiento de los ya existentes.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Implementar estrategias para mejorar el proceso y de este modo, permanecer por más tiempo en el mercado.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Diseñar estrategias de gestión.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Minimizar impactos ambientales.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Proporcionar al cliente información sobre las características ambientales del producto y opciones para la disposición final.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Mejorar la imagen organizacional y el marketing verde.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Seleccionar buenos proveedores y gestión en la cadena de suministro.
          li
            i.fa-li.fas.fa-check.clr--magenta
            | Identificar las necesidades.




    


</template>

<script>
export default {
  name: 'Tema3',
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
