import axios from "axios";

export default {
  getAllCategories() {
    return axios.get("https://api.thecatapi.com/v1/categories");
  },
  getImageOnSerach(categoryId, pageSize) {
    var params = {
      category_ids: categoryId,
      limit: 10,
      page: pageSize,
    };
    return axios.get("https://api.thecatapi.com/v1/images/search?", {
      params: params,
    });
  },
};
