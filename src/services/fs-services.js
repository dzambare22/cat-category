import axios from "axios";

export default {
  getAllCategories() {
    return axios.get("https://api.thecatapi.com/v1/categories");
  },
  getAllBreeds() {
    return axios.get("https://api.thecatapi.com/v1/breeds");
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
  getBreedImageOnSearch(breedId) {
    var params = {
      breed_ids: breedId,
      limit: 8
    };
    return axios.get("https://api.thecatapi.com/v1/images/search?", {
      params: params
    });
  },
};
