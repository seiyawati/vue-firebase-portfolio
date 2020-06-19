<template>
    <v-container>
        <div class="top">
            <div class="main">
                <h1>Welcome To My Portfolio</h1>
                <vue-typer :text="['Now loading....\nHello World!!\nMy name is Seiya Kawamoto.\nThank you for visiting this site. \nTake it easy!\n']" 
                :repeat='false' :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000"></vue-typer>
            </div>
            <vue-particles color="#34495F" class="particles"></vue-particles>
        </div>
    </v-container>
</template>

<style scoped>
.top {
    position: relative;
    background-size: cover;
    font-family: Impact;
}
.main {
    position: absolute;
    font-size: 25px;
    top: 25%;
    left: 50%;
    transform: translateY(-25%) translateX(-50%);
}
.particles {
    z-index: 1;
}
.vue-typer {
    font-family: Impact;
}
</style>

<script>
import Vue from 'vue';
import VueParticles from 'vue-particles';
import { VueTyper } from 'vue-typer';

Vue.use(VueParticles);

export default {
    components: {
        VueTyper
    },
}
</script>

