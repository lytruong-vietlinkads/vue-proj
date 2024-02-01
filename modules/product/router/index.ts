import { RouteRecordRaw } from "vue-router";

import ProductView from "../views/ProductView.vue";
const baseUrl = "/product";
const routes: Array<RouteRecordRaw> = [
  {
    path: `${baseUrl}`,
    component: ProductView,
    children: [
      {
        path: `${baseUrl}/detail/:id`,
        name: "PRODUCT_DETAIL",
        component: ProductView,
        // component: () => import(/* webpackChunkName: "view-[request]" */ "@/components/Input/Showinfo.vue"),
      },
    ],
  },
  // { path: '/:pathMatch(.*)*', component: () => import("@/components/Share/PageNotFound.vue") },
];

export default routes;
