<template>
  <v-container>
    <h1 style="text-align: center; font-size: 40px;">My Works</h1>
    <hr />
    <div v-for="(work, index) in works" :key="index">
      <v-layout wrap>
        <v-flex>
          <img :src="work.file" alt="file" style="width:100%;" />
          <a :href="work.link">
            <h2>{{ work.title }}</h2>
          </a>
          <p></p>
          <h3>{{ work.lang }}</h3>
          <p></p>
          <h4>{{ work.text }}</h4>
          <p></p>
          <a href="https://github.com/seiyawati/vue-laravel-app">
            <v-icon large color="black">{{ mdiGithub }}</v-icon>
          </a>
        </v-flex>
      </v-layout>
      <p style="height:25px;"></p>
      <hr />
      <p style="height:25px;"></p>
    </div>
  </v-container>
</template>

<script>
import { mdiGithub } from "@mdi/js";
import { db } from "../firebase/index";

export default {
  data() {
    return {
      mdiGithub,
      works: [],
    };
  },
  //アロー関数はthisを束縛しないので参照できない
  created() {
    db.collection("works")
      .orderBy('created_at')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.works.push(doc.data());
          console.log(doc.data());
        });
      });
  }
};
</script>

<style scoped>
h2 {
  color: black;
}

a {
  text-decoration: underline;
  text-decoration-color: black;
}
</style>
