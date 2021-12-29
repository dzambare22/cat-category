<template>
  <div id="breed-section">
    <CommonComponent
      tab="Breed"
      label="Breed"
      :getCategoryUrl="getCategoryUrl"
      :getCategoryImagesUrl="getCategoryImagesUrl"
    ></CommonComponent>
  </div>
</template>
<script>
import CommonComponent from "../common/CommonComponent";
export default {
  name: "BreedInfo",
  components: {
    CommonComponent,
  },
  data() {
    return {
      getCategoryImagesUrl: "https://api.thecatapi.com/v1/images/search?",
      getCategoryUrl: "https://api.thecatapi.com/v1/breeds",
    };
  },
  mounted() {
    // this.getAllBreeds();
    // this.onBreedChange();
  },
  // methods: {
  //   async getAllBreeds() {
  //     this.items = await apiService.getAllBreeds().then((response) => {
  //       var items = [];
  //       response.data.forEach((ele) => {
  //         var obj = {
  //           id: ele.id,
  //           name: ele.name[0].toUpperCase() + ele.name.substring(1),
  //         };
  //         items.push(obj);
  //       });
  //       return items;
  //     });
  //   },
  //   async onBreedChange() {
  //     this.breedImages = await apiService
  //       .getBreedImageOnSearch(this.selectedBreed, this.page)
  //       .then((response) => {
  //         var breedImages = [];
  //         response.data.forEach((data) => {
  //           breedImages.push({
  //             url: data.url,
  //           });
  //         });
  //         return breedImages;
  //       });
  //   },
  //   OnPageChange() {
  //     this.onBreedChange();
  //   }
  // },
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
