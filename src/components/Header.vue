<template>
    <v-container>
        <div class="header">
            <router-link to="/" class="link" style="color: black;">Home</router-link>
            <router-link to="/about" class="link">About</router-link>
            <router-link to="Work" class="link">Work</router-link>
            <router-link to="/Contact" class="link">Contact</router-link>
        </div>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
}
.link {
    font-family: sans-serif;
    font-weight: 600;
    text-decoration: none;
    font-size: 15px;
    color: black;
}
</style>



