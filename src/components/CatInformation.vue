<template>
  <v-app class="catInfo">
    <v-row style="height: 0px">
      <v-col cols="3" class="cat-category mt-5">
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
    <v-row style="overflow: auto; height: 300px">
      <v-col
        v-for="(image, index) in images"
        data-testid="cat-images"
        :key="index"
        class="d-flex child-flex"
        cols="3"
      >
        <v-card>
          <v-img :src="image.url" aspect-ratio="1" class="grey lighten-2">
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
  </v-app>
</template>
<script>
import apiService from "../services/fs-services";

export default {
  name: "CatInfo",
  data() {
    return {
      page: 1,
      selectedCategory: {
        id: 1,
        name: "Hats",
      },
      items: [],
      images: [],
    };
  },
  props: {
    msg: String,
  },
  created() {
    console.log("in computed");
  },
  computed() {
    console.log("in computed");
  },
  mounted() {
    this.getAllCategories();
    this.onCategoryChange(this.selectedCategory.id);
  },
  methods: {
    getAllCategories() {
      apiService.getAllCategories().then((response) => {
        // console.log("response.data", JSON.stringify(response.data));
        response.data.forEach((ele) => {
          var obj = {
            id: ele.id,
            name: ele.name[0].toUpperCase() + ele.name.substring(1),
          };
          this.items.push(obj);
        });
      });
    },
    onCategoryChange(selectedCategory) {
      selectedCategory = selectedCategory
        ? selectedCategory
        : this.selectedCategory;
      this.images = [];
      apiService
        .getImageOnSerach(selectedCategory, this.page)
        .then((response) => {
          response.data.forEach((data) => {
            this.images.push({
              url: data.url,
              height: 150, //data.height,
              width: 200, //data.width
            });
          });
        });
    },
    OnPageChange() {
      this.onCategoryChange(this.selectedCategory.id);
    },
  },
};
</script>
