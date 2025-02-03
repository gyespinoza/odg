<template>
  <div>
    <div class="px-4 md:px-15 mx-auto w-full">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-semibold text-gray-800">Composición de la comunidad académica</h2>
        <select 
          v-model="selectedFaculty"
          class="w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="FIA">Facultad de Ingeniería y Arquitectura</option>
          <option value="FCT">Facultad de Ciencia y Tecnología</option>
        </select>
      </div>

      <div class="flex flex-wrap -mx-4">
        <!-- Gráfico de Barras (8 columnas) -->
        <div class="w-full lg:w-8/12 px-4 mb-6 lg:mb-0">
          <transition name="fade" mode="out-in">
            <component :is="currentComponent" :key="selectedFaculty"/> 
          </transition>
        </div>

        <!-- Gráfico Circular (4 columnas) -->
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div class="rounded-t mb-0 px-6 py-4 border-0">
              <div class="flex flex-wrap items-center mb-4">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h6 class="uppercase text-blueGray-400 mb-2 text-xs">
                    Distribución total por género - {{ selectedFaculty }}
                  </h6>
                  <h2 class="text-blueGray-700 text-2xl">
                    
                  </h2>
                </div>
              </div>
        
              <div class="chart-container">
                <div class="chartContainer">
                  <canvas ref="pieChart"></canvas>
                </div>
              </div>
              <div class="mt-4 text-center text-sm text-gray-600">
                Total de estudiantes: {{ facultyData[selectedFaculty].total }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla de Composición -->
    <div class="w-full lg:w-12/12 px-4 mb-12 lg:mb-0">
      <table-composition />
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';
import PerCareerFCT from "@/components/Composition/PerCareerFCT.vue";
import TableComposition from "@/components/Composition/TableComposition.vue";
import PerCareer from '@/components/Composition/PerCareerFIA.vue';

export default {
  name: "Composition",
  components: {
    PerCareerFCT,
    TableComposition,
    PerCareer,
  },
  data() {
    return {
      selectedFaculty: 'FIA',
      pieChart: null,
      colors: {
        women: '#41D3BF',    // Rosa para mujeres
        men: '#82D9D2',      // Azul para hombres
        primary: '#40CBA8'   // Verde turquesa
      },
      facultyData: {
        FIA: {
          mujeres: 27.09,
          hombres: 72.91,
          total: 624
        },
        FCT: {
          mujeres: 23.72,
          hombres: 76.28,
          total: 683
        }
      }
    }
  },
  computed: {
    currentComponent() {
      return this.selectedFaculty === 'FIA' ? 'PerCareer' : 'PerCareerFCT'
    }
  },
  watch: {
    selectedFaculty(newVal) {
      this.updatePieChart(newVal);
    }
  },
  methods: {
    createPieChart(faculty) {
      const ctx = this.$refs.pieChart.getContext('2d');
      const data = this.facultyData[faculty];

      if (this.pieChart) {
        this.pieChart.destroy();
      }

      this.pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Mujeres', 'Hombres'],
          datasets: [{
            data: [data.mujeres, data.hombres],
            backgroundColor: [
              this.colors.women,
              this.colors.men
            ],
            borderColor: [
              this.colors.women,
              this.colors.men
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              align: 'center',
              labels: {
                padding: 20,
                usePointStyle: true,
                pointStyle: 'circle',
                font: {
                  size: 11,
                  weight: '500'
                }
              }
            },
            tooltip: {
              backgroundColor: 'white',
              titleColor: '#334155',
              titleFont: {
                size: 13,
                weight: '600'
              },
              bodyColor: '#64748B',
              bodyFont: {
                size: 12
              },
              borderColor: '#E2E8F0',
              borderWidth: 1,
              padding: 12,
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.formattedValue;
                  const total = data.total;
                  const count = Math.round((context.raw / 100) * total);
                  return `${label}: ${value}% (${count} estudiantes)`;
                }
              }
            }
          }
        }
      });
    },
    updatePieChart(faculty) {
      this.$nextTick(() => {
        this.createPieChart(faculty);
      });
    }
  },
  mounted() {
    this.$emit("set-title", "Composición de la Comunidad Académica");
    this.createPieChart(this.selectedFaculty);
  },
  beforeDestroy() {
    if (this.pieChart) {
      this.pieChart.destroy();
    }
  }
};
</script>

<style scoped>
select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

.chart-container {
  height: 500px;
  width: 100%;
  position: relative;
}
.chartContainer {
  height: 375px;
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .chart-container {
    height: 250px;
  }
}

@media (max-width: 640px) {
  .flex.justify-between {
    flex-direction: column;
    gap: 1rem;
  }
  
  select {
    width: 100%;
  }
}
</style>