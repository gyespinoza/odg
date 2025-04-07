import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import AOS from 'aos'
import 'aos/dist/aos.css'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

AOS.init({
  // Configuraciones globales de AOS aquí
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
})

// layouts

// import Admin from "@/layouts/Admin.vue";
import Principal from "@/layouts/Principal.vue";
// import Auth from "@/layouts/Auth.vue";
import PagesLayout from "@/layouts/PagesLayout.vue";
import LABGEN from "@/layouts/LABGEN.vue";

// views for Admin layout

import Index from "@/views/pages/Index.vue";
import LabGen from "@/views/pages/LabGen.vue";
import Composition from "@/views/dimensions/Composition";
import Access from "@/views/dimensions/Access.vue";
import Resources from "@/views/dimensions/Resources.vue";
import Inclusive from "@/views/dimensions/Inclusive.vue";
import Conditioning from "@/views/dimensions/Conditioning.vue";
import Dashboard from "@/views/dimensions/Dashboard.vue"

// routes
const routes = [
  {
    path: "/pages",
    redirect: "/pages/Index",
    component: Principal,
    children: [
      {
        path: "/",
        component: Index,
      },
     
    ],
  },
  {
    path: "/pages",
    redirect: "/pages/LabGen",
    component: LABGEN,
    children: [
      {
        path: "/labgen",
        component: LabGen,
      }
    ]
  },
  {
    path: "/dimensions",
    redirect: "/composition",
    component: PagesLayout,
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
      {
        path: "/dimensions/composition",
        component: Composition,
      },
      {
        path: "/dimensions/access",
        component: Access,
      },
      {
        path: "/dimensions/resources",
        component: Resources,
      },
      {
        path: "/dimensions/inclusive",
        component: Inclusive,
      },
      {
        path: "/dimensions/conditioning",
        component: Conditioning,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
