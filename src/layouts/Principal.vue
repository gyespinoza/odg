<template>
  <div>
    <principal-nav-bar />
    <section class="home py-8 d-flex align-items-center" id="header">
      <div class="container" data-aos="fade-right">
        <h1 class="headline text-white" style="margin-top:25rem">
          Observatorio de <span class="home_text">Género</span><br />Universidad
          Gerardo Barrios
        </h1>
        <p class="para para-light py-3"></p>
      </div>
      <!-- end of container -->
    </section>

    <div class="">
      <router-view />
      <footer-principal />
    </div>
  </div>
</template>
<script>
import PrincipalNavBar from "@/components/Navbars/PrincipalNavBar.vue";
// import Sidebar from "@/components/Sidebar/Sidebar.vue";
//import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterPrincipal from "@/components/Footers/FooterPrincipal.vue";
//import SpaceHeaderVue from '@/components/Headers/SpaceHeader.vue';
import bacngroundImage from "@/assets/img/backgroundI.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "admin-layout",
  data() {
    return {
      bacngroundImage,
    };
  },
  components: {
    PrincipalNavBar,
    // Sidebar,
    //HeaderStats,
    //SpaceHeaderVue,
    FooterPrincipal,
  },
  mounted() {
    AOS.init({});
  },
};
</script>
