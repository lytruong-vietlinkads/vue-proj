import { createApp } from "vue";
import App from "./App.vue";
import accountRouter from "./modules/account/router";
import productRouter from "./modules/product/router";
import carRouter from "./modules/car/router";
import "es6-promise/auto"; // Import polyfill es6-promise
import { createPinia } from "pinia";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import VueCookies from "vue-cookies";
import { createRouter, createWebHistory } from "vue-router";
import i18n from "./i18n";

const modules = import.meta.env.VITE_MODULES
  ? import.meta.env.VITE_MODULES.split(",")
  : [];
console.log("modules", modules);
let routes = [];
if (modules.length === 0) {
  routes.push(...accountRouter);
  routes.push(...productRouter);
  routes.push(...carRouter);
} else {
  if (modules.includes("account")) {
    routes.push(...accountRouter);
  }

  if (modules.includes("product")) {
    routes.push(...productRouter);
  }

  if (modules.includes("car")) {
    routes.push(...carRouter);
  }
}

const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(Vue3Toastify, {
  autoClose: 5000,
} as ToastContainerOptions);
app.use(VueCookies);
app.config.globalProperties.window = window;

routes.push({
  path: "/:pathMatch(.*)*",
  component: () => import("@/components/PageNotFound.vue"),
});

console.log(routes);
const router = createRouter({
  history: createWebHistory(""), // Set base path
  routes,
});
app.use(router);
app.use(i18n);
app.mount("#app");
