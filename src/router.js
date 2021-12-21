import Vue from "vue";
import Router from "vue-router";
import Sidebar from "./components/SideBar";
import Breed from "./components/BreedInformation";

Vue.use(Router);

export default new Router({
    mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "searchBy" },
    },
    {
      path: "/category",
      name: "searchBy",
      component: Sidebar
    },
    {
      path: "/breed",
      name: "breed",
      component: Breed
    },
  ],
});
