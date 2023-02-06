import { createApp } from "./main.ts";

const { app, router } = createApp();

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount("#app");

  console.log("hydrated");
});
