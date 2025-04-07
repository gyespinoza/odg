<template>
  <div class="flex items-center">
    <div>      
      <a class="px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
        href="#"
        ref="btnDropdownRef"
        @click.prevent="toggleDropdown"
      >
        <i
          class="fa fa-line-chart text-lg leading-lg mr-2"
        />
        Dimensiones
      </a>
      <div
        ref="popoverDropdownRef"
        class="bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg min-w-48"
        :class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
      >
        <span
          class="text-sm pt-2 pb-0 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        >
          Análisis Institucional
        </span>
        <router-link
          v-for="link in analysisLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          @click="closeDropdown"
        >
          {{ link.text }}
        </router-link>
        
        <div class="h-0 my-2 border border-solid border-blueGray-100" />

        <span
          class="text-sm pt-2 pb-0 px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        >
          Bienestar Universitario
        </span>
        <router-link
          v-for="link in wellbeingLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          @click="closeDropdown"
        >
          {{ link.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { createPopper } from "@popperjs/core";

export default {
  setup() {
    const router = useRouter();
    const dropdownPopoverShow = ref(false);
    const btnDropdownRef = ref(null);
    const popoverDropdownRef = ref(null);

    const analysisLinks = [
      { to: "/dashboard/composition", text: "Composición de la comunidad académica" },
      { to: "/dashboard/access", text: "Acceso, permanencia y logros" },
      // Agrega más enlaces si es necesario
    ];

    const wellbeingLinks = [
      { to: "/dashboard/resources", text: "Recursos y apoyo" },
      { to: "/dashboard/Inclusive", text: "Ambiente inclusivo" },
      { to: "/dashboard/Conditioning", text: "Condicionamiento y discriminación social" },
    ];

    const toggleDropdown = () => {
      if (dropdownPopoverShow.value) {
        closeDropdown();
      } else {
        openDropdown();
      }
    };

    const openDropdown = () => {
      dropdownPopoverShow.value = true;
      createPopper(btnDropdownRef.value, popoverDropdownRef.value, {
        placement: "bottom-start",
      });
      setTimeout(() => {
        document.addEventListener('click', closeDropdownOnClickOutside);
      }, 0);
    };

    const closeDropdown = () => {
      dropdownPopoverShow.value = false;
      document.removeEventListener('click', closeDropdownOnClickOutside);
    };

    const closeDropdownOnClickOutside = (event) => {
      if (popoverDropdownRef.value && btnDropdownRef.value &&
          !popoverDropdownRef.value.contains(event.target) && 
          !btnDropdownRef.value.contains(event.target)) {
        closeDropdown();
      }
    };

    onMounted(() => {
      router.afterEach(closeDropdown);
    });

    onUnmounted(() => {
      document.removeEventListener('click', closeDropdownOnClickOutside);
    });

    return {
      dropdownPopoverShow,
      btnDropdownRef,
      popoverDropdownRef,
      toggleDropdown,
      closeDropdown,
      analysisLinks,
      wellbeingLinks
    };
  }
};
</script>