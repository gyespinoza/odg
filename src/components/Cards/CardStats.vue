<template>
  <div class="relative flex flex-col min-w-0 break-words rounded-xl mb-8 xl:mb-0 shadow-lg overflow-hidden"
    :class="[backgroundColor]">
    <!-- Círculos SVG -->
    <svg class="absolute top-0 right-0 h-full" viewBox="0 0 200 100%" preserveAspectRatio="xMidYMid slice">
      <circle cx="170" cy="50" r="80" fill="rgba(255,255,255,0.1)" />
      <circle cx="170" cy="50" r="60" fill="rgba(255,255,255,0.1)" />
    </svg>

    <div class="flex-auto p-8 relative z-10">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-white text-lg py-1 opacity-80 font-medium">
            {{ statSubtitle }}
          </h5>
          <span class="text-3xl text-white h-12 font-bold">
            {{ statTitle }}
          </span>
        </div>
        <!--div class="relative w-auto pl-4 flex-initial">
          <div class="text-white p-3 inline-flex items-center justify-center">
            <i :class="[statIconName]" class="h-20"></i>
          </div>
        </div-->
      </div>
      <p class="text-sm text-white mt-4">        
        <span class="whitespace-nowrap opacity-80">{{ statDescripiron }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-stats",
  props: {
    backgroundColor: {
      type: String,
      default: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    statSubtitle: {
      type: String,
      default: "Traffic",
    },
    statTitle: {
      type: String,
      default: "350,897",
    },
    statArrow: {
      default: "up",
      validator: function (value) {
        return ["up", "down"].indexOf(value) !== -1;
      },
    },
    statPercent: {
      type: String,
      default: "3.48",
    },
    statPercentColor: {
      type: String,
      default: "text-emerald-500",
    },
    statDescripiron: {
      type: String,
      default: "Since last month",
    },
    statIconName: {
      type: String,
      default: "far fa-chart-bar",
    },
    statIconColor: {
      type: String,
      default: "bg-red-500",
    },
  },
};
</script>

<style scoped>
/* Animación opcional para los círculos */
@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-10px);
  }

  100% {
    transform: translatey(0px);
  }
}

svg circle {
  animation: float 6s ease-in-out infinite;
}

svg circle:last-child {
  animation-delay: -3s;
}

/* Estilos para asegurar que el contenido esté sobre los círculos */
.flex-auto {
  position: relative;
  z-index: 2;
}

/* Opcional: Efecto de hover */
.rounded-xl {
  transition: transform 0.3s ease;
}

.rounded-xl:hover {
  transform: translateY(-2px);
}


.right-0 {
  right: -100px;
}

.p-3 {
  padding: 0.5rem !important;
}

</style>