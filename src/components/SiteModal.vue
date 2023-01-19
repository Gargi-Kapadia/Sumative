<script setup>
import axios from "axios";
import { ref } from "vue";
import { useStore } from "../store/index.js";

const response = ref(null);
const video = ref(null);
const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

response.value = (
  await getData(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "354ab13223b58e3243b70a0085da1b2e",
      append_to_response: "videos",
    },
  })
).data;
video.value = response.value.videos.results.filter((video) => video.type === "Trailer").at(0).key;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1 id="title">{{ response.title }}</h1>
        <p id="release_date">Release date: {{ response.release_date }}</p>
        <p id="overview">Overview: {{ response.overview }}</p>
        <img :src="`https://image.tmdb.org/t/p/w500${response.poster_path}`" />
          <a class="trailer" :href="`https://www.youtube.com/embed/${video}`" target="_blank"
            >Movie Trailer!</a>
        <h2>
          <button class="purchase-button"
            @click="
              store.addToCart(props.id, {
                id: response.id,
                poster: response.poster_path,
                title: response.title,
                date: response.release_date,
              })
            "
          >
            Purchase
          </button>
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
  background-color: #091723;
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
.trailer {
  display: block;
  text-align: left;
  margin-top: 5px;
  color: rgb(234, 143, 32);
  font-size: 18px;
  margin-top: -150px;
  
}

h1 {
  font-size: 25px;
  color: white;
  width: 50%;
}
.modal-inner-container {
  padding: 10px;
}

.purchase-button {
  top: -5px;
  background-color: white;
  width:50%
}

p {
  font-size: 18px;
  width: 50%;

}
img {
  display:inline-block;
  height: 325px;
  aspect-ratio: 2/3;
  margin-top: -200px;
  margin-left: 500px;


}
</style>
