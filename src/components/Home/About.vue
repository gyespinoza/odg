<template>
    <section class="about d-flex align-items-center py-5" id="about" style="padding-top: 10%; height: 850px">
        <div class="container">
            <div class="flex align-items-center py-2">
                <div class="lg:pt-12 w-full md:w-7/12" data-aos="fade-right">
                    <p>SOBRE EL OBSERVATORIO</p>
                    <h1>
                        Observatorio <br />
                        de género
                    </h1>
                    <p class="py-2 para-light">
                        El Observatorio de Género de la Universidad Gerardo Barrios es una iniciativa  
                        que busca promover la equidad de género en las carreras de ciencia, tecnología, ingeniería y matemáticas (STEM) 
                        a través del análisis de datos, la generación de conocimiento y la implementación de soluciones tecnológicas innovadoras.
                    </p>
                    <p class="py-2 para-light">
                        El Observatorio se fundamenta en un  
                        análisis de la situación actual de la UGB en términos de equidad de género en STEM, 
                        utilizando una metodología mixta que combina la revisión  de registros institucionales 
                        con la recolección de percepciones y experiencias de la comunidad universitaria a través de encuestas y grupos focales.
                    </p>
                </div>
                <div class="lg:pt-12 w-full md:w-5/12 text-center" data-aos="fade-down">
                    <div class="image-container">
                        <img class="img-fluid" src="@/assets/img/ob.jpg" alt="about" />
                    </div>
                </div>
            </div>
            <!-- end of row -->
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