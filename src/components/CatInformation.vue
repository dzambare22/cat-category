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
// import apiService from "../services/fs-services";
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
  mounted() {
    // this.getAllCategories();
    // this.onCategoryChange();
  },
  methods: {
    // async getAllCategories() {
    //   this.items = await apiService.getAllCategories().then((response) => {
    //     var items = [];
    //     response.data.forEach((ele) => {
    //       var obj = {
    //         id: ele.id,
    //         name: ele.name[0].toUpperCase() + ele.name.substring(1),
    //       };
    //       items.push(obj);
    //     });
    //     return items;
    //   });
    // },
    // async onCategoryChange() {
    //   this.images = await apiService
    //     .getImageOnSerach(this.selectedCategory, this.page)
    //     .then((response) => {
    //       var images = [];
    //       response.data.forEach((data) => {
    //         images.push({
    //           url: data.url,
    //         });
    //       });
    //       return images;
    //     });
    // },
    // OnPageChange() {
    //   this.onCategoryChange();
    // },
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
