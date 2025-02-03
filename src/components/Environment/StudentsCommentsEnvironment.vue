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
  name: "StudentsCommentsEnvironment",
  data() {
    return {
      comments: [
        {
          student: "FCT-Estudiante 1",
          quote:
            "los profesores que he tenido pues no están solo comprometidos con mi aprendizaje, sino que como que me han ayudado, me han fomentado a un ambiente inclusivo, en este caso, en el aula, por ejemplo, no sé, cuando hacían las preguntas, había partes donde le preguntaban únicamente a señoritas y partes donde únicamente se le preguntaba hombres.",
        },
        {
          student: "FCT-Estudiante 2",
          quote:
            "Mi experiencia sobre la carrera, llevo ingeniería en sistemas. Y ha sido más que todo positiva, ya que desde el primer día he sentido como esa aceptación que ha tenido mi persona tanto en el ambiente como en los grupos o como en los profesores, ya que estos son, bueno, son agradables, se nota que tienen esas ganas de enseñar y que todos los grupos en cierta medida tienen su cierto grado de competencia.",
        },
        {
          student: "FCT-Estudiante 3",
          quote:
            "las experiencias vividas dentro del laboratorio de electrónica donde hemos podido aprender sobre los dispositivos, teniéndolos físicamente y no solo en simuladores, ha sido muy enriquecedor",
        },
        {
          student: "FIA-Estudiante 1",
          quote:
            "personalmente de los 2 años que llevo de estar aquí todo ha sido bastante bueno, en ningún momento he tenido ningún problema...Los docentes han sido muy bien portados al con nuestro Grupo, han explicado muy bien todo y que han tenido las sabidurías, por decirlo así, de separar las cosas académicas con cosas externas",
        },
        {
          student: "FIA-Estudiante 2",
          quote:
            "considero que la Universidad mantiene bastante, bastante normal, porque se bueno...tenemos la confianza de los ingenieros...considero que la experiencia ha sido bastante buena dentro de 2 años.",
        },
        {
          student: "FIA-Estudiante 3",
          quote:
            "hablando personalmente como mujer, considero que de parte de los ingenieros o docentes no hemos recibido ningún tipo de discriminación...la Universidad brinda esa beca para personas que salen embarazadas mientras realizan sus estudios.",
        },
        {
          student: "FIA-Estudiante 4",
          quote:
            "cuando yo escribe la carrera así fue como que bastantes de nuestro Grupo era mayormente de niña, pero este siempre estuvimos todos los trato igualitario...tenemos las personas actividades integradoras como talleres...",
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
