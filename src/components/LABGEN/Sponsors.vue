<template>
    <section class="sponsor d-flex align-items-center">
        <div class="container">
                <div class="lg:pt-12 w-full md:w-12/12" data-aos="fade-right">
                    
                </div>
                
            
        </div>
        <!-- end of container -->
    </section>


</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "about",
    mounted() {
        AOS.init({});
    }
};
</script>

<style scoped>
.sponsor{
    background-color: #fff;
    background-image:  url(@/assets/img/logo.png);
    background-size: 800px;
    background-repeat: no-repeat;
    background-position: center;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text {
    font-size: 1vw;   
}
</style>