<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
              Facultad de Ingeniería y Arquitectura y Facultad de Ciencia y Tecnología
            </h6>
            <h2 class="text-blueGray-700 text-xl">
               Graduados por carrera                 
            </h2>
        </div>
      </div>
    </div>
    
<!-- Filtro de Carrera -->
<div class="px-4 py-2 flex">
  <div class="flex ml-auto">
    <div>        
      <select id="carrera" v-model="selectedCarrera" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value="all">Todas las carreras</option>
        <option value="ingenieria_civil">Ingeniería Civil</option>
        <option value="ingenieria_industrial">Ingeniería Industrial</option>
        <option value="tecnico_civil_construccion">Técnico en Ingeniería Civil y Construcción</option>
        <option value="ingenieria_sistemas">Ingeniería en Sistemas y Redes Informáticas</option>
        <option value="tecnico_sistemas">Técnico en Ingeniería en Sistemas y Redes Informáticas</option>
      </select>
    </div>
  </div>
</div>



    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Carrera
            </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center" colspan="2">
              2023
            </th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center" colspan="2">
              2024
            </th>
          </tr>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Masculino</th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Femenino</th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Masculino</th>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Femenino</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredData" :key="item.carrera">
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
              {{ item.carrera }}
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ item['2023'].masculino.count }} ({{ item['2023'].masculino.percentage }}%)
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ item['2023'].femenino.count }} ({{ item['2023'].femenino.percentage }}%)
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ item['2024'].masculino.count }} ({{ item['2024'].masculino.percentage }}%)
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{ item['2024'].femenino.count }} ({{ item['2024'].femenino.percentage }}%)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCarrera: 'all',
      enrollmentData: [
        {
          carrera: 'Ingeniería Civil',
          '2023': {
            masculino: { count: 63, percentage: 79 },
            femenino: { count: 17, percentage: 21 }
          },
          '2024': {
            masculino: { count: 20, percentage: 80 },
            femenino: { count: 5, percentage: 20 }
          }
        },
        {
          carrera: 'Ingeniería Industrial',
          '2023': {
            masculino: { count: 21, percentage: 66 },
            femenino: { count: 11, percentage: 34 }
          },
          '2024': {
            masculino: { count: 1, percentage: 25 },
            femenino: { count: 3, percentage: 75 }
          }
        },
        {
          carrera: 'Técnico en Ingeniería Civil y Construcción',
          '2023': {
            masculino: { count: 13, percentage: 81 },
            femenino: { count: 3, percentage: 19 }
          },
          '2024': {
            masculino: { count: 9, percentage: 56 },
            femenino: { count: 7, percentage: 44 }
          }
        },
        {
          carrera: 'Ingeniería en Sistemas y Redes Informáticas',
          '2023': {
            masculino: { count: 61, percentage: 78 },
            femenino: { count: 17, percentage: 22 }
          },
          '2024': {
            masculino: { count: 2, percentage: 67 },
            femenino: { count: 1, percentage: 33 }
          }
        },
        {
          carrera: 'Técnico en Ingeniería en Sistemas y Redes Informáticas',
          '2023': {
            masculino: { count: 1, percentage: 100 },
            femenino: { count: 0, percentage: 0 }
          },
          '2024': {
            masculino: { count: 6, percentage: 67 },
            femenino: { count: 3, percentage: 33 }
          }
        }
      ]
    }
  },
  computed: {
    filteredData() {
      return this.enrollmentData.filter(item => {
        return this.selectedCarrera === 'all' || 
          (this.selectedCarrera === 'ingenieria_civil' && item.carrera === 'Ingeniería Civil') ||
          (this.selectedCarrera === 'ingenieria_industrial' && item.carrera === 'Ingeniería Industrial') ||
          (this.selectedCarrera === 'tecnico_civil_construccion' && item.carrera === 'Técnico en Ingeniería Civil y Construcción') ||
          (this.selectedCarrera === 'ingenieria_sistemas' && item.carrera === 'Ingeniería en Sistemas y Redes Informáticas') ||
          (this.selectedCarrera === 'tecnico_sistemas' && item.carrera === 'Técnico en Ingeniería en Sistemas y Redes Informáticas');
      });
    }
  }
}
</script>