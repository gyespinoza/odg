<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
              Dimensión recursos y apoyo
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
    name: 'MultipleGaugeChartsCard',
    components: {
      VueGauge,
    },
    setup() {
      const chartData = ref([
        { label: 'Recursos tecnológicos', value: 4.4 },
        { label: 'Laboratorios de prácticas', value: 4.5 },
        { label: 'Cursos/programas de desarrollo profesional', value: 3.9 },
        { label: 'Programas de intercambio académico', value: 3.4 },
        { label: 'Programas de financiamiento y becas', value: 3.6 },
        { label: 'Servicios de asesoría para orientación y apoyo', value: 4.3 }
      ]);
  
      return {
        chartData
      };
    }
  });
  </script>
  
  <style scoped>
  
  .gauge-row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
  }  
  .gauge-item {
    flex: 0 0 auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gauge-label {
    text-align: center;
    font-size: 12px;
    color: #666;
    word-wrap: break-word;
  }
  </style>