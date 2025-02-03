<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
              Dimensión condicionamiento y discriminación social
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
        { label: 'Exposición a mensajes o expectativas sociales que desalientan el interés por las áreas STEM', value: 3.0 },
        { label: 'Apoyo familiar o comunitario hacia las metas académicas', value: 4.3 },
        { label: 'Experiencias de discriminación por género en entornos académicos', value: 2.7 },
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
    align-items: center ;
    gap: 30px;
    padding: 10px 0;
  }
  
  .gauge-item {
    flex: 0 0 auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .gauge-container {
    width: 180px;
  }
  
  .gauge-label {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #666;
    max-width: 180px;
    word-wrap: break-word;
  }
  </style>