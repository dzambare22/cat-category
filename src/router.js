import Vue from "vue";
import Router from "vue-router";
import Category from "./components/CatInformation";
import Breed from "./components/BreedInformation";

Vue.use(Router);

export default new Router({
  linkActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "category" },
    },
    {
      path: "/category",
      name: "category",
      component: Category,
    },
    {
      path: "/breed",
      name: "breed",
      component: Breed,
    },
  ],
});
