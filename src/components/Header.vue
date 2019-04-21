<template>
    <div class="bg">  
        <Navbar/>
        <div class="greet text-center">
            <h1>Hello! I'm Ryan.</h1>
            <h1>Have a look around :)</h1>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue"

export default {
    name: 'Header',
    components: {
        Navbar
    }
}
</script>

<style scoped>
    .bg {
        /* The image used */
        background-image: url("../assets/buildings.jpg");

        /* Full height */
        height: 100%; 

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .greet {
        color: aliceblue;
        position: absolute;
        top: 50%;
        left: 50%;
        -moz-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }

    .greet > h1 {
        background-color: #282828;
        font-family: "Courier New", Courier, monospacel;
        padding: 5px;
    }

    
</style>


