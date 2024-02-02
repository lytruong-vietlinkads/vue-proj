import { RouteRecordRaw } from "vue-router";

import CarView from "../views/CarView.vue";
const baseUrl = "/car";
const routes: Array<RouteRecordRaw> = [
  {
    path: `${baseUrl}`,
    component: CarView,
    children: [
      {
        path: `${baseUrl}/detail/:id`,
        name: "CAR_DETAIL",
        component: CarView,
        // component: () => import(/* webpackChunkName: "view-[request]" */ "@/components/Input/Showinfo.vue"),
      },
    ],
  },
  // { path: '/:pathMatch(.*)*', component: () => import("@/components/Share/PageNotFound.vue") },
];

export default routes;
