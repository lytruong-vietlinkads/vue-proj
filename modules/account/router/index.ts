import { RouteRecordRaw } from "vue-router";
import AccountView from "../views/AccountView.vue";
const baseUrl = "/account";
const routes: Array<RouteRecordRaw> = [
  {
    path: `${baseUrl}`,
    component: AccountView,
    children: [
      {
        path: `${baseUrl}/detail/:id`,
        name: "Account_DETAIL",
        component: AccountView,
        // component: () => import(/* webpackChunkName: "view-[request]" */ "@/components/Input/Showinfo.vue"),
      },
    ],
  },
  // { path: '/:pathMatch(.*)*', component: () => import("@/components/Share/PageNotFound.vue") },
];

export default routes;
