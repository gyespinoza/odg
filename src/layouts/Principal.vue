<template>
  <div>
    <principal-nav-bar />
    <section class="home py-8 d-flex align-items-center" id="header">
      <div class="container" data-aos="zoom-in">
        <h1 class="headline text-white" style="margin-top:20rem; font-size: 3vw;">
          Observatorio de Género<br />          
        </h1>
        <h2 class="text-white" style="font-size: 1.5vw">Universidad
          Gerardo Barrios</h2><br /><br />
          <a href="#about" class="bHome text-white">
						DESCUBRE MÁS <span class="fa-solid fa-angle-right"></span>
					</a>
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

<style scoped>
.bHome {
  float: left;
  padding: 1vw 3vw;
  background: var(--gradient);
  color: #fff;
}
</style>