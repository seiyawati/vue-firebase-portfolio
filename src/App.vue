<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
#app{
  background: linear-gradient(45deg, #6cb8ff, #fff66c, #ffa36c);
  background-size: 600% 600%;
  animation: AnimationName 9s ease infinite;
}

@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>
