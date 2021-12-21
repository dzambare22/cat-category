<template>
  <v-app class="breedInfo">
    <v-row>
      <v-col cols="3" class="cat-breed mt-5">
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
    <v-row>
      <v-col cols="12" style="height: 300px">
        <v-img
          v-for="(image, index) in breedImages"
          data-testid="breed-images"
          :key="index"
          :src="image.url"
          :max-height="image.height"
          :max-width="image.width"
          class="breed-image m-5"
          style="float: left"
        >
        </v-img>
      </v-col>
    </v-row>
    <!-- <v-row>
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
    </v-row> -->
  </v-app>
</template>
<script>
import apiService from "../services/fs-services";

export default {
  name: "BreedInfo",
  data() {
    return {
      page: 1,
      selectedBreed: {
        id: "abys",
        name: "Abyssinian",
      },
      items: [],
      breedImages: [],
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
    this.getAllBreeds();
    this.onBreedChange(this.selectedBreed.id);
  },
  methods: {
    getAllBreeds() {
      apiService.getAllBreeds().then((response) => {
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
    onBreedChange(selectedBreed) {
      selectedBreed = selectedBreed ? selectedBreed : this.selectedBreed;
      this.breedImages = [];
      apiService.getBreedImageOnSearch(selectedBreed).then((response) => {
        response.data.forEach((data) => {
          this.breedImages.push({
            url: data.url,
            height: 120, //data.height,
            width: 200, //data.width
          });
        });
      });
    }
  },
};
</script>
