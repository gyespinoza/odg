<template>
  <div>
    <!-- Métricas principales -->
    <!--div class="container px-4 md:px-25 mx-auto w-full">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
          <card-stats
            statSubtitle="CARRERAS STEM/TIC"
            statTitle="5"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Facultades: Ciencia y Tecnología e Ingeniería y Arquitectura"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
          <card-stats
            statSubtitle="POBLACIÓN ESTUDIANTIL"
            statTitle="1,307"
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-red-500"
            statDescripiron="Estudiantes STEM/TIC"
            statIconName="fas fa-users"
            statIconColor="bg-orange-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
          <card-stats
            statSubtitle="NUEVO INGRESO"
            statTitle="286"
            statArrow="up"
            statPercent="12"
            statPercentColor="text-emerald-500"
            statDescripiron="Estudiantes STEM/TIC"
            statIconName="fas fa-user-graduate"
            statIconColor="bg-pink-500"
          />
        </div>        
      </div>
    </div-->
   

    <!--div class="px-4 md:px-15 mx-auto w-full">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
          <ingenieria-civil />    
        </div>
        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
          <ingenieria-industrial />    
        </div>
        <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
          <tecnico-civil />  
        </div>
      </div>
    </div-->


    <div class="px-4 md:px-15 mx-auto w-full">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
          <per-career /> 
        </div>
        <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
          <per-career-vue />
        </div>
      </div>
    </div>
    <div class="px-4 md:px-15 mx-auto w-full">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-8/12 xl:w-8/12 px-4">   
          
        </div>
        <div class="w-full lg:w-12/12 xl:w-12/12 px-4">
          <table-compisition />
          <!--ingenieria-sistemas /-->
        </div>
        <div class="w-full lg:w-8/12 xl:w-8/12 px-4">
          <!--tecnico-sistemas /-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import CardStats from "@/components/Cards/CardStats.vue";
import PerCareerVue from "@/components/Composition/PerCareerFCT.vue";
import TableCompisition from "@/components/Composition/TableCompisition.vue";
import PerCareer from '@/components/Composition/PerCareerFIA.vue';
//import IngenieriaCivil from '@/components/Composition/IngenieriaCivil.vue';
//import Portions from '@/components/Composition/Portions.vue';
//import IngenieriaIndustrial from "@/components/Composition/IngenieriaIndustrial.vue";
//import TecnicoCivil from "@/components/Composition/TecnicoCivil.vue";
//import IngenieriaSistemas from "@/components/Composition/IngenieriaSistemas.vue";
//import TecnicoSistemas from "@/components/Composition/TecnicoSistemas.vue";


export default {
  name: "Composition",
  components: {
    //CardStats,
    PerCareerVue,
    TableCompisition,
    PerCareer,
    //IngenieriaCivil,
    //Portions,
    //IngenieriaIndustrial,
    //TecnicoCivil,
    //IngenieriaSistemas,
    //TecnicoSistemas,
  },
  mounted() {
    this.$emit("set-title", "Composición de la Comunidad Académica");
  },
};
</script>
