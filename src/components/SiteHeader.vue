<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
   const button = () => {
router.push("/Login");
}
</script>

<template>
 <div class="image">
 <div class="text">
    <h1>MovieCo</h1>
<button @click="button()" class="button">Login</button>
</div>
 <img src="https://images.squarespace-cdn.com/content/v1/57e05e534402434aa0f846c2/1498856270269-IQ53Z6S64R72PPTSM9K4/FEFHfuEb.jpeg?format=2500w"  />
 </div>
</template>

<style scoped>
img {
    width: 100%;
    height: 750px;
    background-repeat: no-repeat;
    object-fit: fill;
    padding: 0px;
    margin: 0px;

 }
.image {
    position: relative;
}
.text {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    text-align: center;
    margin: 0px;
    padding: 335px;
    padding-bottom: -55px;
    margin-left: 0px;
    margin-top: -125px;
}
.button {
    font-size: 30px;
    margin-top: 15px;
    position: relative;
    background-color: #aad2f3;
}
</style>
