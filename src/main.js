import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import appHeader from "./components/generals/appHeader.vue";
// import appFooter from "./components/generals/appFooter.vue";
const app = createApp(App);

// global component
app.component("app-header", appHeader);
// app.component("app-footer", appFooter);

app.mount("#app");
