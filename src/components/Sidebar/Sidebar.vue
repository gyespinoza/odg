<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none  rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        to="/#"
      >
        ODG | UGB
      </router-link>
      
  
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/#"
              >
                ODG | UGB
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>

        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <!--h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Navegación
        </h6-->
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link
              to="/dashboard"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-lightBlue-600'
                    : 'text-blueGray-700',
                ]"
              >
                <i
                  class="fas fa-tv mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Dashboard
              </a>
            </router-link>
          </li>
        </ul>
        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Análisis Institucional
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <router-link
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 block"
              to="/dashboard/composition"  
                          
            >
              <i class="fas fa-city	text-blueGray-300 mr-2 text-sm"
              ></i>
              Comunidad académica
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3  block"
              to="/dashboard/access"
            >
              <i class="fa fa-graduation-cap text-blueGray-300 mr-2 text-sm"></i>
              Acceso, permanencia y logros
            </router-link>
          </li>
        </ul>


         <!-- Divider -->
         <hr class="my-4 md:min-w-full" />
         <!-- Heading -->
         <h6
           class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
         >
           Bienestar Universitario
         </h6>
         <!-- Navigation -->
 
         <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
           <li class="items-center">
             <router-link
               class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 block"
               to="/dashboard/resources"
             >
               <i class="fas fa-users text-blueGray-300 mr-2 text-sm"></i>
               Recursos y apoyo
             </router-link>
           </li>
 
           <li class="items-center">
             <router-link
               class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3  block"
               to="/dashboard/Inclusive"
             >
               <i class="fas fa-circle-nodes text-blueGray-300 mr-2 text-sm"></i>
               Ambiente inclusivo
             </router-link>
           </li>

           <li class="items-center">
            <router-link
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3  block"
              to="/dashboard/Conditioning"
            >
              <i class="fas fa-scale-unbalanced text-blueGray-300 mr-2 text-sm"></i>
              Condicionamiento y discriminación social
            </router-link>
          </li>
         </ul>
 
          <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Laboratorio de género
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
       </ul>


      </div>
    </div>
  </nav>
</template>
); }

<script>
//import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
//import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
  },
};
</script>
