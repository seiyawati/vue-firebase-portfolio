<template>
    <v-container>
        <div></div>
        <h1 style="text-align: center; font-size: 40px;">My Works</h1>
        <hr>
        <v-layout wrap>
            <v-flex>
                <img src="../assets/marine.png" alt="file" style="width:100%;">
                <a href="https://stormy-hollows-51545.herokuapp.com/"> 
                    <h2>Marine Biology Book</h2>
                </a>
                <p></p>
                <h3>Laravel/Vue.js/PostgreSQL/Heroku</h3>
                <p></p>
                <h4>このアプリは海洋生物の図鑑アプリです。海にはまだ未確認の生物がたくさんいるので、珍しい生物の写真を共有できたらと思い作りました。私は東京海洋大学に通っているので大学でも共有できたらと考えています。技術としてはフロントにVue.js、バックにLaravelを使用しました。SPAとなっています。</h4>
                <p></p>
                <a href="https://github.com/seiyawati/vue-laravel-app">
                    <v-icon large color="black">{{ mdiGithub }}</v-icon>
                </a>
            </v-flex>
        </v-layout>    
        <p style="height:25px;"></p>
        <hr>
        <p style="height:25px;"></p>
        <v-layout wrap>
            <v-flex>
                <img src="../assets/blog.png" alt="" style="width:100%;">
                <a href="https://seiyablog.herokuapp.com/"> 
                    <h2>Seiya's Tech Blog</h2>
                </a>
                <p></p>
                <h3>Laravel/Bootstrap/MySQL/Heroku</h3>
                <p></p>
                <h4>このブログは自身の技術ブログとして、日々の学習での気付きをメモしています。プログラミングを初めて最初の成果物がこちらになります。なおこのブログはLaravelを用いて一から実装して、デザインにはBootstrapを使用しています。</h4>
                <p></p>
                <a href="https://github.com/seiyawati/laravel-my-tech-blog">
                    <v-icon large color="black">{{ mdiGithub }}</v-icon>
                </a>
            </v-flex>
        </v-layout>
        <p style="height:25px;"></p>
        <hr>
        <p style="height:25px;"></p>
        <v-layout wrap>
            <v-flex>
                <img src="../assets/vue.png" alt="" style="width:100%;">
                <h2>My Portfolio by Vue.js</h2>
                <p></p>
                <h3>Vue.js/Vuetify/Typer.js/Particle.js/Firebase</h3>
                <p></p>
                <h4>インターンや就職活動などで自分のことを紹介するために作ったポートフォリオサイトになります。デザインにはUIコンポーネントのVuetifyを使いアニメーションにはTyper.jsなどを使って、Firebaseでホスティングしています。</h4>
                <p></p>
                <a href="https://github.com/seiyawati/vue-firebase-portfolio">   
                    <v-icon large color="black">{{ mdiGithub }}</v-icon>
                </a>
            </v-flex>
        </v-layout>    
        <p style="height:25px;"></p>
        <hr>
        <p style="height:25px;"></p>
        <v-layout wrap>
            <v-flex>
                <img src="../assets/gatsby1.png" alt="" style="width:100%;">
                <a href="https://myportfolio-blog.netlify.app/about">
                    <h2>My Portfolio by Gatsby.js</h2>
                </a>
                <p></p>
                <h3>Gatsby.js/Netlify</h3>
                <p></p>
                <h4>GraphQLについて学習する時、Gatsby.jsの勉強をしたので作成しました。しかし、私はVue.jsをメインにやっていてReact.jsに関してはあまりやっていないので、今はVue.jsで作ったポートフォリオサイトを運用しています。</h4>
                <p></p>
                <a href="https://github.com/seiyawati/my-portfolio-gatsby.js">
                    <v-icon large color="black">{{ mdiGithub }}</v-icon>
                </a>
            </v-flex>
        </v-layout>
        <p style="height:25px;"></p>
        <hr>
        <p style="height:25px;"></p>
    </v-container>
</template>

<script>
import { mdiGithub } from '@mdi/js';

export default {
    data: () => ({
        mdiGithub,
    })
}
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