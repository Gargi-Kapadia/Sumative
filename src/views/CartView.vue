<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
<div v-for="movie in Array.from(store.cart.values())" >
<img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <h2 class="date">Release Date: {{ movie.date }}</h2>
    <h1>{{ movie.title }}</h1>
    <button class="remove" @click="store.removeFromCart(movie.id)">
    <font-awesome-icon icon=" fa-solid fa-circle-xmark" size="2x" /></button>
  </div>
</template>

<style scoped>
img {
  display: inline;
  height: 500px;
  aspect-ratio: 2 / 3;
  padding: 50px;
}
h1 {
  font-size: 50px;
  margin-top: -550px;
  padding: 0px;
  padding-left: 500px;
  text-align: left;
}
h2 {
  position: absolute;
  padding: 0px;
  padding-left: 700px;
  width: 50%;
  margin-top: -530px;
  text-align: right;
  font-size: 30px;
}
.date {
padding-top: -300px;
}
.remove{
  float: right;
  margin-top: 400px;
  background-color: transparent;
  margin-bottom: 25px;
  color: white;
}
div {
  padding-bottom: 500px;
  background-image: linear-gradient(to left, rgba(42, 99, 204, 0.352), #213547);
  
}
</style>