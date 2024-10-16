<template>
  <div>
    <principal-nav-bar />
    <section class="hero-section d-flex align-items-center" id="header">
      <div class="container text-center" data-aos="fade-right">
        <h1 class="headline text-white">
          Laboratorio de investigación de Violencia basada en género
        </h1>
        <hr class="divider" />
        <p class="subtitle text-white mt-3">
          En el marco de la subvención: Fortalecimiento de los servicios de atención a víctimas de VBG y desarrollo de la investigación científica sobre la VBG
        </p>
        <br /><br />
        <a href="labgen#aboutHome" class="btn btn-primary btn-lg mt-4 text-white">DESCUBRE MÁS</a>
      </div>
    </section>

    <div class="mx-auto w-full -m-24">
      <router-view />
      <footer-principal />
    </div>
  </div>
</template>

<script>
import PrincipalNavBar from "@/components/Navbars/PrincipalNavBar.vue";
import FooterPrincipal from "@/components/Footers/FooterPrincipal.vue";
import backgroundImage from "@/assets/img/backgroundI.jpg";

export default {
  name: "LABGEN",
  data() {
    return {
      backgroundImage
    }
  },
  components: {
    PrincipalNavBar,
    FooterPrincipal,
  },
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to bottom, rgba(66, 77, 92, 0.8) 0%, rgba(66, 82, 92, 0.8) 100%), url(@/assets/img/labgen.jpg);
  background-size: cover;
  background-position: center;
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

.subtitle {
  font-size: 1.3rem;
  max-width: 900px;
  margin: 0 auto;
}

.btn-primary {
  background-color: #14B8A6;
  border-color: #14B8A6;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  border-radius: 10rem;
}

.btn-primary:hover {
  background-color: #14B8A6;
  border-color: #14B8A6;
}
</style>