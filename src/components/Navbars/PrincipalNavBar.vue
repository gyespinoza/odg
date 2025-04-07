<template>
  <!-- Navbar -->
 <nav
    ref="navbar"
    :class="[
      'fixed top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg transition-all duration-300',
      isScrolled ? 'colorNav shadow-lg' : 'bg-transparent'
    ]"
  >  <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
  
      <!-- Brand -->
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          to="/#"
        >
          ODG | UGB
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>

      <!-- MENU -->
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >

        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
              to="/"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fa fa-home text-lg leading-lg mr-2"
              />
              Inicio
            </router-link>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
              href="index#about"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fa fa-info-circle text-lg leading-lg mr-2"
              />
              Sobre ODG
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
              href="index#dimensions"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fa fa-th-large text-lg leading-lg mr-2"
              />
              Dimensiones
            </a>
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
              to="/dashboard"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fa fa-line-chart text-lg leading-lg mr-2"
              />
              Dashboard
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
              to="/labgen"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fa fa-flask text-lg leading-lg mr-2"
              />
              LABGEN
            </router-link>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
              href="#"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fa fa-commenting text-lg leading-lg mr-2"
              />
              Blog
            </a>
          </li>

      
        </ul>
      </div>
    </div>
    
  </nav>

  <!-- End Navbar -->
   
</template>


<script>
//import DimensionsMenu from "@/components/Dropdowns/DimensionsMenu.vue";

export default {
  data() {
    return {
      navbarOpen: false,
      isScrolled: false,

    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
  components: {
    //DimensionsMenu
  },
};
</script>
