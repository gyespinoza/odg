<template>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
    <div class="rounded-t mb-0 px-6 py-4 border-0">
      <div class="flex flex-wrap items-center mb-4">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-2 text-xs">
            Distribución de estudiantes por carrera y género
          </h6>
          <h2 class="text-blueGray-700 text-2xl">
            Carreras STEM/TIC
          </h2>
        </div>
      </div>

    <div class="block w-full overflow-x-auto" data-aos="zoom-in">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Facultad
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Carrera STEM/TIC
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Femenino
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              Masculino
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(carrera, index) in carreras" :key="index">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <span
                class="font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white',
                ]"
              >
                {{ carrera.facultad }}
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{ carrera.nombre }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              <div class="flex items-center justify-center">                
                
                 <!-- {{ getTotalGenero(carrera, 'femenino') }}-->
                  <svg width="30" height="30" viewBox="0 0 24 24" style="color: #41D3BF">
                    <path fill="currentColor" d="M12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 20v-6h-3l2.5-9h5l.5 1.5h-4l-1.8 6.5h2.8v7h-2z" />
                  </svg>
                  {{ getPorcentajeGenero(carrera, 'femenino') }}%
                
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              <div class="flex items-center justify-center">
                <!--{{ getTotalGenero(carrera, 'masculino') }}-->

                <svg width="30" height="30" viewBox="0 0 24 24" style="color: #82D9D2">
                  <path fill="currentColor" d="M12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 20v-6h-3l1.5-6h1.5l.5-2h-3l-1.5 6h2v8h3z" />
                </svg>

                  {{ getPorcentajeGenero(carrera, 'masculino') }}%
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
  name: 'MatriculadosPorCarrera',
  props: {
    color: {
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      carreras: [
        {
          facultad: "Facultad de Ingeniería y Arquitectura",
          nombre: "Ingeniería Civil",
          presencial: { femenino: 59, masculino: 176 },
          semipresencial: { femenino: 40, masculino: 147 },
          virtual: { femenino: 0, masculino: 0 }
        },
        {
          facultad: "",
          nombre: "Ingeniería Industrial",
          presencial: { femenino: 35, masculino: 61 },
          semipresencial: { femenino: 24, masculino: 42 },
          virtual: { femenino: 0, masculino: 0 }
        },
        {
          facultad: "",
          nombre: "Técnico en Ingeniería Civil y Construcción",
          presencial: { femenino: 4, masculino: 8 },
          semipresencial: { femenino: 7, masculino: 21 },
          virtual: { femenino: 0, masculino: 0 }
        },
        {
          facultad: "Ciencia y Tecnología",
          nombre: "Ingeniería en Sistemas y Redes Informáticas",
          presencial: { femenino: 24, masculino: 100 },
          semipresencial: { femenino: 70, masculino: 187 },
          virtual: { femenino: 36, masculino: 180 }
        },
        {
          facultad: "",
          nombre: "Técnico en Ingeniería en Sistemas y Redes Informáticas",
          presencial: { femenino: 0, masculino: 3 },
          semipresencial: { femenino: 11, masculino: 23 },
          virtual: { femenino: 21, masculino: 28 }
        }
      ]
    };
  },
  computed: {
    totalFemenino() {
      return this.carreras.reduce((total, carrera) => 
        total + this.getTotalGenero(carrera, 'femenino'), 0);
    },
    totalMasculino() {
      return this.carreras.reduce((total, carrera) => 
        total + this.getTotalGenero(carrera, 'masculino'), 0);
    },
    totalEstudiantes() {
      return this.totalFemenino + this.totalMasculino;
    }
  },
  methods: {
    getTotalGenero(carrera, genero) {
      return carrera.presencial[genero] + 
             carrera.semipresencial[genero] + 
             carrera.virtual[genero];
    },
    getPorcentajeGenero(carrera, genero) {
      const total = this.getTotalGenero(carrera, 'femenino') + this.getTotalGenero(carrera, 'masculino');
      return ((this.getTotalGenero(carrera, genero) / total) * 100).toFixed(1);
    },
    getPorcentajeTotalGenero(genero) {
      return ((this[`total${genero.charAt(0).toUpperCase() + genero.slice(1)}`] / this.totalEstudiantes) * 100).toFixed(1);
    }
  },
  mounted() {
        AOS.init({});
    }
};
</script>