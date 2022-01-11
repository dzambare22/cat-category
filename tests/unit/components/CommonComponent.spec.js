import { mount } from "@vue/test-utils";
import CommonComponent from "@/common/CommonComponent.vue";

describe("CommonComponent.vue", () => {
  let wrapper;
  wrapper = mount(CommonComponent, {
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
    expect(wrapper.find(".custom-select").exists()).toBe(true);
    // expect(wrapper.find("[data-testid='cat-img']").exists()).toBe(true);
  });
  it("renders if variable is defined", () => {
    expect(wrapper.vm._data.selectedCategory).toBeDefined();
    expect(wrapper.vm._data.items).toBeDefined();
    expect(wrapper.vm._data.images).toBeDefined();
    expect(wrapper.vm._data.page).toBeDefined();
  });
  it("renders if method exist", () => {
    let instance = wrapper.vm;
    let onPageChange = instance.onPageChange;
    let getInfo = instance.getInfo;
    if (onPageChange != undefined) {
      console.log("method 'onPageChange' exists");
    }
    if (getInfo != undefined) {
      console.log("method 'getInfo' exists");
    }
    jest.spyOn(instance, "getInfo");
    instance.getInfo();
    jest.spyOn(instance, "onPageChange");
    instance.onPageChange();

    expect(instance.onPageChange).toHaveBeenCalled();
    expect(instance.getInfo).toHaveBeenCalled();
  });
  it("check array in methods", () => {
    const items = [
      {
        id: 5,
        name: "boxes",
      },
    ];
    expect(items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "boxes",
        }),
      ])
    );
  });
});
