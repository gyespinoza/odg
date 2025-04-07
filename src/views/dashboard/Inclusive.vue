<template>
  <div>
    <div class="px-4 md:px-15 mx-auto w-full">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-semibold text-gray-800">Ambiente inclusivo</h2>
      </div>
      <div class="flex flex-wrap -mx-4 w-full">
        <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
          <Indicators />
        </div>
      </div>
      <div class="flex flex-wrap -mx-4 w-full">
        <div class="w-full lg:w-8/12 xl:w-8/12 px-4">
          <IndicatorsEnvironment />
        </div>
        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
          <students-comments-environment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Indicators from "@/components/Environment/Indicators.vue";
import IndicatorsEnvironment from "@/components/Environment/IndicatorsEnvironment.vue";
import StudentsCommentsEnvironment from "@/components/Environment/StudentsCommentsEnvironment.vue";

export default {
  name: "Inclusive",
  components: {
    Indicators,
    IndicatorsEnvironment,
    StudentsCommentsEnvironment
  },
  mounted() {
    this.$emit("set-title", "Ambiente Inclusivo");
  },
};
</script>
