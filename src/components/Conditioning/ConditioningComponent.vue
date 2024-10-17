<template>
  <div
    
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h2 class="text-blueGray-700 text-base">
            Condicionamiento y Discriminación Social
          </h2>
        </div>
      </div>
      <div class="gauge-container">

      <vue-gauge
        :refid="'conditioning-support-gauge'"
        :class="'metricsGauge'"
        :options="{
          needleValue: 3.3*20,
          centralLabel: '3.3',
          needleColor: '#333333',
          needleWidth: 2,
          needleCircleSize: 10,
          needleCircleColor: '#333333',
          needleCircleOuter: true,
          needleCircleInner: false,
          needleType: 'line',
          arcDelimiters: [20, 40, 60, 80],
          arcColors: ['#c4fff9', '#9ceaef', '#68d8d6', '#3dccc7', '#07beb8'],
          arcOverEffect: true,
          chartWidth: 300,
          hasNeedle: true,
          needleUpdateSpeed: 1000,
          rangeLabel: ['0', '5'],
          centralLabelStyle: '#444',
          rangeLabelStyle: '#999'
        
        }"
      >
      </vue-gauge>
      </div>
    </div>
  </div>
</template>

<script>
import VueGauge from "vue-gauge";

export default {
  name: "ConditioningComponent",
  components: {
    VueGauge,
  },
};
</script>

<style scoped>
.container {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gauge-title {
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: bold;
  color: #2c3e50;
}
.metricsGauge {
  width: 300px;
  height: 200px;
}
.gauge-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
