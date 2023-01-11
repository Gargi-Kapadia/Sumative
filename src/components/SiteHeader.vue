<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
   const button = () => {
router.push("/Login");
}
</script>

<template>
<div>
<h1>Movies.CO</h1>
<button @click="button()" class="button">Login</button>
</div>
</template>

<style scoped>
div {
    text-align: center;
}
.button {
    background-color: lightgray;
    margin-bottom: 50px;
}
h1 {
    font-size: 100px;
    margin-bottom: 5px;
    margin-top: 5px;
    text-align: center;
}
</style>
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
