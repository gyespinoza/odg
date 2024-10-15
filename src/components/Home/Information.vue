<template>    
<section class="information" id="information">
    <div class="container-fluid">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 w-full md:w-4/12 px-4 text-center text-white " data-aos="zoom-in">
        <i class="fa fa-th-large fa-3x p-2"></i>
        <h6 class="text-xm">Dimensiones</h6>
        <p class="para-light"></p>
      </div>
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center text-white" data-aos="zoom-in">
        <i class="fa fa-th fa-3x p-2"></i>
        <h6 class="text-xm">Indicadores</h6>
        <p class="para-light"></p>
      </div>
      <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center " data-aos="zoom-in">
        <i class="fas fa-chart-line fa-3x"></i>
        <h6 class="text-xm">Estadísticas</h6>
        <p class="para-light"></p>
      </div>
    </div>
  </div>
</section>

</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "Information",
    mounted() {
        AOS.init({});
    }
}
</script>
