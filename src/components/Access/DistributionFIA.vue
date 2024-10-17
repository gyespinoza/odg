<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
            Nuevo ingreso por ciclo
          </h6>
          <h2 class="text-blueGray-700 text-xl">
            Facultad de Ingeniería y Arquitectura
          </h2>
        </div>
      </div>
      <div class="block w-full overflow-x-auto" data-aos="zoom-in">
        <table class="items-center w-full bg-transparent border-collapse">
          <thead class="thead-light">
            <tr>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                Ciclo y Género
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                Ingeniería Civil
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left">
                Ingeniería Industrial
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in enrollmentData" :key="index">
              <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {{ item.cycle }} - {{ item.gender }}
              </th>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div class="flex items-center">
                  <span class="mr-2">{{ item.civil }}% ({{ item.civilCount }})</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
                      <div :style="{ width: item.civil + '%' }"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500">
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div class="flex items-center">
                  <span class="mr-2">{{ item.industrial }}% ({{ item.industrialCount }})</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-400">
                      <div :style="{ width: item.industrial + '%' }"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-600">
                      </div>
                    </div>
                  </div>
                </div>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "EnrollmentTable",
  data() {
    return {
      enrollmentData: [
        { cycle: 'Ciclo I', gender: 'Femenino', civil: 16, civilCount: 14, industrial: 29, industrialCount: 10, technical: 0 },
        { cycle: 'Ciclo I', gender: 'Masculino', civil: 84, civilCount: 72, industrial: 71, industrialCount: 25, technical: 0 },
        { cycle: 'Ciclo II', gender: 'Femenino', civil: 14, civilCount: 1, industrial: 40, industrialCount: 2, technical: 0 },
        { cycle: 'Ciclo II', gender: 'Masculino', civil: 86, civilCount: 6, industrial: 60, industrialCount: 3, technical: 0 },
      ]
    };
  },
  mounted() {
    AOS.init({});
  }
};
</script>