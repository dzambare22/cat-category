<template>
  <div class="main">
    <div class="row">
      <div class="col-md-4">
        <select
          class="custom-select"
          v-model="selectedCategory"
          @change="onChange()"
          aria-placeholder="label"
        >
          <option value="" selected disabled>Please select</option>
          <option v-for="(item, index) in items" :key="index" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="col-md-8 float-right">
        <Pagination
          class="float-right"
          v-model="page"
          :rows-number="rows"
          :rows-per-page="5"
          @onPageChange="onPageChange"
        />
      </div>
    </div>
    <div class="row image-section">
      <div
        class="col-6 col-sm-4 col-md-3 col-lg-2 pb-2"
        v-for="(image, index) in images"
        :key="index"
      >
        <div class="card">
          <img
            :src="image.url"
            class="img-fluid"
            :title="image.description"
            data-testid="cat-img"
          />
        </div>
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
          return response.map((ele) => {
            return {
              id: ele.id,
              name: ele.name[0].toUpperCase() + ele.name.substring(1),
            };
          });
        });
    },
    async onChange() {
      this.images = await apiService
        .getImageOnChange(
          this.tab,
          this.getCategoryImagesUrl,
          this.selectedCategory,
          this.page
        )
        .then((response) => {
          return response.map((data) => {
            return {
              url: data.url,
              description: data.breeds.length ? data.breeds[0].description : "",
            };
          });
        });
    },
    onPageChange(page) {
      this.page = page;
      this.onChange();
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  margin-top: 75px;
  .card {
    height: 200px;
  }
  .image-section {
    overflow: auto;
    overflow-x: hidden;
    .img-fluid {
      width: 100%;
      max-width: 380px;
      height: 100%;
    }
  }
}
</style>
