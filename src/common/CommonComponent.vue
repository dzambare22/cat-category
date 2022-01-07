<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-4">
        <label>{{ label }}:</label>
        <select
          class="custom-select"
          v-model="selectedCategory"
          @change="onChange()"
        >
          <option v-for="(item, index) in items" :key="index" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="row image-section">
      <div class="col-md-4" v-for="(image, index) in images" :key="index">
        <div class="card">
          <img :src="image.url" class="img-fluid" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <Pagination
          v-model="page"
          :rows-number="rows"
          :rows-per-page="5"
          @OnPageChange="OnPageChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import apiService from "../services/fs-services";
import Pagination from "./Pagination";

export default {
  name: "CatInfo",
  components: {
    Pagination,
  },
  data() {
    return {
      color: null,
      colors: [],
      page: 1,
      rows: 50,
      value: 1,
      selectedCategory: "",
      items: [],
      images: [],
    };
  },
  props: {
    getCategoryUrl: String,
    getCategoryImagesUrl: String,
    tab: String,
    label: String,
  },
  mounted() {
    this.getInfo();
    this.onChange();
  },
  methods: {
    async getInfo() {
      this.items = await apiService
        .getAllInfo(this.getCategoryUrl)
        .then((response) => {
          var items = [];
          response.data.forEach((ele) => {
            var obj = {
              id: ele.id,
              name: ele.name[0].toUpperCase() + ele.name.substring(1),
            };
            items.push(obj);
          });
          return items;
        });
    },
    async onChange() {
      var images = [];
      this.images = await apiService
        .getImageOnChange(
          this.tab,
          this.getCategoryImagesUrl,
          this.selectedCategory,
          this.page
        )
        .then((response) => {
          response.data.forEach((data) => {
            images.push({
              url: data.url,
            });
          });
          return images;
        });
    },
    OnPageChange(page) {
      this.page = page;
      this.onChange();
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  .image-section {
    overflow: auto;
    overflow-x: hidden;
    height: 300px;
    .img-fluid {
      max-width: 380px;
      height: 250px;
    }
  }
}
</style>
