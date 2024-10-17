<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
            Nuevo ingreso por ciclo
          </h6>
          <h2 class="text-blueGray-700 text-xl">
            Facultad de Ciencia y Tecnología

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
                Ingeniería en Sistemas y Redes Informáticas
              </th>
              <th
                class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap text-left min-w-140-px "
                style="font-size:10px">
                Técnico en Ingeniería en Sistemas y Redes Informáticas
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
                  <span class="mr-2">{{ item.engineering }}% ({{ item.engineeringCount }})</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                      <div :style="{ width: item.engineering + '%' }"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500">
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div class="flex items-center">
                  <span class="mr-2">{{ item.technical }}% ({{ item.technicalCount }})</span>
                  <div class="relative w-full">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                      <div :style="{ width: item.technical + '%' }"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500">
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
        { cycle: 'Ciclo I', gender: 'Femenino', engineering: 28, engineeringCount: 33, technical: 17, technicalCount: 4 },
        { cycle: 'Ciclo I', gender: 'Masculino', engineering: 72, engineeringCount: 84, technical: 83, technicalCount: 19 },
        { cycle: 'Ciclo II', gender: 'Femenino', engineering: 33, engineeringCount: 3, technical: 75, technicalCount: 3 },
        { cycle: 'Ciclo II', gender: 'Masculino', engineering: 67, engineeringCount: 6, technical: 25, technicalCount: 1 },
      ]
    };
  },
  mounted() {
    AOS.init({});
  }
};
</script>