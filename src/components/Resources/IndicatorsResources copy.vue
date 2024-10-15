<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h2 class="text-blueGray-700 text-xl font-semibold">
            Resultados por indicador
          </h2>
        </div>
      </div>
      <div class="chart-container">
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: 'StackedBarChart',
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = this.$refs.chartCanvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'Acceso a recursos tecnológicos',
            'Acceso al uso de laboratorios de prácticas',
            'Acceso a cursos o programas de desarrollo profesional',
            'Acceso a programas de intercambio académico o estudios',
            'Acceso a becas o programas de financiamiento',
            'Acceso a programas de asesoría'
          ],
          datasets: [            
            {
              label: 'Totalmente en desacuerdo',
              data: [1, 1, 2, 6, 5, 1],
              backgroundColor: '#D14F2A'
            },
            {
              label: 'En desacuerdo',
              data: [2, 0, 7, 11, 9, 2],
              backgroundColor: '#F8C9B4'
            },
            {
              label: 'Ni de acuerdo ni en desacuerdo',
              data: [6, 7, 22, 36, 38, 11],
              backgroundColor: '#AEAEAE'
            },
            {
              label: 'De acuerdo',
              data: [42, 34, 40, 26, 23, 37],
              backgroundColor: '#4E7AC7'
            },
            {
              label: 'Totalmente de acuerdo',
              data: [49, 58, 29, 21, 25, 49],
              backgroundColor: '#1E4477'
            },
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              display: true,
              max: 100,
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            },
            y: {
              stacked: true,
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.x !== null) {
                    label += context.parsed.x + '%';
                  }
                  return label;
                }
              }
            }
          },
          layout: {
            padding: {
              top: 20,
              right: 30,
              bottom: 20,
              left: 10
            }
          }
        },
        plugins: [{
          id: 'percentageLabels',
          afterDatasetsDraw(chart) {
            const { ctx, data, scales: { y } } = chart;
            ctx.save();
            ctx.font = 'bold 12px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            data.datasets.forEach((dataset, i) => {
              chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
                const { x: dataX } = datapoint.tooltipPosition();
                const yValue = y.getPixelForValue(index);
                const value = dataset.data[index];
                if (value > 5) {  // Solo muestra el porcentaje si es mayor al 5%
                  ctx.fillText(`${value}%`, dataX, yValue);
                }
              });
            });
            ctx.restore();
          }
        }]
      });
    }
  }
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px;
  position: relative;
}
.chart-container::before,
.chart-container::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: repeating-linear-gradient(to right, #999, #999 5px, transparent 5px, transparent 10px);
}
.chart-container::before {
  top: 0;
}
.chart-container::after {
  bottom: 0;
}
</style>