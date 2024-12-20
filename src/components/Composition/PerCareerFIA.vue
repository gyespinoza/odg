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
  name: 'PerCareerFIA',
  data() {
    return {
      chart: null,
      colors: {
        primary: '#30D1B9',    // Verde turquesa
        secondary: '#82D9D2', //verde turquesa claro
        women: {
          dark: '#FF8D96',     // Rosa más oscuro
          main: '#FE94AB',     // Rosa principal
          light: '#FE94AB'     // Rosa más claro
        },
        men: {
          dark: '#3B82F6',     // Azul más oscuro
          main: '#60A5FA',     // Azul principal
          light: '#93C5FD'     // Azul más claro
        }
      },
      chartData: {
        labels: ['Presencial', 'Semipresencial'],
        datasets: []
      }
    };
  },
  mounted() {
    this.createModalidadChart();
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
    createModalidadChart() {
      const ctx = this.$refs.combinedChart.getContext('2d');
      const presencialPct = this.calculatePercentages('Presencial');
      const semiPct = this.calculatePercentages('Semipresencial');

      this.chartData = {
        labels: ['Presencial', 'Semipresencial'],
        datasets: [
          {
            type: 'bar',
            label: 'Ing. Civil - Mujeres',
            data: [59, 40],
            backgroundColor: this.colors.women.dark,
            borderColor: this.colors.women.dark,
            borderWidth: 1,
            stack: 'Stack 0',
            order: 3
          },
          {
            type: 'bar',
            label: 'Ing. Civil - Hombres',
            data: [176, 147],
            backgroundColor: this.colors.men.dark,
            borderColor: this.colors.men.dark,
            borderWidth: 1,
            stack: 'Stack 0',
            order: 3
          },
          {
            type: 'bar',
            label: 'Ing. Industrial - Mujeres',
            data: [35, 24],
            backgroundColor: this.colors.women.main,
            borderColor: this.colors.women.main,
            borderWidth: 1,
            stack: 'Stack 1',
            order: 3
          },
          {
            type: 'bar',
            label: 'Ing. Industrial - Hombres',
            data: [61, 42],
            backgroundColor: this.colors.men.main,
            borderColor: this.colors.men.main,
            borderWidth: 1,
            stack: 'Stack 1',
            order: 3
          },
          {
            type: 'bar',
            label: 'Téc. Civil - Mujeres',
            data: [4, 7],
            backgroundColor: this.colors.women.light,
            borderColor: this.colors.women.light,
            borderWidth: 1,
            stack: 'Stack 2',
            order: 3
          },
          {
            type: 'bar',
            label: 'Téc. Civil - Hombres',
            data: [8, 21],
            backgroundColor: this.colors.men.light,
            borderColor: this.colors.men.light,
            borderWidth: 1,
            stack: 'Stack 2',
            order: 3
          },
          {
            type: 'line',
            label: '% Total Mujeres',
            data: [presencialPct.mujeres, semiPct.mujeres],
            borderColor: this.colors.primary,
            backgroundColor: this.colors.primary,
            borderWidth: 2,
            pointBackgroundColor: this.colors.primary,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: false,
            tension: 0.4,
            order: 1,
            yAxisID: 'percentage'
          },
          {
            type: 'line',
            label: '% Total Hombres',
            data: [presencialPct.hombres, semiPct.hombres],
            borderColor: this.colors.secondary,
            backgroundColor: this.colors.secondary,
            borderWidth: 2,
            pointBackgroundColor: this.colors.secondary,
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

      const chartConfig = {
        type: 'bar',
        data: this.chartData,
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
                callback: function(value) {
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
                label: function(context) {
                  if (context.dataset.type === 'line') {
                    return `${context.dataset.label}: ${context.parsed.y}%`;
                  }
                  const value = context.parsed.y;
                  const carrera = context.dataset.label.split(' - ')[0];
                  
                  const total = context.chart.data.datasets
                    .filter(ds => ds.type === 'bar' && ds.label.startsWith(carrera))
                    .reduce((acc, ds) => acc + ds.data[context.dataIndex], 0);
                    
                  const percentage = ((value / total) * 100).toFixed(1);
                  return `${context.dataset.label}: ${value} (${percentage}%)`;
                }
              }
            }
          }
        }
      };

      this.chart = new Chart(ctx, chartConfig);
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
  height: 500px;
  width: 100%;
  position: relative;
}
</style>