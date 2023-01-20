import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from "./router/index.js"
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUserSecret } from '@fortawesome/free-solid-svg-icons' 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import { faHouse } from '@fortawesome/free-solid-svg-icons' 
import { faFilm } from '@fortawesome/free-solid-svg-icons' 
import {  faCircleXmark } from '@fortawesome/free-solid-svg-icons' 

library.add(faUserSecret)
library.add( faCartShopping)
library.add( faHouse)
library.add( faFilm)
library.add( faCircleXmark)

const pinia = createPinia();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(pinia).mount('#app')
