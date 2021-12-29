<template>
  <div id="category-section">
    <CommonComponent
      tab="Category"
      label="Categories"
      :getCategoryUrl="getCategoryUrl"
      :getCategoryImagesUrl="getCategoryImagesUrl"
    ></CommonComponent>
  </div>
</template>
<script>
import CommonComponent from "../common/CommonComponent";

export default {
  name: "CatInfo",
  components: {
    CommonComponent,
  },
  data() {
    return {
      getCategoryUrl: "https://api.thecatapi.com/v1/categories",
      getCategoryImagesUrl: "https://api.thecatapi.com/v1/images/search?",
    };
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
