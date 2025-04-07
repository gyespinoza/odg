<template>
  <div>
    <header-stats />

    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded py-12">
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
              Valoración por dimensión
            </h6>
            <h2 class="text-blueGray-700 text-xl">
              Bienestar Universitario
            </h2>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-15 mx-auto w-full py-1">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <ResourcesComponent />
          </div>
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <EnvironmentComponent />
          </div>
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <ConditioningComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderStats from '@/components/Headers/HeaderStats.vue';
import ResourcesComponent from '@/components/Resources/ResourcesComponent.vue';
import EnvironmentComponent from '@/components/Environment/EnvironmentComponent.vue';
import ConditioningComponent from '@/components/Conditioning/ConditioningComponent.vue';


export default {
  name: "Access",
  components: {
    HeaderStats,
    ResourcesComponent,
    EnvironmentComponent,
    ConditioningComponent,
  },
  mounted() {
    this.$emit("set-title", "Dashboard");
  },
};
</script>