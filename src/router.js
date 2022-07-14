import { createRouter, createWebHistory } from "vue-router";

import Entrada from "./views/Entrada.vue"

const routes = [
    { path:'/' , component: Entrada},
    { path:'/views/Entrada.vue', component: Entrada}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;


