<template>
  <div>
    <div class="px-4 md:px-15 mx-auto w-full">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-semibold text-gray-800">
          Condicionamiento y discriminación social
        </h2>
      </div>
      <div class="flex flex-wrap -mx-4 w-full">
        <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
          <Indicators />
        </div>
      </div>

      <div class="flex flex-wrap -mx-4 w-full">
        <div class="w-full lg:w-8/12 xl:w-8/12 px-4">
          <IndicatorsConditioning />
        </div>
        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
          <students-comments-conditioning />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndicatorsConditioning from "@/components/Conditioning/IndicatorsConditioning.vue";
import Indicators from "@/components/Conditioning/Indicators.vue";
import StudentsCommentsConditioning from "@/components/Conditioning/StudentsCommentsConditioning.vue";

export default {
  name: "Conditioning",
  components: {
    IndicatorsConditioning,
    Indicators,
    StudentsCommentsConditioning
  },
  mounted() {
    this.$emit("set-title", "Condicionamiento y Discriminación Social");
  },
};
</script>
