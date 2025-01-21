import { defineCustomElement } from "vue";
import App from "./App.ce.vue";

const VueAppCE = defineCustomElement(App, {
  styles: App.styles,
  shadowRoot: true,
  configureApp: (app) => {},
});

customElements.define("vue-app", VueAppCE);
