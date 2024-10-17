<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      
      <a
        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        Dashboard
      </a>
      <!-- Form -->
      <form
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
      >
        <div class="relative flex w-full flex-wrap items-stretch">
          <!--span
            class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search here..."
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
          /-->
        </div>
      </form>
      <!-- Dimensions -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
            href="/"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fa fa-home text-lg leading-lg mr-2"
            />
            Inicio
          </a>
        </li>
        <dimensions-menu />
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import DimensionsMenu from "@/components/Dropdowns/DimensionsMenu.vue";

export default {
  components: {
    DimensionsMenu,
  },
};
</script>
