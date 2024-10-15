<template>
    <div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
           <ConditioningComponent />
          </div>
          <div class="w-full lg:w-8/12 xl:w-8/12 px-4">
            <Indicators />
          </div>
        </div>
      </div>
      <div class="px-4 md:px-15 mx-auto w-full">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
            <IndicatorsConditioning />
          </div>
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import ConditioningComponent from '@/components/Conditioning/ConditioningComponent.vue';
import IndicatorsConditioning from '@/components/Conditioning/IndicatorsConditioning.vue';
import Indicators from '@/components/Conditioning/Indicators.vue';  

  export default {
    name: "Conditioning",
    components: {
      ConditioningComponent,
      IndicatorsConditioning,
      Indicators
    },
    mounted() {
      this.$emit("set-title","Condicionamiento y Discriminación Social");
    },
  };
  </script>
  
  