import { createPinia } from "pinia";
import { createSSRApp } from "vue";
import App from "./App.vue";
// @ts-ignore
import { createRouter } from "./router.ts";

import "./assets/main.css";

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  app.use(pinia);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
