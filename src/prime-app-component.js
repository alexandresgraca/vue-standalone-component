import { defineCustomElement } from "vue";
import PrimeApp from "./PrimeApp.ce.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import DatePicker from "primevue/datepicker";

const PrimeAppCE = defineCustomElement(PrimeApp, {
  styles: PrimeApp.styles,
  shadowRoot: true,
  configureApp: (app) => {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
      },
    });
    app.component("DatePicker", DatePicker);
  },
});

customElements.define("prime-app", PrimeAppCE);
