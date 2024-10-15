<template>
    <div>
      <div class="relative md:ml-100 bg-blueGray-100">
        <principal-nav-bar />
        <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
         class="absolute top-0 w-full h-full bg-center bg-cover"
        :style="{ backgroundImage: `url('${bacngroundImage}')` }"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                   Laboratorio de investigación en violencias de género
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div class="mx-auto w-full -m-24">
          <router-view />
          <footer-principal />
        </div>
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

  export default {
    name: "LABGEN",
    data() {
      return {
        bacngroundImage
      }
    },
    components: {
      PrincipalNavBar,
     // Sidebar,
      //HeaderStats,
      //SpaceHeaderVue,
      FooterPrincipal,
      
    },
  };
  </script>
  