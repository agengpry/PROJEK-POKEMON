import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Tambah from "../views/Tambah.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { requireLogin: true },
    },
    {
        path: '/tambah',
        name: "Tambah",
        component: Tambah
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;