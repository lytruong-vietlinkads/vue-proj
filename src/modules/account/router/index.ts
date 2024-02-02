import { RouteRecordRaw } from "vue-router";
import AccountList from "../views/AccountList.vue";
import AccountCreate from "../views/AccountCreate.vue";
const baseUrl = "/account";
const routes: Array<RouteRecordRaw> = [
  {
    path: `${baseUrl}`,
    component: AccountList,
    // children: [
    //   {
    //     path: `${baseUrl}/create`,
    //     name: "ACCOUNT_CREATE",
    //     component: AccountCreate,
    //     // component: () => import(/* webpackChunkName: "view-[request]" */ "@/components/Input/Showinfo.vue"),
    //   },
    // ],
  },
  {
    path: `${baseUrl}/create`,
    component: AccountCreate,
  },
  // { path: '/:pathMatch(.*)*', component: () => import("@/components/Share/PageNotFound.vue") },
];
console.log(routes)
export default routes;
