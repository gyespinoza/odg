<template>
    <div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
            <DistributionFIA />
          </div>
          <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
            <DistributionFCT />
          </div>
        </div>
      </div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-8/12 xl:w-8/12 px-4">
            <Graduate />
          </div>
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <GraduateGraph />
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import DistributionFIA from "@/components/Access/DistributionFIA.vue"; 
import DistributionFCT from '@/components/Access/DistributionFCT.vue';
import Graduate from '@/components/Access/Graduate.vue';
import GraduateGraph from '@/components/Access/GraduateGraph.vue';
  
  export default {
    name: "Access",
    components: {
      DistributionFIA,      
      DistributionFCT,
      Graduate,
      GraduateGraph
    },
    mounted() {
      this.$emit("set-title","Acceso, permanencia y logros");
    },
  };
  </script>
  
  