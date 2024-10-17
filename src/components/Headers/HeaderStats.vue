<template>
  <!-- Header -->
  <div class="relative md:ml-64" style="padding-bottom: 1rem">  
    <div class="container px-4 md:px-15 mx-auto w-full">
      <div>       
        <div class="flex flex-wrap">
          <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Carreras"
              statTitle="5"
              statArrow=""
              statPercent=""
              statPercentColor="text-emerald-500"
              statDescripiron="STEM/TIC"
              statIconName="fa fa-university"
              statIconColor="bg-lightBlue-600"
            />
          </div>
          <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Población Estudiantil"
              statTitle="1,307"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Estudiantes STEM/TIC"
              statIconName="fa fa-users"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Dimensiones"
              statTitle="5"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Categorías clave"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>


          <div class="w-full lg:w-3/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="Indicadores"
              statTitle="286"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Estadísticas"
              statIconName="fa fa-tasks"
              statIconColor="bg-purple-500"
            />
          </div>
    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats
  },
};
</script>
