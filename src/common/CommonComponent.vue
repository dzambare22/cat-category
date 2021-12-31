<template>
  <div class="container">
  <button type="button" class="btn">Basic</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-link">Link</button>
</div>
</template>
<script>
import apiService from "../services/fs-services";

export default {
  name: "CatInfo",
  created: function () {
    const vm = this;

    setTimeout(function () {
      vm.colors = [
        { text: "Yellow", optionId: "YELLOW" },
        // { text: 'Not selected', optionId: null },
        { text: "Blue", optionId: "BLUE" },
      ];
    }, 1000);
  },
  data() {
    return {
      color: null,
      colors: [],
      page: 1,
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
    async onChange() {
      var images = [];
      this.images = await apiService
        .getImageOnChange(
          this.tab,
          this.getCategoryImagesUrl,
          this.selectedCategory,
          this.page
        )
        .then((response) => {
          response.data.forEach((data) => {
            images.push({
              url: data.url,
            });
          });
          return images;
        });
    },
    OnPageChange() {
      this.onChange();
    },
  },
};
</script>
