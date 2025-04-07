<template>
  <div>
    <div class="px-4 md:px-15 mx-auto w-full">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-semibold text-gray-800">
          Acceso, permanencia y logros
        </h2>
      </div>
      <div class="flex flex-wrap -mx-4 w-full">
        <div class="w-full xl:w-8/12 px-4 mb-8">
          <div class="mb-8">
            <DistributionFIA />
          </div>
          <div>
            <DistributionFCT />
          </div>
        </div>
        <div class="w-full xl:w-4/12 px-5 mb-8">
          <GraduateGraph />
        </div>

        <div class="w-full px-4">
          <Graduate />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DistributionFIA from "@/components/Access/DistributionFIA.vue";
import DistributionFCT from "@/components/Access/DistributionFCT.vue";
import Graduate from "@/components/Access/Graduate.vue";
import GraduateGraph from "@/components/Access/GraduateGraph.vue";

export default {
  name: "Access",
  components: {
    DistributionFIA,
    DistributionFCT,
    Graduate,
    GraduateGraph,
  },
  mounted() {
    this.$emit("set-title", "Acceso, permanencia y logros");
  },
};
</script>
