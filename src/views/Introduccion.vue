<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción

    p(data-aos="fade").mb-5 En este componente se abordarán los conceptos del impacto ambiental, con sus riesgos y los tipos de huellas ambientales, todo esto para identificar los criterios de sostenibilidad en los procesos de las organizaciones, los beneficios del ciclo de vida del producto, las reglas de las 3R, la economía circular y las normativas ambientales aplicables a las industrias de productos o servicios. Como aspecto inicial, se invita a ver el siguiente video que adentra en la temática a abordar:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8CjzOc5VumY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         

    .row.justify-content-center.align-items-center
      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/intro/intro.png", alt="alt")
      .col-lg-8(data-aos="fade")
        p La razón de la sostenibilidad es cuidar el medio ambiente aprovechando al máximo los recursos y no solo eso, sino también generar ingresos a las empresas que hagan sus prácticas y sigan sus políticas verdes, para ello es necesario medir de manera clara el impacto ambiental por medio de las huellas que el consumo y el consumismo han causado al medio ambiente.

        p Por ello, es primordial entender a dónde se debe apuntar en cuanto a impacto ambiental para generar las políticas y normatividad que preservará a este mismo y a una sociedad sana. Si se habla de valor agregado, empezar por el cuidado del medio ambiente y la sociedad es un punto clave, innovar en esta tendencia, es lograr la excelencia en servicio, producto y calidad. 

        p.mb-0 Además, se podría decir que el consumo de la sociedad es el que genera la demanda a la cual las empresas responden generando un impacto ambiental, que es necesario regular e innovar en cuanto a producción para el cuidado y sostenimiento del medio ambiente, este concepto es el que se verá a continuación en impacto ambiental y economía circular.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
