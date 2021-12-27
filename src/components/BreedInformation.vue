<template>
  <div id="breed-section">
    <v-row>
      <v-col cols="12" class="cat-breed mt-5">
        <v-autocomplete
          v-model="selectedBreed"
          data-testid="select-breed"
          :items="items"
          item-text="name"
          item-value="id"
          label="Breeds"
          deletable-chips
          small-chips
          dense
          @change="onBreedChange()"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row class="breed-images">
      <v-col
        v-for="(image, index) in breedImages"
        data-testid="breed-images"
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
            data-testid="breed-pagination-button"
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
  name: "BreedInfo",
  data() {
    return {
      page: 1,
      selectedBreed: "",
      items: [],
      breedImages: [],
    };
  },
  mounted() {
    this.getAllBreeds();
    this.onBreedChange();
  },
  methods: {
    async getAllBreeds() {
      this.items = await apiService.getAllBreeds().then((response) => {
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
    async onBreedChange() {
      this.breedImages = await apiService
        .getBreedImageOnSearch(this.selectedBreed)
        .then((response) => {
          var breedImages = [];
          response.data.forEach((data) => {
            breedImages.push({
              url: data.url,
            });
          });
          return breedImages;
        });
    },
    OnPageChange() {
      this.onBreedChange();
    }
  },
};
</script>
<style lang="scss" scoped>
#breed-section {
  .breed-images {
    overflow: auto;
    height: 300px;
  }
}
</style>
