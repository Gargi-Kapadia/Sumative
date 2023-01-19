<script setup>
import SiteFooter from "../components/SiteFooter.vue";
import SiteModal from "../components/SiteModal.vue";
import { ref } from "vue";
import { useStore } from "../store/index.js"

const store = useStore();
const showModal = ref(false);
const selectedId = ref(0);
const genre = ref(35);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  await store.getMovies(genre.value);
}

</script>

<template>
   <RouterLink to="/cart" custom v-slot="{ navigate }">
    <button class="cart" @click="navigate" role="link">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" size="2x"/>
   </button>
  </RouterLink>
  <RouterLink to="/" custom v-slot="{ navigate }">
    <button class="home" @click="navigate" role="link">
      <font-awesome-icon icon="fa-solid fa-house" size="2x" />
   </button>
  </RouterLink>
  <h1 id="movies">Movies</h1>
  <select v-model="genre" @change="getGenres()">
    <option value="35">Comedy</option>
    <option value="10751">Family</option>
    <option value="16">Animation</option>
    <option value="12">Adventure</option>
    <option value="14">Fantasy</option>
  </select>
  <div class="Movies-contanier">
    <img v-for="movie in store.movies" :id="movie.id" @click="openModal(movie.id)"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
  <div class="footer">
    <SiteFooter></SiteFooter>
  </div>
</template>

<style>

.Movies-contanier {
  display: grid;
  grid-template-columns: 300px 300px 300px 300px ;
  align-content: center, space-evenly;
  gap: 5px;
  padding-left: 25px;
  padding-bottom: 50px;
  margin-bottom: -120px;
}

select {
  border: transparent;
  text-align: center;
  font-size: 25px;
  border-radius: 5px;
  margin-left: 550px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #aad2f3 ;

}
img {
  height: 400px;
  aspect-ratio: 2/3;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 15px;
}
h1 {
  text-align: center;
  font-size: 200px;
  margin: 0px;
  margin-top: 10px;
}
.footer {
  text-align: center;
  padding-top: 60px;
}
button {
  background-color: transparent;
}

.cart {
  float: right;
  padding-left: 10px;
  color: aliceblue;
}
.home {
  padding-left: 10px;
  color: aliceblue;
}
</style>