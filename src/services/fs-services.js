import axios from "axios";

export default {
  getAllInfo(api) {
    return axios.get(api);
  },
  // getAllBreeds() {
  //   return axios.get("https://api.thecatapi.com/v1/breeds");
  // },
  getImageOnChange(tab, api, id, pageSize) {
    var params = {
      limit: 12,
      page: pageSize,
    };
    if (id && tab === "Category") {
      params.category_ids = id;
    }
    if (id && tab === "Breed") {
      params.breed_ids = id;
    }
    return axios.get(api, {
      params: params,
    });
  },
  // getBreedImageOnSearch(breedId, pageSize) {
  //   var params = {
  //     limit: 12,
  //     page: pageSize
  //   };
  //   if (breedId) {
  //     params.breed_ids = breedId;
  //   }
  //   return axios.get("https://api.thecatapi.com/v1/images/search?", {
  //     params: params,
  //   });
  // },
};
