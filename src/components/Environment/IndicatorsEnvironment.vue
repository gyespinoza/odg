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
  name: 'IndicatorsEnvironement',
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
            'Percepción de valoración y respeto en el ambiente académico',
            'Libertad de expresión de opiniones en el entorno educativo',
            'Percepción de ausencia de discriminación y acoso en el ámbito académico',
            'Sensación de seguridad en el ambiente académico',
            'Disponibilidad de apoyo psicosocial para estudiantes',
          ],
          datasets: [
            {
              label: 'Totalmente en desacuerdo',
              data: [0, 2, 2, 1, 2],
              backgroundColor: '#EE6B6E'
            },
            {
              label: 'En desacuerdo',
              data: [1, 1, 3, 1, 3],
              backgroundColor: '#F69697'
            },
            {
              label: 'Ni de acuerdo ni en desacuerdo',
              data: [7, 8, 5, 5, 24],
              backgroundColor: '#D4D4D4'
            },
            {
              label: 'De acuerdo',
              data: [42, 43, 32, 31, 38],
              backgroundColor: '#4ECDC4'
            },
            {
              label: 'Totalmente de acuerdo',
              data: [50, 47, 58, 63, 33],
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
              max: 100,  // Establecemos el máximo del eje X a 100
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