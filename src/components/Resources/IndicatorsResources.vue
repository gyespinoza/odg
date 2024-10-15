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
  name: 'HorizontalStackedBarChart',
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
              backgroundColor: '#EE6B6E'
            },
            {
              label: 'En desacuerdo',
              data: [2, 0, 7, 11, 9, 2],
              backgroundColor: '#F69697'
            },
            {
              label: 'Ni de acuerdo ni en desacuerdo',
              data: [6, 7, 22, 36, 38, 11],
              backgroundColor: '#D4D4D4'
            },
            {
              label: 'De acuerdo',
              data: [42, 34, 40, 26, 23, 37],
              backgroundColor: '#4ECDC4'
            },
            {
              label: 'Totalmente de acuerdo',
              data: [49, 58, 29, 21, 25, 49],
              backgroundColor: '#00B3A1'
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: function(value) {
                  return value + '%';
                }
              }
            },
            y: {
              stacked: true
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
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
          }
        },
        plugins: [{
          id: 'percentageLabels',
          afterDatasetsDraw(chart) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = '12px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';

            data.datasets.forEach((dataset, i) => {
              chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
                const { x, y } = datapoint.tooltipPosition();
                const value = dataset.data[index];
                if (value > 0) {  // Solo muestra el porcentaje si es mayor al 0%
                  ctx.fillText(`${value}%`, x, y);
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
</style>