<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style="height: 400px">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-400 mb-1 text-xs">
            Estudiantes Facultades: Ciencia y Tecnología e Ingeniería y Arquitectura
          </h6>
          <h3 class="text-xl">
            Comunidad Académica
          </h3>
        </div>
      </div>
    <div class="gender-equality-chart"  data-aos="fade-out">
      <br /> 
        <div class="total-count">{{ totalStudents }}</div>
    
    <div class="gender-rows">
      <div class="gender-row women">
        <div class="icons">
          <i v-for="n in 10" :key="`w${n}`" class="fas fa-female" :class="{ active: n <= Math.ceil(women / (totalStudents / 10)) }"></i>
        </div>
        <div class="count">{{ women }}</div>
      </div>
      <div class="gender-row men">
        <div class="icons">
          <i v-for="n in 10" :key="`m${n}`" class="fas fa-male" :class="{ active: n <= Math.ceil(men / (totalStudents / 10)) }"></i>
        </div>
        <div class="count">{{ men }}</div>
      </div>
    </div>
    <br /> 
    <br /> 
    <div class="percentages">
      <div class="women">{{ womenPercentage }}% Femenino</div>
      <div class="men">{{ menPercentage }}% Masculino</div>
    </div>
    </div>
    <br />
    </div>
    </div>
  </template>
  <script>
  import AOS from "aos";
  import "aos/dist/aos.css";

  export default {
    name: 'GenderEqualityChart',
    data() {
      return {
        totalStudents: 1307,
        women: 331,
        men: 976
      }
    },
    computed: {
      womenPercentage() {
        return ((this.women / this.totalStudents) * 100).toFixed(1)
      },
      menPercentage() {
        return ((this.men / this.totalStudents) * 100).toFixed(1)
      }
    },
    mounted() {
        AOS.init({});
    }
  }
  </script>
  
  <style scoped>
  .gender-equality-chart {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  
  p {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 1em;
  }
  
  .total-count {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 1em;
  }
  
  .gender-rows {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 1em;
  }
  
  .gender-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icons {
    display: flex;
    margin-right: 1em;
  }
  
  .icons i {
    font-size:2.5em;
    margin-right: 0.2em;
    color: #ddd;
  }
  
  .icons i.active {
    color: #0070C0;
  }
  
  .men .icons i.active {
    color: #40AFFF;
  }
  
  .count {
    font-weight: bold;
    font-size: 1.2em;
  }
  
  .percentages {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
  }
  
  .women {
    color: #0070C0;
  }
  
  .men {
    color: #40AFFF;
  }
  </style>