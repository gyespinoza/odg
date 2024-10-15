<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
              Distribución por género
            </h6>
            <h2 class="text-blueGray-700 text-xl">
              Ingeniería Civil
            </h2>
          </div>
        </div>
        <div v-for="(carrera, index) in carreras" :key="index" class="bg-white rounded-lg p-4 mb-4">
          <div class="flex items-center justify-between">
            <div class="flex flex-col items-center w-1/4">
              <svg width="30" height="30" viewBox="0 0 24 24" style="color: #ACD2D4">
                <path fill="currentColor" d="M12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 20v-6h-3l1.5-6h1.5l.5-2h-3l-1.5 6h2v8h3z" />
              </svg>
              <p class="text-xl font-bold text-black">{{ getMalePercentage(carrera) }}%</p>
            </div>
            <div class="w-32 h-40 flex-grow">
              <canvas :id="'chart-' + index"></canvas>
            </div>
            <div class="flex flex-col items-center w-1/4">
              <svg width="30" height="30" viewBox="0 0 24 24" style="color: #CCB2FF">
                <path fill="currentColor" d="M12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 20v-6h-3l2.5-9h5l.5 1.5h-4l-1.8 6.5h2.8v7h-2z" />
              </svg>
              <p class="text-xl font-bold text-black">{{ getFemalePercentage(carrera) }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  
  export default {
    name: 'MatriculacionGenderDoughnut',
    data() {
      return {
        carreras: [
          {
            nombre: "Ingeniería Civil",
            total: { femenino: 99, masculino: 323 }
          },
        ]
      };
    },
    mounted() {
      this.createCharts();
    },
    methods: {
      createCharts() {
        this.carreras.forEach((carrera, index) => {
          const ctx = document.getElementById('chart-' + index).getContext('2d');
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              //labels: ['Masculino', 'Femenino'],
              datasets: [{
                data: [carrera.total.masculino, carrera.total.femenino],
                backgroundColor: ['#ACD2D4', '#CCB2FF'],
                borderWidth: 0
              }]
            },
            options: {
              responsive: true,
              cutout: '70%',
              plugins: {
                legend: {
                  display: false
                },
                
              }
            }
          });
        });
      },
      getMalePercentage(carrera) {
        const total = carrera.total.masculino + carrera.total.femenino;
        return Math.round((carrera.total.masculino / total) * 100);
      },
      getFemalePercentage(carrera) {
        const total = carrera.total.masculino + carrera.total.femenino;
        return Math.round((carrera.total.femenino / total) * 100);
      }
    }
  };
  </script>
  
  <style scoped>
  .matriculacion-gender-chart {
    font-family: Arial, sans-serif;
  }
  </style>