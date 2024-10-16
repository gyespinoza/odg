<template>
    <div>
        <section class="activities d-flex align-items-center" style="padding: 10%">
            <div class="container">
                <div class="lg:pt-12 w-full md:w-12/12" data-aos="fade-right">
                    <p class="text-center">DIFUSION DEL LABORATORIO</p>
                    <h2 class="text-center">Actividades</h2>
                    <hr class="divider" />
                    <p class="para-light">
                        Para la difusión del Laboratorio y sus actividades, la UGB creará una comunidad dentro del repositorio institucional (rid.ugb.edu.sv) y se posicionará como un satélite del Instituto de Investigación sobre Violencia de Género (IVG) de la Universidad Francisco Gavidia.
                    </p>
                    <div class="flex">
                        <div class="lg:pt-12 w-full md:w-4/12" data-aos="fade-right"
                            v-for="(feature, index) in features" :key="index">
                            <div class="fa-2x" style="text-align:center">
                                <i :class="feature.icon"></i>
                            </div>
                            <h3>{{ feature.title }}</h3>
                            <p>{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "about",
    data() {
        return {
            features: [
                {
                    icon: 'fa fa-book',
                    title: '',
                    description: 'Programa de formación especializada para la investigación'
                },
                {
                    icon: 'fas fa-project-diagram',
                    title: '',
                    description: 'Dos proyectos de investigación en el ámbito de la violencia basada en género​'
                },
                {
                    icon: 'fas fa-people-arrows',
                    title: '',
                    description: 'Red de contactos con personas expertas, investigadoras y actores del sistema de salud y de justicia para facilitar las investigaciones y su difusión'
                },
            ]
        };
    },
    mounted() {
        AOS.init({});
    }
};
</script>

<style scoped>

.activities {
    background-color: #f8f9fa;
}

.text {
    font-size: 1vw;
}

hr.divider {
    height: 0.2rem;
    max-width: 3.25rem;
    margin: 1.5rem auto;
    background-color: var(--primary);
    border-color: var(--primary);
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

.features {
    background-color: #f8f9fa;
}

.feature-icon {
    font-size: 3rem;
    color: #f4623a;
}

.features h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.features p {
    font-size: 0.9rem;
    color: #6c757d;
}
</style>