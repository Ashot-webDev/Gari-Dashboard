import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Ripple from "primevue/ripple";
import Aura from "@primevue/themes/aura";
import "../src/style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(ToastService);

app.component("Toast", Toast);
app.directive("ripple", Ripple);
app.mount("#app");
