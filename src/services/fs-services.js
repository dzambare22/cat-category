// import axios from "axios";
// import fetch from "node-fetch";
import { URLSearchParams } from "core-js/modules/web.url-search-params";

export default {
  getAllInfo(api) {
    return fetch(api).then((response) => response.json());
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
    // return axios.get(api, {
    //   params: params
    // })
    return fetch(api + new URLSearchParams(params)).then((response) =>
      response.json()
    );
  },
};
