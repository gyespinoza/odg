<template>
  <div>
        <!--information /-->
        <about />
        <Dimensions />
        <Testimonials />
  </div>
</template>
<script>
import Dimensions from "@/components/Home/Dimensions.vue";
//import Information from "@/components/Home/Information.vue";
import About from '@/components/Home/About.vue';
import Testimonials from "@/components/Home/Testimonials.vue";
import AOS from "aos";
import "aos/dist/aos.css";


export default {
  name: "dashboard-page",
  components: {
    Dimensions,
    //Information,
    About,
    Testimonials
  },
  mounted() {   
     AOS.init({});
  }
};
</script>
