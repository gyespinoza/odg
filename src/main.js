import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router"; //update library for web history
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
import Principal from "@/layouts/Principal.vue";
import PagesLayout from "@/layouts/PagesLayout.vue";
import LABGEN from "@/layouts/LABGEN.vue";

// views for layouts
import Index from "@/views/pages/Index.vue";
import LabGen from "@/views/pages/LabGen.vue";
import Composition from "@/views/dashboard/Composition";
import Access from "@/views/dashboard/Access.vue";
import Resources from "@/views/dashboard/Resources.vue";
import Inclusive from "@/views/dashboard/Inclusive.vue";
import Conditioning from "@/views/dashboard/Conditioning.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue"

// routes
const routes = [
  // Ruta para home
  {
    path: "/",
    component: Principal,
    children: [
      {
        path: "",
        component: Index,
      }
    ]
  },
  
  // Ruta para LabGen
  {
    path: "/labgen",
    component: LABGEN,
    children: [
      {
        path: "",
        component: LabGen,
      }
    ]
  },

  // Ruta para dimensiones
  {
    path: "/dashboard",
    component: PagesLayout,
    children: [
      {
        path: "",
        component: Dashboard,
      },
      {
        path: "composition",
        component: Composition,
      },
      {
        path: "access",
        component: Access,
      },
      {
        path: "resources",
        component: Resources,
      },
      {
        path: "inclusive",
        component: Inclusive,
      },
      {
        path: "conditioning",
        component: Conditioning,
      },
    ],
  },
  
  // Fallback: redirige a la página principal
  { 
    path: "/:pathMatch(.*)*", 
    redirect: "/" 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
