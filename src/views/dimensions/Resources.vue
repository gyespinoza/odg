<template>
    <div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">          
          <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
            <Indicators />            
          </div>
        </div>
      </div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
            <IndicatorsResources />
          </div>
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>


import IndicatorsResources from '@/components/Resources/IndicatorsResources.vue';
import Indicators from '@/components/Resources/Indicators.vue';
  
  export default {
    name: "Resources",
    components: {
      
      IndicatorsResources,
      Indicators
    },
    mounted() {
      this.$emit("set-title","Recursos y Apoyo");
    },
  };
  </script>
  
  