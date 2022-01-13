import { mount } from "@vue/test-utils";
import CommonComponent from "@/common/CommonComponent.vue";
import apiService from "@/services/fs-services";
import items from "@/common/items.json";
import images from "@/common/images.json";

describe("CommonComponent.vue", () => {
  let wrapper;
  beforeEach(() => {
    jest.spyOn(apiService, "getAllInfo").mockResolvedValue(items);
    jest.spyOn(apiService, "getImageOnChange").mockResolvedValue(images);
    wrapper = mount(CommonComponent, {
      propsData: {
        getCategoryUrl: "https://api.thecatapi.com/v1/categories",
        getCategoryImagesUrl: "https://api.thecatapi.com/v1/images/search?",
        tab: "Category",
        label: "Categories",
      },
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("renders getAllInfo", () => {
    //inputs
    wrapper.vm.items = [
      {
        id: 2,
        name: "Space",
      },
    ];
    wrapper.vm.getInfo();
    expect(wrapper.vm.items[0].name).toEqual("Space");
  });
  it("renders getImage", () => {
    //inputs
    wrapper.vm.images = [
      {
        id: "4bm",
        url: "https://cdn2.thecatapi.com/images/4bm.gif",
      },
    ];
    wrapper.vm.onChange();
    expect(wrapper.vm.images[0].url).toEqual(
      "https://cdn2.thecatapi.com/images/4bm.gif"
    );
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
    let onChange = instance.onChange;
    if (onPageChange != undefined) {
      console.log("method 'onPageChange' exists");
    }
    if (getInfo != undefined) {
      console.log("method 'getInfo' exists");
    }
    if (onChange != undefined) {
      console.log("method 'onChange' exists");
    }
    jest.spyOn(instance, "getInfo");
    instance.getInfo();
    jest.spyOn(instance, "onPageChange");
    instance.onPageChange();
    jest.spyOn(instance, "onChange");
    instance.onChange();

    expect(instance.onPageChange).toHaveBeenCalled();
    expect(instance.getInfo).toHaveBeenCalled();
    expect(instance.onChange).toHaveBeenCalled();
  });
});
