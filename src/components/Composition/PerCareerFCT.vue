<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
            Porcentaje de mujeres y hombres matriculados por carrera STEM/TIC
          </h6>
          <h2 class="text-blueGray-700 text-xl">
            Facultad de Ciencia y Tecnología
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <canvas id="line-chart-fct"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted: function () {
    this.$nextTick(function () {
      // Definir colores
      const CHART_COLORS = {
        blue: 'rgb(65,138,212)',
        orange: 'rgb(251,99,64)',
      };
  
      // Definir la función transparentize
      function transparentize(color, opacity) {
        const alpha = opacity === undefined ? 0.5 : 1 - opacity;
        return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
      }
  
      // Datos absolutos para mostrar en el tooltip
      const totals = {
        'Ingeniería en Sistemas y Redes Informáticas': [24, 100, 70, 187, 36, 180],
        'Técnico en Ingeniería en Sistemas y Redes Informáticas': [0, 3, 11, 23, 21, 28],
      };

      let config = {
        type: "line",  // Cambiado de "bar" a "line"
        data: {
          labels: [
            "Femenino Presencial",
            "Masculino Presencial",
            "Femenino Semipresencial",
            "Masculino Semipresencial",
            "Femenino Virtual",
            "Masculino Virtual"
          ],
          datasets: [
            {
              label: 'Ingeniería en Sistemas y Redes Informáticas',
              borderColor: CHART_COLORS.blue,
              backgroundColor: transparentize(CHART_COLORS.blue, 0.5),
              data: [19.4, 80.6, 27.2, 72.8, 16.7, 83.3],
              fill: false,  // Para que no rellene el área bajo la línea
              tension: 0.1  // Para suavizar la línea ligeramente
            },
            {
              label: 'Técnico en Ingeniería en Sistemas y Redes Informáticas',
              borderColor: CHART_COLORS.orange,
              backgroundColor: transparentize(CHART_COLORS.orange, 0.5),
              data: [0.0, 100.0, 32.4, 67.6, 42.9, 57.1],
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
      let ctx = document.getElementById("line-chart-fct").getContext("2d");
      new Chart(ctx, config);
    });
  },
};
</script>