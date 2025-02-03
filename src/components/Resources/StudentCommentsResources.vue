<!-- StudentComments.vue -->
<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-6 py-4 border-0">
      <div class="flex flex-wrap items-center mb-4">
        <div class="relative w-full">
          <h6 class="uppercase text-gray-500 mb-1 text-xs">
            COMENTARIOS MÁS RELEVANTES
          </h6>
          <h2 class="text-gray-700 text-xl">Opiniones de los estudiantes</h2>
        </div>
      </div>
      <!-- Headers fixed -->
      <div
        class="grid grid-cols-12 text-xs uppercase text-gray-600 font-medium mb-4"
      >
        <div class="col-span-3">FACULTAD / <br />ESTUDIANTE</div>
        <div class="col-span-9">COMENTARIO</div>
      </div>

      <!-- Scrollable content -->
      <div class="custom-scrollbar overflow-y-auto" style="height: 400px">
        <div class="space-y-6 pr-4">
          <div
            v-for="(comment, index) in comments"
            :key="index"
            class="grid grid-cols-12 items-start pb-4 border-b border-gray-100 last:border-0"
          >
            <div class="col-span-3">
              <p class="text-blue-600 hover:text-blue-800 text-sm">
                {{ comment.student }}
              </p>
            </div>
            <div class="col-span-9">
              <p class="text-gray-800 text-sm leading-relaxed">
                "{{ comment.quote }}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentComments",
  data() {
    return {
      comments: [
        {
          student: "FCT-Estudiante 3",
          quote:
            "las experiencias vividas dentro del laboratorio de electrónica donde hemos podido aprender sobre los dispositivos, teniéndolos físicamente y no solo en simuladores",
        },

        {
          student: "FCT-Estudiante 3",
          quote:
            "cuando se tenía que hacer alguna práctica, siempre nos toman en cuenta, que venga una muchacha y que venga un muchacho. Por ejemplo, para una práctica con fibra óptica",
        },
        {
          student: "FIA-Estudiante 4",
          quote:
            "también tenemos lo que son las personas actividades integradoras como talleres, ya sea de canto, baile en bueno en nuestra facultad, a veces se hacen Eh, actividades de curso para autocad, EH También se hacen para computación",
        },
        {
          student: "FIA-Estudiante 3",
          quote:
            "la Universidad brinda esa beca para personas que salen embarazadas mientras realizan sus estudios...existen infinidad de becas dentro de la universidad",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid-cols-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}

.col-span-3 {
  grid-column: span 3 / span 3;
}

.col-span-9 {
  grid-column: span 9 / span 9;
}

/* Customized scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Firefox scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}
</style>
