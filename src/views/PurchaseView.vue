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

// const getMovies = async () => {
//   console.log(movies.value);
//   console.log(response.value);
//   response.value = (
//     await getData(`https://api.themoviedb.org/3/trending/movie/week`, {
//       params: {
//         api_key: "354ab13223b58e3243b70a0085da1b2e",
//         append_to_response: "videos",
//       },
//     })
//   ).data["results"];
// };

// const getData = async (url, params) => {
//   try {
//     return await axios.get(url, params);
//   } catch (error) {
//     console.log(error);
//   }
// };

// await getMovies();

</script>

<template>
   <RouterLink to="/cart" custom v-slot="{ navigate }">
    <button @click="navigate" role="link">Cart</button>
  </RouterLink>
    <div class="sidebar">
<div class="sidebar"> 
  <select v-model="genre" @change="getGenres()">
    <option value="35">Comedy</option>
    <option value="10751">Family</option>
    <option value="16">Animation</option>
    <option value="12">Adventure</option>
    <option value="14">Fantasy</option>
  </select>
  </div>
</div>
  <h1 id="movies">Movies</h1>
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
.sidebar {
height: 100%;
width: 150px;
position: fixed;
left: 0;
top: 0;
padding-top: 40px;
background-color: gray;
}

.sidebar div, select {
padding: 8px;
font-size: 24px;
display: block;
}
.Movies-contanier {
  display: grid;
  grid-template-columns: 325px 325px 325px 325px ;
  align-content: center, space-evenly;
  gap: 5px;
  padding-left: 75px;
  padding-bottom: 50px;
  margin-bottom: -120px;
}

select {
  background-color: gray;
  border: transparent;
}
img {
  height: 425px;
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
</style>