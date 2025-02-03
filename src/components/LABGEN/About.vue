<template>
    <section class="about d-flex align-items-center py-5" id="about" style="padding-top: 5%; height: 850px">
        <div class="container">
            <div class="flex align-items-center py-2">
                <div class="lg:pt-12 w-full md:w-7/12" data-aos="fade-right">
                    <p>SOBRE EL LABORATORIO</p>
                    <h1>
                        Laboratorio de investigación de<br />
                        violencia basada en género
                    </h1>
                    <p class="py-2 para-light">
                        El Laboratorio se crea como un espacio de investigación aplicada multidisciplinaria que está alojado en la Unidad de Investigación de la UGB para el desarrollo científico en temas de violencia basada en género con el objetivo de potenciar la generación y difusión de recursos en la materia.
                    </p>
                </div>
                <div class="lg:pt-12 w-full md:w-5/12 align-items-center text-center" data-aos="fade-down" style="padding:10%">
                    <div class="image-container">
                        <img class="img-fluid" src="@/assets/img/lab.jpg" alt="about" />
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