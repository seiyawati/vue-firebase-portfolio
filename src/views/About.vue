<template>
    <v-container>
        <h1 style="font-size: 40px; text-align: center;">About Me</h1>
        <v-row>
            <v-col  cols="12" xs="12" sm="12" md="12" lg="12"> 
                <div class="image">
                    <v-avatar color="" size="200">
                        <v-img src="../assets/about2.jpg"></v-img>
                    </v-avatar>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <div class="message">
                    <h3>ご訪問ありがとうございます。川本聖也と申します。<br>
                        東京海洋大学環境学科の3年生です。<br>
                        プログラミング歴は半年です。<br>
                        codeshipに通っています。<br>
                        アマチュアキックボクサーです。
                    </h3>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <div class="table">
                    <table> 
                        <tr>
                            <td><h3>Name:</h3></td>
                            <td><h3>Seiya Kawamoto</h3></td>
                        </tr>
                        <tr>
                            <td><h3>University:</h3></td>
                            <td><h3>TUMSAT</h3></td>
                        </tr>
                        <tr>
                            <td><h3>From:</h3></td>
                            <td><h3>Okayama</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Hobby:</h3></td>
                            <td><h3>Kick Boxing, HIPHOP, Fishing</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Skills:</h3></td>
                            <td><h3>PHP/Laravel/Javascript/Vue.js</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Twitter:</h3></td>
                            <td><a href="https://twitter.com/gibachannel"><v-icon color="#00acee">{{ mdiTwitter }}</v-icon></a></td>
                        </tr>
                        <tr>
                            <td><h3>GitHub:</h3></td>
                            <td><a href="https://github.com/seiyawati"><v-icon color="black">{{ mdiGithub }}</v-icon></a></td>
                        </tr>
                    </table>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.image {
   text-align: center;
}
.message {
    width: 300px;
    margin: 0 auto;
}
.table {
    width: 300px;
    margin: 0 auto;
}
h3 {
    font-size: 12px;
}

/**PC対応のサイズ */
@media screen and (min-width : 990px) {
    h3 {
    font-size: 12px;
    }


}
</style>

<script>
import { mdiTwitter } from '@mdi/js';
import { mdiGithub } from "@mdi/js";
import { db } from "../firebase/index";

export default {
    data: () => ({
        mdiTwitter,
        mdiGithub,
        about: []
    }),
    components: {

    },
    created() {
       db.collection("about")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.about.push(doc.data());
          console.log(doc.data());
        });
      });
    }
}
</script>