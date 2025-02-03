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
  name: "StudentsCommentsConditioning",
  data() {
    return {
      comments: [
        {
          student: "FIA-Estudiante 3",
          quote:
            "normalmente las personas tienen como percepción de que un ingeniero solamente puede ser un hombre y en realidad no debería de ser así",
        },
        {
          student: "FCT-Estudiante 4",
          quote:
            "desde mi infancia siempre he estado muy a la mano de la tecnología... mi papá también es ingeniero en sistemas, entonces siempre me ha llevado como por esa área",
        },
        {
          student: "FIA-Estudiante 3",
          quote:
            "Yo personalmente no querían que estudiara ingeniería. Ellos querían que ellos fuera docente y a mí no me llama la atención una docencia",
        },

        {
          student: "FCT-Estudiante 2",
          quote:
            "en las materias de matemática, un 2, 3 o estadística, los que respondían mayormente eran los hombres, por no decir que no había ninguna chica que respondiera... son más creativas y sabemos que eso sería ajá, el fuerte de las muchachas, su creatividad y el de los muchachos su parte analítica y lógica",
        },
        {
          student: "FIA-Estudiante 4",
          quote:
            "antes vivíamos no todos pero vivíamos en una región bastante machista y se decía de que pues las ingenierías eran para hombres porque ocupaba fuerza",
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
