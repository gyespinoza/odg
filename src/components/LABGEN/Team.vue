<template>
    <div>
      <section class="activities d-flex align-items-center" style="padding: 10%">
        <div class="container">
          <div class="lg:pt-12 w-full md:w-12/12" data-aos="fade-right">
            <p class="text-center">NUESTRO EQUIPO</p>
            <h1 class="text-center">Equipo de Investigación</h1>            
            <p class="para-light"></p>
            <div class="flex">
             <div class="lg:pt-12 w-full md:w-4/12"  style="padding:20px" data-aos="fade-right" v-for="member in teamMembers" :key="member.id">
              <div class="team-member text-center" >                
                <h3 class="mb-1">{{ member.name }}</h3>
                <p class="role mb-2">{{ member.role }}</p>
                <p class="description mb-3">{{ member.description }}</p>                
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  export default {
    name: "about",
    data() {
      return {
      
        teamMembers: [
          {
            id: 1,
            name: "Internacional",
            role: "",
            description: "Cuatro investigadoras extranjeras con grado de Doctorado",
            image: "/path/to/mary-brown-image.jpg"
          },
          {
            id: 2,
            name: "Nacional",
            role: "",
            description: "Tres investigadoras nacionales",
            image: "/path/to/ann-richmond-image.jpg"
          },
          {
            id: 3,
            name: "",
            role: "",
            description: "El trabajo conjunto entre el personal extranjero y local contribuirá al fortalecimiento de la investigación en la UGB, favorecerá la extensión de redes de contacto y habrá ampliado su currículum académico con publicaciones de impacto",
            image: "/path/to/bob-greenfield-image.jpg"
          }
        ]
      };
    },
    mounted() {
      AOS.init({});
    }
  };
  </script>
  
  <style scoped>
  
  .text {
    font-size: 1vw;
  }
  
  hr.divider {
    height: 0.2rem;
    max-width: 3.25rem;
    margin: 1.5rem auto;
    background-color: var(--primary);
    border-color: var(--primary);
    opacity: 1;
  }
  
  hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    unicode-bidi: isolate;
    overflow: hidden;
    border-width: 1px;
  }
  
  .features {
    background-color: #f8f9fa;
  }
  
  
  .features h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .features p {
    font-size: 0.9rem;
    color: #6c757d;
  }
  
  /* Nuevos estilos para la sección de miembros del equipo */
  .team-members {
    background-color: #f8f9fa;
  }
  
  .team-member {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin-bottom: 30px;
    height: 10vw;
  }
  
  .team-member:hover {
    transform: translateY(-5px);
  }
  
  .team-member img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .team-member h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .team-member .role {
    color: var(--primary);
    font-weight: 600;
  }
  
  .team-member .description {
    font-size: 0.9rem;
    color: #6c757d;
  }
  
  .social-icons a {
    color: #4CAF50;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #45a049;
  }
  </style>