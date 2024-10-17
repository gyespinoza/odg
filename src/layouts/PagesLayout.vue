<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64">
      <div class="relative md:pt-3" style="background-color: #07BEB8; height: 75px">
        <div class="containerP px-4 md:px-15 mx-auto w-full">
          <admin-navbar />
          <div v-if="currentTitle" class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            <a href="#" class="text-white text-sm uppercase font-semibold">
              {{ currentTitle }}
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="containerP  md:px-10 mx-auto w-full -m-24" style="padding-top: 10rem">
        <router-view @set-title="setTitle" />
        <footer-principal />
      </div>
    </div>
  </div>

</template>

<script>
//import PrincipalNavBar from "@/components/Navbars/PrincipalNavBar.vue";
import Sidebar from '../components/Sidebar/Sidebar.vue';
import AdminNavbar from '../components/Navbars/AdminNavbar.vue';
import FooterPrincipal from "@/components/Footers/FooterPrincipal.vue";



export default {
  name: "admin-layout",
  components: {
    Sidebar,
    AdminNavbar,
    FooterPrincipal,
    //PrincipalNavBar,
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
.dimension-title {
  color: rgba(255,255,255,var(--tw-text-opacity));
  font-size: 28px;
  font-weight: 300;
  margin: 0;
  text-align: left;
  text-transform: uppercase;
  --tw-text-opacity: 1;
}
</style>
