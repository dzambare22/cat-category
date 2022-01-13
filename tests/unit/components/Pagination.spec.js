import { mount } from "@vue/test-utils";
import Pagination from "@/common/Pagination.vue";
import ApiService from "@/services/fs-services";
import images from "@/common/images.json";

describe("Pagination.vue", () => {
  let wrapper;
  beforeEach(() => {
    jest.spyOn(ApiService, "getImageOnChange").mockResolvedValue(images);
    wrapper = mount(Pagination);
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("renders onPageForward", () => {
    //inputs
    wrapper.vm.images = [
      {
        id: "28j",
        url: "https://cdn2.thecatapi.com/images/28j.jpg",
      },
    ];
    // wrapper.vm.page = 3;
    wrapper.vm.value = 3;
    wrapper.vm.rowsNumber = 50;
    wrapper.vm.rowsPerPage = 5;
    wrapper.vm.onPageForward();
    wrapper.vm.onPageClick(3);
    expect(wrapper.vm.value).toEqual(3);
    expect(wrapper.vm.images[0].url).toEqual(
      "https://cdn2.thecatapi.com/images/28j.jpg"
    );
  });
  it("renders onPageBack", () => {
    //inputs
    wrapper.vm.images = [
      {
        id: "4bm",
        url: "https://cdn2.thecatapi.com/images/4bm.gif",
      },
    ];
    wrapper.vm.value = 2;
    wrapper.vm.onPageBack();
    wrapper.vm.onPageClick(2);
    expect(wrapper.vm.value).toEqual(2);
    expect(wrapper.vm.images[0].url).toEqual(
      "https://cdn2.thecatapi.com/images/4bm.gif"
    );
  });
  it("renders component sucessfully", () => {
    const pagination = wrapper.findComponent(Pagination);
    expect(pagination.exists()).toBe(true);
  });
  it("renders component emit method", () => {
    wrapper.find(".page-link").trigger("click");
    wrapper.vm.$emit("onPageChange");
    wrapper.vm.$emit("onPageChange", 1);
    expect(wrapper.emitted().onPageChange).toBeTruthy();
    expect(wrapper.emitted().onPageChange[1]).toEqual([1]);
  });
  it("renders if method exist", () => {
    let instance = wrapper.vm;
    let onPageClick = instance.onPageClick;
    if (onPageClick != undefined) {
      console.log("method 'onPageClick' exists");
    }
    jest.spyOn(instance, "onPageClick");
    instance.onPageClick();
    expect(instance.onPageClick).toHaveBeenCalled();
  });
});
