<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
<div v-for="movie in Array.from(store.cart.values())" >
<img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <h1 class="date">{{ movie.date }}</h1>
    <h1 class="">{{ movie.title }}</h1>
    <button class="remove" @click="store.removeFromCart(movie.id)">Remove</button>
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
  margin-top: -300px;
  padding: 0px;
  padding-left: 500px;
  width: 50%;
  word-break: break-all; 
}
.date {
padding-top: -300px;
}
.remove{
  float: right;
  margin-top: 400px;
  background-color: white;
  margin-bottom: 25px;
}
div {
  padding-bottom: 500px;
  background-image: linear-gradient(to left, rgba(42, 99, 204, 0.352), #213547);
  
}
</style>