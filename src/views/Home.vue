<template>
        <div class="top">
            <div class="main">
                <h1>Welcome To My Portfolio</h1>
                <vue-typer :text="[`Now loading....\nHello World!!\nMy name is Seiya Kawamoto.\nThank you for visiting !!\nTake it easy!\n`]" 
                :repeat='false' :preTypeDelay="70" :typeDelay="70" :preEraseDelay="2000" :eraseDelay="250"></vue-typer>
            </div>
            <vue-particles 
                color="#34495F" 
                class="particles"
                shapeType="circle"
                :particleSize="8"
            >
            </vue-particles>
        </div>
</template>

<style scoped>
.top {
    font-family: Impact;
    font-size: 15px;
}
h1 {
    font-size: 24px;
}
vue-particles {
    position: relative;
}
.main {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
/*幅768px以上に適用されるCSS（タブレットサイズ以上）*/
@media screen and (min-width:768px){
    .top{
        font-size: 20px;
    }
    h1{
        font-size: 40px;
    }
}
/*幅990px以上に適用されるCSS（PCサイズ以上）*/
@media screen and (min-width:990px){
    .top{
        font-size: 30px;
    }
    h1{
        font-size: 60px;
    }
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

