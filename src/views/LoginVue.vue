<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);
const login = () => {
  if (username.value === "Tmdb" && password.value === "Movies") {
    console.log('correct');
    router.push("/purchase");
  } else {
    error.value = true;
  }
};
</script>

<template>
<div class="login-container">
<h1>Login</h1>
<form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <input class="submit" type="submit" value="Login" />
    </form>
    <div v-if="error" class="error">
      <p>Error please try again!</p>
      </div>
      </div>
</template>

<style scoped>
.login-container {
  background-color:	#213547;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120vw;
  height: 120vh;
  font-size: 3.5rem;
  margin-top: -12rem;
  margin-left: -8rem;
  margin-right: -8rem;
  margin-bottom: -20rem;
}
form {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 0.25rem;
  margin-top: -5rem;
}
form input {
  padding: 0.25rem;
  color: #213547;
  font-size: 1.5rem;
  font-weight: bold;
}
.error {
    color: #fbff1b;
    font-size: 1.5rem;
    font-weight: bolder;
}
.submit {
    background-color: lightgray;
    border-radius: 5px;
}
h1 {
  margin-bottom: 100px;
  font-size: 200px;
}
</style>