<template>
  <v-container>
    <h1>My Works</h1>
    <h3 style="text-align: center;">私が作った制作物一覧がこちらになります。ぜひご覧ください。</h3>
    <hr />
    <div v-for="(work, index) in works" :key="index">
      <v-row>
        <v-col cols="12">
          <img :src="work.file" alt="file"/>
          <a :href="work.url" target="blank">
            <h2>{{ work.title }}</h2>
          </a>
          <p></p>
          <h3>{{ work.lang }}</h3>
          <p></p>
          <h4>{{ work.text }}</h4>
          <p></p>
          <a href="https://github.com/seiyawati/vue-laravel-app" target="blank">
            <v-icon large color="black">{{ mdiGithub }}</v-icon>
          </a>
        </v-col>
      </v-row>
      <p class="space"></p>
      <hr />
      <p class="space"></p>
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
        });
      });
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 40px;
}

h2 {
  color: black;
}

a {
  text-decoration: underline;
  text-decoration-color: black;
}

img {
  width:100%;
}

.space {
  height: 25px;
}
</style>
