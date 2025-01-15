import { defineCustomElement } from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
let app, db;
export function firebaseInit(firebaseConfig) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { app, db };

const MyApp = defineCustomElement(App);
customElements.define("my-vue-app", MyApp);
