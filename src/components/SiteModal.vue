<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

let data = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "354ab13223b58e3243b70a0085da1b2e",
      // append_to_response: "videos",
    },
  })
).data;
// const getMovie = async (movies) => {
//   response.value = (
//     await getData(`https://api.themoviedb.org/3/movie/${movies}`, {
//       params: {
//         api_key: "354ab13223b58e3243b70a0085da1b2e",
//         append_to_response: "videos",
//       },
//     })
//   ).data;
//   video.value = response.value.videos.results
//     .filter((video) => video.type === "Trailer")
//     .at(0).key;
// };

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1 id="title">Title: {{ data.title }}</h1>
        <p id="release_date">Release date: {{ data.release_date }}</p>
        <p id="overview">Overview: {{ data.overview }}</p>
        <h2>
        <button
        @click="
            store.addToCart(props.id, {
              id: data.id,
              poster: data.poster_path,
              title: data.title,
              date: data.release_date,
            })
          "
          >Purchase</button>
          <a :href="`https://www.youtube.com/embed/${video}`" target="_blank"
            >Movie Trailer!</a
          >
        </h2>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}
.modal-outer-container .modal-inner-container {
  background-color: #6c7f8f;
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
  border-radius: 5px;
}
.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

h1 {
  font-size: 40px;
  color: white;
}
.modal-inner-container {
  padding: 10px;
}

button {
  top: -0.5px;
}

p {
  font-size: 25px;
}
</style>