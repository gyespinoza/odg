<template>
  <div class="slider-1 testimonial text-light">
    <div class="container">
      <div class="row">
        <div class="text-center pb-4">
          <p>OPINIONES</p>
          <h1>Testimonios y experiencias</h1>
          <p class="para-light text-white"></p>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="slider-container" data-aos="zoom-in">
          <swiper :modules="modules" :slides-per-view="3" :space-between="30" :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }" :breakpoints="swiperBreakpoints" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
              <div class="testimonial-card">
                <p style="font-style: italic;">{{ testimonial.content }}</p>
                <div class="testimonial-author">
                  <i class="fa fa-user-circle" style="color: #BB71FF; font-size:36px"></i>&nbsp;&nbsp;&nbsp;
                  <div class="author-info">
                    <h6>{{ testimonial.position }}</h6>
                    <p>{{ testimonial.name }}</p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Testimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      swiperBreakpoints: {
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
      testimonials: [
        {
          id: 1,
          content:
            "Todo ha sido muy bien, los docentes explican muy bien y muestran verdadero interés en nuestro aprendizaje.",
            name: "Estudiante",
            position: "FIA",
        },
        {
          id: 2,
          content:
            "La experiencia ha sido más que todo positiva, con aceptación desde el primer día tanto en el ambiente general como con los profesores.",
            name: "Estudiante",
            position: "FCT",
        },
        {
          id: 3,
          content:
            "Los docentes han sido muy bien portados con nuestro grupo, han explicado muy bien todo.",
            name: "Estudiante",
            position: "FIA",
        },
        {
          id: 4,
          content:
            "Mi experiencia sobre la carrera ha sido más que todo positiva, ya que desde el primer día he sentido como esa aceptación que ha tenido mi persona.",
            name: "Estudiante",
            position: "FCT",
        },
        {
          id: 5,
          content:
            "Creo que todos dentro de la facultad, hablando por ingeniería y arquitectura, tenemos la confianza de los ingenieros.",
            name: "Estudiante",
            position: "FIA",
        }
      ],
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  mounted() {
    AOS.init({});
  },
};
</script>

<style scoped>
.slider-1 {
  padding-top: 8.25rem;
  padding-bottom: 8.5rem;
  background-color: #fff;
}

.section-title,
.h2-heading {
  text-align: center;
}

.h2-heading {
  margin-bottom: 3rem;
}

.testimonial-card {
  border-style: solid;
  border-width: 2px 2px 1px 0;
  border-image-source: linear-gradient(to right, transparent, #e1e2e4, #d6d6d8fb);
  border-image-slice: 1;
  padding: 20px;
  background-clip: padding-box;
}

.testimonial-card::before,
.testimonial-card::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.3);
}

.testimonial-card::before {
  left: 0;
}

.testimonial-card::after {
  right: 0;
}

.testimonial-card p {
  text-align: left;
  margin-bottom: 20px;
  color: #000;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--primary);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.author-info {
  text-align: left;
}

.author-info h6 {
  margin: 0;
  font-weight: bold;
}

.author-info p {
  margin: 0;
  font-size: 0.9em;
  opacity: 0.8;
}

.swiper-container {
  width: 100%;
  position: static;
}

.swiper-button-prev,
.swiper-button-next {
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 18px;
  font-weight: bold;
}

.swiper-button-prev {
  left: -50px;
}

.swiper-button-next {
  right: -50px;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 15px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
