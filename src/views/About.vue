<template>
    <v-container>
        <h1 style="text-align: center; font-size: 40px;">About Me</h1>
        <v-layout wrap>
            <v-avatar color="indigo" size="200" style="margin: 0 auto;">
                <v-img src="../assets/about.jpg"></v-img>
            </v-avatar>
        </v-layout>
        <p></p>
        <div style="display: flex; justify-content: center;">
            <div style="margin-right: 20px;">
                <h3>Name:</h3>
                <p></p>
                <h3>University:</h3>
                <p></p>
                <h3>Hobby:</h3>
                <p></p>
                <h3>Skill:</h3>
                <p></p>
                <h3>Award:</h3>
            </div>
            <div>
                <h3>川本聖也（Seiya Kawamoto）</h3>
                <p></p>
                <h3>東京海洋大学 海洋資源環境学部 環境学科</h3>
                <p></p>
                <h3>キックボクシング、HIPHOP、タイ料理</h3>
                <p></p>
                <v-icon color="red" large>{{ mdiLanguageHtml5  }}</v-icon>
                <v-icon color="blue" large>{{ mdiLanguageCss3 }}</v-icon>
                <v-icon color="rgb(121,83,178)" large>{{ mdiBootstrap }}</v-icon>
                <v-icon color="rgb(136,147,190)" large>{{ mdiLanguagePhp }}</v-icon>
                <v-icon color="red" large>{{ mdiLaravel }}</v-icon>
                <v-icon color="rgb(246,216,84)" large>{{ mdiLanguageJavascript }}</v-icon>
                <v-icon color="green" large>{{ mdiVuejs  }}</v-icon>
                <p></p>
                <h3>都内国公立大学空手道選手権大会団体組手第3位<br>
                    J-NETWORKアマチュアキックボクシング大会勝利者賞<br>
                    REBELSアマチュアキックボクシング大会勝利者賞<br>
                    WPMFアマチュアキックボクシング大会勝利者賞
                </h3>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mdiLanguagePhp } from '@mdi/js';
import { mdiLaravel } from '@mdi/js';
import { mdiLanguageJavascript } from '@mdi/js';
import { mdiVuejs } from '@mdi/js';
import { mdiBootstrap } from '@mdi/js';
import { mdiLanguageHtml5 } from '@mdi/js';
import { mdiLanguageCss3 } from '@mdi/js';

export default {
    data: () => ({
        mdiLanguagePhp,
        mdiLaravel,
        mdiLanguageJavascript,
        mdiVuejs ,
        mdiBootstrap,
        mdiLanguageHtml5,
        mdiLanguageCss3,
    }),
}
</script>