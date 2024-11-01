<template>
  <!-- Header -->
  <div style="padding-bottom: 1rem">  
    <div class="container px-4 md:px-15 mx-auto w-full">
      <div>       
        <div class="flex flex-wrap">
          <!--div class="w-full lg:w-3/12 xl:w-3/12 px-4">
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
          </div-->
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="Población Estudiantil"
              statTitle="1,307"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Estudiantes STEM/TIC"
              statIconName="fa fa-users"
              statIconColor="bg-emerald-500"
              backgroundColor="bg-gradient-success"
            />
          </div>
          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="Mujeres"
              statTitle="331"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Población femenina"
              statIconName="fas fa-female"
              statIconColor="bg-orange-500"
              backgroundColor="bg-gradient-danger"
            />
          </div>


          <div class="w-full lg:w-4/12 xl:w-4/12 px-4">
            <card-stats
              statSubtitle="Hombres"
              statTitle="976"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Población masculina"
              statIconName="fa fa-male"
              statIconColor="bg-purple-"
              backgroundColor="bg-gradient-info"
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
