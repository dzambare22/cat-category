<template>
  <div id="category-section">
    <v-row>
      <v-col cols="12" class="cat-category mt-5">
        <v-autocomplete
          v-model="selectedCategory"
          data-testid="select-category"
          :items="items"
          item-text="name"
          item-value="id"
          label="Categories"
          deletable-chips
          small-chips
          dense
          @change="onCategoryChange()"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row class="category-images">
      <v-col
        v-for="(image, index) in images"
        data-testid="cat-images"
        :key="index"
        class="d-flex child-flex"
        cols="3"
      >
        <v-card>
          <v-img
            :src="image.url"
            class="grey lighten-2"
            height="300"
            width="350"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            v-model="page"
            data-testid="pagination-button"
            :length="10"
            :total-visible="7"
            @input="OnPageChange()"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import apiService from "../services/fs-services";

export default {
  name: "CatInfo",
  data() {
    return {
      page: 1,
      selectedCategory: "",
      items: [],
      images: [],
    };
  },
  mounted() {
    this.getAllCategories();
    this.onCategoryChange();
  },
  methods: {
    getAllCategories() {
      apiService.getAllCategories().then((response) => {
        response.data.forEach((ele) => {
          var obj = {
            id: ele.id,
            name: ele.name[0].toUpperCase() + ele.name.substring(1),
          };
          this.items.push(obj);
        });
      });
    },
    onCategoryChange() {
      this.images = [];
      apiService
        .getImageOnSerach(this.selectedCategory, this.page)
        .then((response) => {
          response.data.forEach((data) => {
            this.images.push({
              url: data.url,
            });
          });
        });
    },
    OnPageChange() {
      this.onCategoryChange();
    },
  },
};
</script>
<style lang="scss" scoped>
#category-section {
  .category-images {
    overflow: auto;
    height: 300px;
  }
}
</style>
