<template>
    <div>
      <div class="relative md:ml-100 bg-blueGray-100">
        <principal-nav-bar />
        <sidebar-vue />
        <div class="relative bg-teal-500 md:pt-32 pb-48 pt-16">
          <div class="container px-4 md:px-15 mx-auto w-full">
            <div class="dimension-title" v-if="currentTitle">
              <h1>{{ currentTitle }}</h1>
            </div>
          </div>
        </div>
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <router-view @set-title="setTitle" />
          <footer-principal />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PrincipalNavBar from "@/components/Navbars/PrincipalNavBar.vue";
  import FooterPrincipal from "@/components/Footers/FooterPrincipal.vue";
  import SidebarVue from '../components/Sidebar/Sidebar.vue';

  export default {
    name: "admin-layout",
    components: {
      PrincipalNavBar,
      FooterPrincipal,
      SidebarVue
    },
    data() {
      return {
        currentTitle: "",
      };
    },
    methods: {
      setTitle(title) {
        this.currentTitle = title;
      },
    },
  };
  </script>
  
  <style scoped>
  .dimension-title h1 {
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    text-align: left;
  }
  </style>
  