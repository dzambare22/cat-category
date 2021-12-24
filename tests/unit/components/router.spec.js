import { shallowMount } from "@vue/test-utils";
import CatInformation from "@/components/CatInformation.vue";
import BreedInformation from "@/components/BreedInformation.vue";

describe("fetch when router match", () => {
  describe("CatInformation.vue", () => {
    it("renders if routes matches", () => {
      const $route = {
        path: "/category",
      };
      const wrapper = shallowMount(CatInformation, {
        mocks: {
          $route,
        },
      });
      expect(wrapper.vm.$route.path).toEqual($route.path);
    });
  });
  describe("BreedInformation.vue", () => {
    it("renders if routes matches", () => {
      const $route = {
        path: "/breed",
      };
      const wrapper = shallowMount(BreedInformation, {
        mocks: {
          $route,
        },
      });
      expect(wrapper.vm.$route.path).toEqual($route.path);
    });
  });
});
