<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 transition-all duration-300"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      
      <a
        class="text-sm uppercase hidden lg:inline-block font-semibold"
        href="javascript:void(0)"
      >
        Dashboard
      </a>
      <!-- Form -->
      <form
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
      >
        <div class="relative flex w-full flex-wrap items-stretch">
        </div>
      </form>
      <!-- Dimensions -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <li class="flex items-center">
          <a
            class="px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
            href="odg/index#/#"
          >
            <i
              class="fa fa-home text-lg leading-lg mr-2"
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
