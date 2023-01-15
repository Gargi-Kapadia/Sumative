import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginVue from "../views/LoginVue.vue";
import PurchaseView from "../views/PurchaseView.vue";
import CartView from "../views/CartView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
        path: '/',
        name: 'Home',
        component: HomeView
      },
    {
      path: '/Login',
      name: 'LoginVue',
      component: LoginVue
    },
    {
        path: '/purchase',
        name: 'PurchaseView',
        component: PurchaseView
      },
      {
        path:'/cart',
        name: 'CartView',
        component: CartView
      }
  ],
});

export default router;