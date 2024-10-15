<template>
    <div>
        <section class="pb-10 pb-48">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500"
                    >
                      <i class="fa fa-th-large"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Dimensiones</h6>
                    <p class="mt-2 mb-4 text-blueGray-500"></p>
                  </div>
                </div>
              </div>
  
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                    >
                      <i class="fa fa-th"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Indicadores</h6>
                    <p class="mt-2 mb-4 text-blueGray-500"></p>
                  </div>
                </div>
              </div>
  
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                    >
                      <i class="fa fa-bar-chart"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Estadísticas</h6>
                    <p class="mt-2 mb-4 text-blueGray-500"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap"></div>
            <div class="flex flex-wrap items-center mt-32">
              <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div
                  class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-user-friends text-xl"></i>
                </div>
                <h3 class="text-3xl mb-2 font-semibold leading-normal">title</h3>
                <p
                  class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
                >
                  text
                </p>
                <p
                  class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
                >
                  text
                </p>
                <router-link to="/" class="font-bold text-blueGray-700 mt-8">
                  Link
                </router-link>
              </div>
  
              <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
                >
                  <img
                    alt="..."
                    src="#"
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="text-emerald-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 class="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p class="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <book-grid />
        </div>
    </div>
  </template>
  <script>
  

  </script>
  