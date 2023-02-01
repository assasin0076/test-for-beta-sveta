import { createRouter, createWebHistory, createMemoryHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ],
  })
}
