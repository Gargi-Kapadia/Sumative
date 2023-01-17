import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from "./router/index.js"
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons' 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 

library.add(faUserSecret)
library.add( faCartShopping)

const pinia = createPinia();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(pinia).mount('#app')
