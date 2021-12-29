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
  }
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
