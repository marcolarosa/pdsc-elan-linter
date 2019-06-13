"use strict";

// import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";

import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import VueScrollTo from "vue-scrollto";
Vue.use(ElementUI, { locale });
Vue.use(VueScrollTo);

import App from "components/app.vue";
import { router } from "./routes";
import { store } from "store";

App.router = router;
App.store = store;
const app = new Vue(App);
