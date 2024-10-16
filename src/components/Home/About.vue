<template>
    <section class="about d-flex align-items-center py-5" id="about" style="padding-top: 10%">
        <div class="container">
            <div class="flex align-items-center py-2">
                <div class="lg:pt-12 w-full md:w-7/12" data-aos="fade-right">
                    <p>SOBRE EL OBSERVATORIO</p>
                    <h1>
                        We are top internet <br />
                        service company
                    </h1>
                    <p class="py-2 para-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed
                        accusantium aut dolores inventore architecto modi cupiditate
                        eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum
                        voluptatum quisquam ad veritatis dolorem.
                    </p>
                    <p class="py-2 para-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed
                        accusantium aut dolores inventore architecto modi cupiditate
                        eligendi corporis, illum illo culpa. Reiciendis, molestias. Illum
                        voluptatum quisquam ad veritatis dolorem.
                    </p>
                </div>
                <div class="lg:pt-12 w-full md:w-5/12 text-center" data-aos="fade-down">
                    <div class="image-container">
                        <img class="img-fluid" src="@/assets/img/angular.jpg" alt="about" />
                    </div>
                </div>
            </div>
            <!-- end of row -->
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