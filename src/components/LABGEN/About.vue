<template>
    <section class="aboutHome d-flex align-items-center" style="padding: 10%" id="aboutHome">
        <div class="container">
                <div class="lg:pt-12 w-full md:w-12/12" data-aos="fade-right">
                    <p class="text-center">SOBRE EL LABORATORIO</p>
                    <h2 class="text-center py-2">
                        Laboratorio de género
                    </h2>
                    <hr class="divider" />
                    <p class="text-center text">
                        El Laboratorio se crea como un espacio de investigación aplicada multidisciplinaria que está alojado en la Unidad de Investigación de la UGB para el desarrollo científico en temas de violencia basada en género con el objetivo de potenciar la generación y difusión de recursos en la materia.
                    </p>
                </div>
                
            
        </div>
        <!-- end of container -->
    </section>


</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "about",
    mounted() {
        AOS.init({});
    }
};
</script>

<style scoped>
.aboutHome{
    background-color: #F8F9FA;
}
.text {
    font-size: 1vw;   
}
hr.divider {
    height: 0.2rem;
    max-width: 3.25rem;
    margin: 1.5rem auto;
    background-color: #14B8A6;
    border-color: #14B8A6;
    opacity: 1;
  }
  hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    unicode-bidi: isolate;
    overflow: hidden;
    border-width: 1px;
  }
</style>