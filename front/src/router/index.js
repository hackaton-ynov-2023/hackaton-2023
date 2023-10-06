import { createRouter, createWebHistory } from "vue-router"
import MapView from "../views/MapView.vue"
import ReportViews from "../views/ReportViews.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "map",
      component: MapView
    },
    {
      path: "/report",
      name: "report",
      component: ReportViews
    },
  ]
})

export default router
