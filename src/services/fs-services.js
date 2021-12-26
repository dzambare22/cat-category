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
      limit: 12,
      page: pageSize,
    };
    if (categoryId) {
      params.category_ids = categoryId;
    }
    return axios.get("https://api.thecatapi.com/v1/images/search?", {
      params: params,
    });
  },
  getBreedImageOnSearch(breedId) {
    var params = {
      limit: 12,
    };
    if (breedId) {
      params.breed_ids = breedId;
    }
    return axios.get("https://api.thecatapi.com/v1/images/search?", {
      params: params,
    });
  },
};
