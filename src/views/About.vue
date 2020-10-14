<template>
    <v-container>
        <h1 style="font-size: 40px; text-align: center;">About Me</h1>
        <h3 style="text-align: center;">私について</h3>
        <section class="profile">
            <div class="image">
                <v-avatar color="" size="300">
                    <v-img src="../assets/about1.jpg"></v-img>
                </v-avatar>
            </div>
            <dir>
                <div class="message">
                    <h2 style="border-bottom: solid 1px ">Profile</h2>
                    <p></p>
                    <h3>川本聖也（Seiya Kawamoto)<br>
                        <p></p>
                        ・東京海洋大学 環境学科<br>
                        <p></p>
                        ・不動産系のITベンチャーでエンジニアインターンをしています。<br>
                        <p></p>
                        ・PHPとJavaScriptを書いていて、FWはLaravelとVue.jsです。たまにpython。<br>
                        <p></p>
                        ・趣味はキックボクシング、銭湯巡り、あと最近競AtCoder始めました。<br>
                        <p></p>
                        ・アマチュアキックボクサーとしても活動しています。<br>
                        <p></p>
                        ・GitHubはこちらです→<a href="https://github.com/seiyawati" target="blank"><v-icon color="black" large>{{ mdiGithub }}</v-icon></a>
                        <p></p>
                        ・Twitterはこちらです→<a href="https://twitter.com/gibachannel" target="blank"><v-icon color="#00acee" large>{{ mdiTwitter }}</v-icon></a>
                    </h3>
                </div>
            </dir>
        </section>
    </v-container>
</template>

<style scoped>
.image {
    text-align: center;
    margin-right: 25px;
}

.message {
    margin-left: 25px;
}

h3 {
    font-size: 12px;
}

/**PC対応のサイズ */
@media screen and (min-width : 990px) {
    .profile {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
    }

    h3 {
    font-size: 15px;
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