<template>
    <v-container>
        <section class="profile">
            <div class="title" style="text-align: center;">
                <h1 style="font-size: 40px;">About Me</h1>
            </div>
            <div class="two-wrapper">
                <div class="image" style="margin-right: 50px;">
                    <v-avatar color="indigo" size="200">
                        <v-img src="../assets/about2.jpg"></v-img>
                    </v-avatar>
                </div>
                <div class="content">
                    <table>
                        <tr>
                            <td><h3>Name:</h3></td>
                            <td><h3>川本聖也(Seiya Kawamoto)</h3></td>
                        </tr>
                        <tr>
                            <td><h3>University:</h3></td>
                            <td><h3>東京海洋大学</h3></td>
                        </tr>
                        <tr>
                            <td><h3>From:</h3></td>
                            <td><h3>岡山県</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Hobby:</h3></td>
                            <td><h3>キックボクシング、HIPHOP、釣り</h3></td>
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
            </div>
            <div class="skill" style="text-align: center; margin-top: 50px;">
                <h2 style="font-size: 30px;">Skills</h2>
            </div>
            <div class="chart">
                <Doughnut></Doughnut>
            </div>
        </section>
    </v-container>
</template>

<style scoped>
.two-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.image {
    margin-top: 30px;
}

.content {
    margin-top: 30px;
}

table {
    border-spacing: 10px 0;
}

.chart {
    width: 400px;
    height: 400px;
    margin: 0 auto;
}

@media screen and (min-width : 990px) {
    .two-wrapper {
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
    }
}
</style>

<script>
import { mdiLanguagePhp } from '@mdi/js';
import { mdiLaravel } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiVuejs } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiGithub } from "@mdi/js";
import { db } from "../firebase/index";
import Doughnut from "../components/Piechart.vue";

export default {
    data: () => ({
        mdiLanguagePhp,
        mdiLaravel,
        mdiLanguageJavascript,
        mdiVuejs ,
        mdiBootstrap,
        mdiLanguageHtml5,
        mdiLanguageCss3,
        mdiTwitter,
        mdiGithub,
        about: []
    }),
    components: {
        Doughnut
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