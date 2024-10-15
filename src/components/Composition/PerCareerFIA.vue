<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
            Porcentaje de mujeres y hombres matriculados por carrera STEM/TIC
          </h6>
          <h2 class="text-blueGray-700 text-xl">
            Facultad de Ingeniería y Arquitectura
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    this.$nextTick(function () {
      // Definir colores
      const CHART_COLORS = {
        red: 'rgb(255, 99, 132)',
        blue: 'rgb(65,138,212)',
        green: 'rgb(150,218,218)',
      };

      // Definir la función transparentize
      function transparentize(color, opacity) {
        const alpha = opacity === undefined ? 0.5 : 1 - opacity;
        return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
      }

      // Datos absolutos para mostrar en el tooltip
      const totals = {
        'Ingeniería Civil': [59, 176, 40, 147],
        'Ingeniería Industrial': [35, 61, 24, 42],
        'Técnico en Ingeniería Civil y Construcción': [4, 8, 7, 21],
      };

      let config = {
        type: "line",  // Cambiado de "bar" a "line"
        data: {
          labels: [
            "Femenino Presencial",
            "Masculino Presencial",
            "Femenino Semipresencial",
            "Masculino Semipresencial",
          ],
          datasets: [
            {
              label: 'Ingeniería Civil',
              borderColor: CHART_COLORS.red,
              backgroundColor: transparentize(CHART_COLORS.red, 0.5),
              data: [25.1, 74.9, 21.4, 78.6],
              fill: false,
              tension: 0.1
            },
            {
              label: 'Ingeniería Industrial',
              borderColor: CHART_COLORS.blue,
              backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
              data: [36.5, 63.5, 36.4, 63.6],
              fill: false,
              tension: 0.1
            },
            {
              label: 'Técnico en Ingeniería Civil y Construcción',
              borderColor: CHART_COLORS.green,
              backgroundColor: transparentize(CHART_COLORS.green, 0.5),
              data: [33.3, 66.7, 25.0, 75.0],
              fill: false,
              tension: 0.1
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {  // Actualizado para Chart.js v3+
              grid: {
                display: false,
              }
            },
            y: {  // Actualizado para Chart.js v3+
              beginAtZero: true,
              ticks: {
                callback: function(value) { return value + "%" }
              }
            }
          },
          plugins: {  // Actualizado para Chart.js v3+
            legend: {
              position: 'bottom',
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const datasetLabel = context.dataset.label;
                  const percentage = context.parsed.y;
                  const total = totals[datasetLabel][context.dataIndex];
                  return datasetLabel + ": " + percentage.toFixed(1) + "% (" + total + " estudiantes)";
                }
              }
            }
          }
        }
      };

      let ctx = document.getElementById("line-chart").getContext("2d");
      new Chart(ctx, config);
    });
  },
};
</script>