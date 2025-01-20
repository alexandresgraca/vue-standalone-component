import { defineCustomElement } from "vue";
import App from "./App.ce.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import DatePicker from "primevue/datepicker";

const VueAppCE = defineCustomElement(App, {
  styles: App.styles,
  shadowRoot: true,
  configureApp: (app) => {
    app.use(PrimeVue, {
      theme: {
        preset: Aura
      }
    });
    app.component("DatePicker", DatePicker);
  },
});

customElements.define("vue-app", VueAppCE);
