<template>
    <div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <EnvironmentComponent />
          </div>
          <div class="w-full lg:w-8/12 xl:w-8/12 px-4">            
            <Indicators />
          </div>
        </div>
      </div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
            <IndicatorsEnvironment />
          </div>
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import EnvironmentComponent from '@/components/Environment/EnvironmentComponent.vue';
import Indicators from '@/components/Environment/Indicators.vue';
import IndicatorsEnvironment from '@/components/Environment/IndicatorsEnvironment.vue'; 
  
  export default {
    name: "Inclusive",
    components: {
      EnvironmentComponent,
      Indicators,
      IndicatorsEnvironment
    },
    mounted() {
      this.$emit("set-title","Ambiente Inclusivo");
    },
  };
  </script>
  
  