<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h2 class="text-blueGray-700 text-xl">
            Distribución de Graduados por Género
          </h2>
        </div>
      </div>
    </div>
    
    <!-- Filtro de Año -->
    <div class="px-4 py-1 flex justify-end">
      <div>
        <label class="block text-gray-700">Año</label>
        <select v-model="selectedAno" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>

    <!-- Gráfico de Dona -->
    <div class="w-full px-4" style="height: 400px;">
      <canvas ref="doughnutChart"></canvas>
    </div>

    <!-- Tabla de distribución centrada -->
    <div class="px-4 py-3 mt-6 flex justify-center">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Masculino</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Femenino</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="year in ['2023', '2024']" :key="year">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ year }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getTotalByYearAndGender(year, 'masculino') }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getTotalByYearAndGender(year, 'femenino') }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ getTotalByYear(year) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  data() {
    return {
      selectedAno: '2023',
      chartInstance: null,
      enrollmentData: [
        {
          carrera: 'Ingeniería Civil',
          '2023': {
            masculino: { count: 159, percentage: 77 },
            femenino: { count: 48, percentage: 23 }
          },
          '2024': {
            masculino: { count: 38, percentage: 67 },
            femenino: { count: 19, percentage: 33 }
          }
        },
        // ... (resto de los datos de enrollmentData)
      ]
    }
  },
  computed: {
    chartData() {
      const totalMasculino = this.getTotalByYearAndGender(this.selectedAno, 'masculino');
      const totalFemenino = this.getTotalByYearAndGender(this.selectedAno, 'femenino');
      
      return {
        labels: ['Masculino', 'Femenino'],
        datasets: [{
          data: [totalMasculino, totalFemenino],
          backgroundColor: ['#40AFFF', '#0070C0'],
          borderColor: ['#40AFFF', '#0070C0'],
          borderWidth: 1
        }]
      };
    }
  },
  methods: {
    renderChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      const ctx = this.$refs.doughnutChart.getContext('2d');
      this.chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || '';
                  const value = context.raw;
                  const total = this.getTotalByYear(this.selectedAno);
                  const percentage = ((value / total) * 100).toFixed(1);
                  return `${label}: ${value} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    },
    getTotalByYearAndGender(year, gender) {
      return this.enrollmentData.reduce((total, carrera) => {
        return total + carrera[year][gender].count;
      }, 0);
    },
    getTotalByYear(year) {
      return this.getTotalByYearAndGender(year, 'masculino') + this.getTotalByYearAndGender(year, 'femenino');
    }
  },
  watch: {
    selectedAno() { this.renderChart(); }
  },
  mounted() {
    this.renderChart();
  }
};
</script>