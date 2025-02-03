<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
              Dimensión ambiente inclusivo
            </h6>
            <h2 class="text-blueGray-700 text-xl">
              Resultados por indicador
            </h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="gauge-row">
          <div v-for="(item, index) in chartData" :key="index" class="gauge-item">
            <div class="gauge-container">
              <vue-gauge
                :refid="'gauge-' + index"
                class="metricsGauge"
                :options="{
                  needleValue: item.value * 20,
                  centralLabel: item.value.toFixed(1),
                  needleColor: '#333333',
                  needleWidth: 2,
                  needleCircleSize: 7,
                  needleCircleColor: '#333333',
                  needleCircleOuter: true,
                  needleCircleInner: false,
                  needleType: 'line',
                  arcDelimiters: [20, 40, 60, 80],
                  arcColors: ['#c4fff9', '#9ceaef', '#68d8d6', '#3dccc7', '#07beb8'],
                  arcOverEffect: true,
                  chartWidth: 180,
                  hasNeedle: true,
                  needleUpdateSpeed: 1000,
                  rangeLabel: ['0', '5'],
                  centralLabelStyle: '#444',
                  rangeLabelStyle: '#999'
                }"
              >
              </vue-gauge>
            </div>
            <p class="mt-2 text-xs font-medium text-gray-600 text-center h-12 overflow-hidden">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import VueGauge from "vue-gauge";
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Indicators',
    components: {
      VueGauge,
    },
    setup() {
      const chartData = ref([
        { label: 'Percepción de valoración y respeto en el ambiente académico', value: 4.4 },
        { label: 'Libertad de expresión de opiniones en el entorno educativo', value: 4.3 },
        { label: 'Percepción de ausencia de discriminación y acoso en el ámbito académico', value: 4.4 },
        { label: 'Sensación de seguridad en el ambiente académico', value: 4.5 },
        { label: 'Disponibilidad de apoyo psicosocial para estudiantes', value: 4.0 }
      ]);
  
      return {
        chartData
      };
    }
  });
  </script>
  
  <style scoped>
.container {
  width: 100%;
  overflow-x: auto;
}
.gauge-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 10px 0;
}

.gauge-item {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gauge-container {
  width: 180px;
}

p {
  height: auto !important;
  min-height: 48px;
  overflow: visible !important;
  line-height: 1.2;
  padding: 0 5px;
}
</style>