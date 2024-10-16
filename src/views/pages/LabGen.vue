<template>
    <div>
      <sponsors />
      <about />
      <activities />
      <teamVue />
    </div>
  </template>
  <script>
import About from '@/components/LABGEN/About.vue';
import Sponsors from '@/components/LABGEN/Sponsors.vue';
import Activities from '@/components/LABGEN/Activities.vue';
import TeamVue from '@/components/LABGEN/Team.vue';

  export default {
    name: "admin-layout",
    
    components: {
      About,
      Sponsors,
      Activities,
      TeamVue
    },
  };
  </script>
  