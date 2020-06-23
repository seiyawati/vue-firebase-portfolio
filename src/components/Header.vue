<template>
    <v-container>
      <v-app-bar color="#34495e" app dark>
          <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
            <router-link to="/" class="link">HOME</router-link>
        </v-btn>
        <v-btn text>
            <router-link to="/about" class="link">About</router-link>
        </v-btn>
        <v-btn text>
            <router-link to="Work" class="link">Work</router-link>
        </v-btn>
        <v-btn text>
            <router-link to="/Contact" class="link">Contact</router-link>
        </v-btn>
      </v-toolbar-items>
      </v-app-bar>
    </v-container>
</template>

<style scoped>
.link {
    font-family: sans-serif;
    font-weight: 600;
    text-decoration: none;
    font-size: 15px;
    color: azure;
}
</style>


