import { defineCustomElement } from "vue";
import App from "./App.ce.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import DatePicker from "primevue/datepicker";

const VueAppCE = defineCustomElement(App, {
  styles: [],
  shadowRoot: false,
  configureApp: (app) => {
    app.use(PrimeVue);
    app.component("DatePicker", DatePicker);
  },
});

customElements.define("vue-app", VueAppCE);
