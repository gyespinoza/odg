<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
              Facultad de Ingeniería y Arquitectura y Facultad de Ciencia y Tecnología
            </h6>
            <h2 class="text-blueGray-700 text-xl">
               Graduados por carrera                 
            </h2>
        </div>
      </div>
    </div>
    <!-- Filtros -->
    <div class="px-4 py-2 flex">
      <div class="flex ml-auto">
        <div class="mr-4">
          <label class="block text-gray-700">Carrera</label>
          <select v-model="selectedCarrera" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="all">Todas las carreras</option>
            <option v-for="carrera in carreras" :key="carrera" :value="carrera">{{ carrera }}</option>
          </select>
        </div>
        <div class="mr-4">
          <label class="block text-gray-700">Año</label>
          <select v-model="selectedAno" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="all">Todos los años</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
       
      </div>
    </div>

    <!-- Gráfico -->
    <div class="w-full px-4">
      <canvas ref="bubbleChart" ></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  data() {
    return {
      selectedCarrera: 'all',
      selectedAno: 'all',
      selectedGenero: 'all',
      chartInstance: null,
      enrollmentData: [
        {
          carrera: 'Ingeniería Civil',
          '2023': {
            masculino: { count: 63, percentage: 79 },
            femenino: { count: 17, percentage: 21 }
          },
          '2024': {
            masculino: { count: 20, percentage: 80 },
            femenino: { count: 5, percentage: 20 }
          }
        },
        {
          carrera: 'Ingeniería Industrial',
          '2023': {
            masculino: { count: 21, percentage: 66 },
            femenino: { count: 11, percentage: 34 }
          },
          '2024': {
            masculino: { count: 1, percentage: 25 },
            femenino: { count: 3, percentage: 75 }
          }
        },
        {
          carrera: 'Técnico en Ingeniería Civil y Construcción',
          '2023': {
            masculino: { count: 13, percentage: 81 },
            femenino: { count: 3, percentage: 19 }
          },
          '2024': {
            masculino: { count: 9, percentage: 56 },
            femenino: { count: 7, percentage: 44 }
          }
        },
        {
          carrera: 'Ingeniería en Sistemas y Redes Informáticas',
          '2023': {
            masculino: { count: 61, percentage: 78 },
            femenino: { count: 17, percentage: 22 }
          },
          '2024': {
            masculino: { count: 2, percentage: 67 },
            femenino: { count: 1, percentage: 33 }
          }
        },
        {
          carrera: 'Técnico en Ingeniería en Sistemas y Redes Informáticas',
          '2023': {
            masculino: { count: 1, percentage: 100 },
            femenino: { count: 0, percentage: 0 }
          },
          '2024': {
            masculino: { count: 6, percentage: 67 },
            femenino: { count: 3, percentage: 33 }
          }
        }
      ]
    }

  },
  computed: {
    carreras() {
      return this.enrollmentData.map(item => item.carrera);
    },
    filteredData() {
      return this.enrollmentData.filter(item => 
        this.selectedCarrera === 'all' || item.carrera === this.selectedCarrera
      );
    },
    chartData() {
      const years = this.selectedAno === 'all' ? ['2023', '2024'] : [this.selectedAno];
      const genders = this.selectedGenero === 'all' ? ['masculino', 'femenino'] : [this.selectedGenero];
      
      return {
        datasets: genders.map(gender => ({
          label: gender === 'masculino' ? 'Masculino' : 'Femenino',
          data: this.filteredData.flatMap((carrera, index) => 
            years.map(year => ({
              x: year === '2023' ? 25 : 75,  // Cambiado: ahora el año está en el eje X
              y: index,  // Cambiado: ahora la carrera está en el eje Y
              r: Math.sqrt(carrera[year][gender].count) * 2,
              carrera: carrera.carrera,
              year: year,
              count: carrera[year][gender].count
            }))
          ),
          borderColor: gender === 'masculino' ? '#40AFFF' : '#0070C0',
          backgroundColor: gender === 'masculino' ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)',
          borderWidth: 2
        }))
      };
    }
  },
  watch: {
    selectedCarrera() { this.renderChart(); },
    selectedAno() { this.renderChart(); },
    selectedGenero() { this.renderChart(); }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      const ctx = this.$refs.bubbleChart.getContext('2d');      
      this.chartInstance = new Chart(ctx, {
        type: 'bubble',
        data: this.chartData,
        options: {
          responsive: true,
          scales: {
            x: {  // Ahora el eje X muestra los años
              min: 0,
              max: 100,
              ticks: {
                callback: (value) => {
                  if (value === 25) return '2023';
                  if (value === 75) return '2024';
                  return '';
                },
                stepSize: 25
              },
              grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true,
              },
              title: {
                display: true,
                text: 'Años'
              }
            },
            y: {  // Ahora el eje Y muestra las carreras
              min: -1,
              max: this.filteredData.length,
              ticks: {
                callback: (value) => {
                  const carrera = this.filteredData[value];
                  return carrera ? carrera.carrera : '';
                },
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0
              },
              grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true,
              },
              title: {
                display: true,
                text: 'Carreras'
              }
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const data = context.raw;
                  return `${data.carrera} (${data.year}): ${data.count} ${context.dataset.label}`;
                }
              }
            },
            legend: {
              display: true,
              position: 'top'
            }
          }
        }
      });
    }
  }
};
</script>