import { mount } from "@vue/test-utils";
import Pagination from "@/common/Pagination.vue";

describe("CommonComponent.vue", () => {
  let wrapper;
  wrapper = mount(Pagination);
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
    // expect(instance.onPageClick).toEqual(3);
  });
});
