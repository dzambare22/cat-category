import { shallowMount } from "@vue/test-utils";
import CatInformation from "@/components/CatInformation.vue";


describe("CatInformation.vue", () => {
  it("renders if vAutocomplete is defined", () => {
    const wrapper = shallowMount(CatInformation);
    // const vAutocomplete = wrapper.find(".v-autocomplete");
    expect(wrapper.find("[data-testid='select-category']").exists()).toBe(true);
  });
  it("renders if vPagination is defined", () => {
    const wrapper = shallowMount(CatInformation);
    expect(wrapper.find("[data-testid='pagination-button']").exists()).toBe(
      true
    );
  });
  it("renders component sucessfully", () => {
    const wrapper = shallowMount(CatInformation);
    const catInfo = wrapper.findComponent(CatInformation);
    expect(catInfo.exists()).toBe(true);
  });
  it("renders if variable is defined", () => {
    const wrapper = shallowMount(CatInformation);
    expect(wrapper.vm._data.selectedCategory).toBeDefined();
    expect(wrapper.vm._data.items).toBeDefined();
    expect(wrapper.vm._data.images).toBeDefined();
    expect(wrapper.vm._data.page).toBeDefined();
  });
});
