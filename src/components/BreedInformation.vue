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
    <v-row class="mb-5">
      <v-col cols="10">
        <v-carousel>
          <v-carousel-item
            v-for="(image, index) in breedImages"
            :key="index"
            :src="image.url"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import apiService from "../services/fs-services";

export default {
  name: "BreedInfo",
  data() {
    return {
      page: 1,
      onboarding: 0,
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
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
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
            // height: 400, //data.height,
            // width: 700, //data.width
          });
        });
      });
    },
  },
};
</script>
