import { shallowMount } from "@vue/test-utils";
import CommonComponent from "@/common/CommonComponent.vue";

describe("CommonComponent.vue", () => {
  let wrapper;
  wrapper = shallowMount(CommonComponent, {
    propsData: {
      getCategoryUrl: "https://api.thecatapi.com/v1/categories",
      getCategoryImagesUrl: "https://api.thecatapi.com/v1/images/search?",
      tab: "Category",
      label: "Categories",
    },
  });
  it("is a Vue instance", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm).toBeTruthy();
  });
  it("should check props", () => {
    expect(wrapper.props("getCategoryUrl")).toBe(
      "https://api.thecatapi.com/v1/categories"
    );
    expect(wrapper.props("getCategoryImagesUrl")).toBe(
      "https://api.thecatapi.com/v1/images/search?"
    );
    expect(wrapper.props("tab")).toBe("Category");
    expect(wrapper.props("label")).toBe("Categories");
  });
  it("should renders vuetify components", () => {
    //assert
    expect(wrapper.find("[data-testid='select-category']").exists()).toBe(true);
    expect(wrapper.find("[data-testid='pagination-button']").exists()).toBe(
      true
    );
  });
  it("renders if variable is defined", () => {
    console.log("this test case runs");
    expect(wrapper.vm._data.selectedCategory).toBeDefined();
    expect(wrapper.vm._data.items).toBeDefined();
    expect(wrapper.vm._data.images).toBeDefined();
    expect(wrapper.vm._data.page).toBeDefined();
  });
  // it("check images url", () => {
  //   // const ev = {
  //   //   url: "https://28.media.tumblr.com/tumblr_ks1a707b1b1qa9hjso1_1280.png"
  //   // }
  //   wrapper.vm.images = [
  //     {
  //       url: "https://28.media.tumblr.com/tumblr_ks1a707b1b1qa9hjso1_1280.png",
  //     },
  //     {
  //       url: "https://cdn2.thecatapi.com/images/r3.jpg",
  //     }
  //   ];
  //   // expect(wrapper.vm.images[0].url).toBe('');
  //   wrapper.vm.onChange();
  //   expect(wrapper.vm.images[0].url).toEqual("https://28.media.tumblr.com/tumblr_ks1a707b1b1qa9hjso1_1280.png")
  // });
  it('clicks it', () => {
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'onChange')
    instance.forceUpdate();

    const p = wrapper.find("[data-testid='select-category']")
    p.simulate('change')
    expect(spy).toHaveBeenCalled()
})
});
