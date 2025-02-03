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
  name: 'IndicatorsConditioning',
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
            'Exposición a mensajes sociales que desalientan el interés por las áreas STEM',
            'Apoyo familiar o comunitario hacia las metas académicas',
            'Experiencias de discriminación por género en entornos académicos',
          ],
          datasets: [
            {
              label: 'Totalmente en desacuerdo',
              data: [27, 1, 13],
              backgroundColor: '#EE6B6E'
            },
            {
              label: 'En desacuerdo',
              data: [17, 1, 16],
              backgroundColor: '#F69697'
            },
            {
              label: 'Ni de acuerdo ni en desacuerdo',
              data: [30, 20, 40],
              backgroundColor: '#D4D4D4'
            },
            {
              label: 'De acuerdo',
              data: [10, 28, 15],
              backgroundColor: '#4ECDC4'
            },
            {
              label: 'Totalmente de acuerdo',
              data: [16, 51, 16],
              backgroundColor: '#00B3A1'
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          barThickness: 25,  // Aumentado el grosor de las barras
          maxBarThickness: 30,
          categoryPercentage: 0.8,  // Ajusta el espacio entre grupos de barras
          barPercentage: 0.9,      // Ajusta el espacio entre barras dentro del grupo
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20
            }
          },
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false  // Oculta las líneas de la cuadrícula
              },
              ticks: {
                callback: function(value) {
                  return value + '%';
                },
                font: {
                  size: 11  // Tamaño de fuente ajustado
                }
              }
            },
            y: {
              stacked: true,
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 12  // Tamaño de fuente para las etiquetas
                },
                padding: 10  // Espacio entre etiquetas y barras
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                padding: 20,
                boxWidth: 15,
                font: {
                  size: 11
                }
              }
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
            ctx.font = '11px Arial';  
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            data.datasets.forEach((dataset, i) => {
              chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
                const { x, y } = datapoint.tooltipPosition();
                const value = dataset.data[index];
                if (value > 5) {  // Solo muestra porcentajes mayores a 5%
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
  height: 450px;  /* Altura aumentada */
  position: relative;
  margin: 10px 0;
}
</style>