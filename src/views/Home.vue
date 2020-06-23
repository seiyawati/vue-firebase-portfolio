<template>
        <div class="top">
            <div class="main">
                <h1>Welcome To My Portfolio</h1>
                <vue-typer :text="[`Now loading....\nHello World!!\nMy name is Seiya Kawamoto.\nThank you for visiting !!\nTake it easy!\n`]" 
                :repeat='false' :preTypeDelay="70" :typeDelay="70" :preEraseDelay="2000" :eraseDelay="250"></vue-typer>
            </div>
        </div>
</template>

<style scoped>
.top {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 11px;
}
h1 {
    font-size: 13px;
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
        font-family: Impact;
    }
    h1{
        font-size: 40px;
    }
}
/*幅990px以上に適用されるCSS（PCサイズ以上）*/
@media screen and (min-width:990px){
    .top{
        font-size: 30px;
        font-family: Impact;
    }
    h1{
        font-size: 60px;
    }
}
</style>

<script>
import { VueTyper } from 'vue-typer';
export default {
    components: {
        VueTyper
    },
}
</script>

