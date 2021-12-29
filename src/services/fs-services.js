import axios from "axios";

export default {
  getAllInfo(api) {
    return axios.get(api);
  },
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
  }
};
