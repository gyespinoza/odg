<template>
    <div>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <div class="text-red-500 text-4xl">
            <i class="fas fa-users"></i>
          </div>
          <div>
            <div class="text-3xl font-bold text-gray-800">{{ totalStudents }}</div>
            <div class="text-sm text-gray-600">Total Estudiantes</div>
          </div>
        </div>
        <div class="flex space-x-8">
          <div class="text-center">
            <div class="text-4xl mb-1 text-blue-600">
              <i class="fas fa-male"></i>
            </div>
            <div class="text-xl font-bold text-gray-800">{{ maleStudents }}</div>
            <div class="text-sm text-gray-600">Male</div>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-1 text-pink-600">
              <i class="fas fa-female"></i>
            </div>
            <div class="text-xl font-bold text-gray-800">{{ femaleStudents }}</div>
            <div class="text-sm text-gray-600">Female</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StudentMetrics',
    data() {
      return {
        totalStudents: 1307,
        maleStudents: 976,
        femaleStudents: 331,
      }
    }
  }
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales aquí si es necesario */
  </style>