<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
    <div class="rounded-t mb-0 px-6 py-4 border-0">
      <div class="flex flex-wrap items-center mb-4">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-2 text-xs">
            Porcentaje de mujeres y hombres matriculados por carrera STEM/TIC
          </h6>
          <h2 class="text-blueGray-700 text-2xl">
            Facultad de Ingeniería y Arquitectura
          </h2>
        </div>
      </div>

      <div class="chart-container">
        <canvas ref="combinedChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
  name: 'EngineeringDistributionChart',
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.createChart();
  },
  methods: {
    calculatePercentages(modalidad) {
      const data = {
        Presencial: {
          'Ingeniería Civil': { mujeres: 59, hombres: 176 },
          'Ingeniería Industrial': { mujeres: 35, hombres: 61 },
          'Técnico en Ingeniería Civil': { mujeres: 4, hombres: 8 }
        },
        Semipresencial: {
          'Ingeniería Civil': { mujeres: 40, hombres: 147 },
          'Ingeniería Industrial': { mujeres: 24, hombres: 42 },
          'Técnico en Ingeniería Civil': { mujeres: 7, hombres: 21 }
        }
      };

      const totales = Object.values(data[modalidad]).reduce(
        (acc, curr) => {
          acc.mujeres += curr.mujeres;
          acc.hombres += curr.hombres;
          acc.total += curr.mujeres + curr.hombres;
          return acc;
        },
        { mujeres: 0, hombres: 0, total: 0 }
      );

      return {
        mujeres: ((totales.mujeres / totales.total) * 100).toFixed(1),
        hombres: ((totales.hombres / totales.total) * 100).toFixed(1)
      };
    },
    createChart() {
      const ctx = this.$refs.combinedChart.getContext('2d');
      function createGradient(ctx, color1, color2, options = {}) {
        const gradient = ctx.createLinearGradient(0, 0, 400, 0);
        const opacity = options.opacity || '80'; // 80 = 50% transparente

        // Borde inicial fuerte
        gradient.addColorStop(0, color1);
        // Transición a transparencia
        gradient.addColorStop(0.1, color1 + opacity);
        // Zona media transparente
        gradient.addColorStop(0.5, color1 + opacity);
        gradient.addColorStop(0.5, color2 + opacity);
        // Transición a color sólido
        gradient.addColorStop(0.9, color2 + opacity);
        // Borde final fuerte
        gradient.addColorStop(1, color2);

        return gradient;
      }

      const presencialPct = this.calculatePercentages('Presencial');
      const semiPct = this.calculatePercentages('Semipresencial');

      const data = {
        labels: ['Presencial', 'Semipresencial'],
        datasets: [
          // Ing. Civil - Mujeres
          {
            type: 'bar',
            label: 'Ing. Civil - Mujeres',
            data: [59, 40],
            backgroundColor: createGradient(ctx, '#FFE1E1', '#FFC4C4', { opacity: '80' }), // Rosa suave
            borderColor: '#FF9999',
            borderWidth: 1,
            stack: 'Stack 0',
            order: 3
          },
          // Ing. Civil - Hombres
          {
            type: 'bar',
            label: 'Ing. Civil - Hombres',
            data: [176, 147],
            backgroundColor: createGradient(ctx, '#E1E9FF', '#C4D5FF', { opacity: '80' }), // Azul suave
            borderColor: '#99B8FF',
            borderWidth: 1,
            stack: 'Stack 0',
            order: 3
          },
          // Ing. Industrial - Mujeres
          {
            type: 'bar',
            label: 'Ing. Industrial - Mujeres',
            data: [35, 24],
            backgroundColor: createGradient(ctx, '#E1FFF4', '#C4FFE9', { opacity: '80' }), // Verde menta suave
            borderColor: '#99FFD1',
            borderWidth: 1,
            stack: 'Stack 1',
            order: 3
          },
          // Ing. Industrial - Hombres
          {
            type: 'bar',
            label: 'Ing. Industrial - Hombres',
            data: [61, 42],
            backgroundColor: createGradient(ctx, '#FFE8F7', '#FFD6EF', { opacity: '80' }), // Rosa lavanda suave
            borderColor: '#FFADD9',
            borderWidth: 1,
            stack: 'Stack 1',
            order: 3
          },
          // Técnico - Mujeres
          {
            type: 'bar',
            label: 'Téc. Civil - Mujeres',
            data: [4, 7],
            backgroundColor: createGradient(ctx, '#FFF3E1', '#FFE4C4', { opacity: '80' }), // Melocotón suave
            borderColor: '#FFCC99',
            borderWidth: 1,
            stack: 'Stack 2',
            order: 3
          },
          // Técnico - Hombres
          {
            type: 'bar',
            label: 'Téc. Civil - Hombres',
            data: [8, 21],
            backgroundColor: createGradient(ctx, '#E1F6FF', '#C4EEFF', { opacity: '80' }), // Azul cielo suave
            borderColor: '#99DDFF',
            borderWidth: 1,
            stack: 'Stack 2',
            order: 3
          },
          // Línea de porcentaje total de mujeres
          {
            type: 'line',
            label: '% Total Mujeres',
            data: [presencialPct.mujeres, semiPct.mujeres],
            borderColor: '#FF7E7E', // Rosa medio
            backgroundColor: 'rgba(255, 126, 126, 0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#FF7E7E',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: false,
            tension: 0.4,
            order: 1,
            yAxisID: 'percentage'
          },
          // Línea de porcentaje total de hombres
          {
            type: 'line',
            label: '% Total Hombres',
            data: [presencialPct.hombres, semiPct.hombres],
            borderColor: '#7E9FFF', // Azul medio
            backgroundColor: 'rgba(126, 159, 255, 0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#7E9FFF',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: false,
            tension: 0.4,
            order: 2,
            yAxisID: 'percentage'
          }
        ]
      };

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              type: 'linear',
              position: 'left',
              stacked: true,
              grid: {
                color: '#E2E8F0'
              },
              ticks: {
                font: {
                  size: 11
                }
              },
              title: {
                display: true,
                text: 'Número de estudiantes',
                font: {
                  size: 12,
                  weight: '500'
                }
              }
            },
            percentage: {
              type: 'linear',
              position: 'right',
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 11
                },
                callback: function (value) {
                  return value + '%';
                }
              },
              title: {
                display: true,
                text: 'Porcentaje por género',
                font: {
                  size: 12,
                  weight: '500'
                }
              },
              min: 0,
              max: 100
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 12,
                  weight: '500'
                }
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
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
                label: function (context) {
                  if (context.dataset.type === 'line') {
                    return `${context.dataset.label}: ${context.parsed.y}%`;
                  }
                  const value = context.parsed.y;
                  const carrera = context.dataset.label.split(' - ')[0];
                  const total = data.datasets
                    .filter(ds => ds.type === 'bar' && ds.label.startsWith(carrera))
                    .reduce((acc, ds) => acc + ds.data[context.dataIndex], 0);
                  const percentage = ((value / total) * 100).toFixed(1);
                  return `${context.dataset.label}: ${value} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
</script>

<style scoped>
.chart-container {
  height: 400px;
  width: 100%;
  position: relative;
}
</style>