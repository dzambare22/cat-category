<template>
  <div id="app">
    <router-view/>
    <SideBar></SideBar>
  </div>

  <!-- <CatInformation msg="Welcome to vue unit test"></CatInformation> -->
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  name: "App",
  components: {
    SideBar
  },
  data() {
    return {
      selectedItem: 0,
      items: [
        { title: "Category" },
        { title: "Breed" },
        { title: "File type" },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style></style>
