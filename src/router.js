import { createRouter, createWebHistory } from "vue-router";

import Entrada from "./views/Entrada.vue"
import MantencionFolios from "./views/MantencionFolios.vue"

const routes = [
    { path:'/' , component: Entrada},
    { path:'/views/Entrada.vue', component: Entrada},
    { path:'/views/MantencionFolios.vue', component: MantencionFolios}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;


