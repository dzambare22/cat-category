<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar color="deep-purple accent-4" height="50" dense dark>
        <v-toolbar-title style="font-size: 16px">SearchBy</v-toolbar-title>
      </v-app-bar>
      <SideBar></SideBar>
    </v-app>
  </div>

  <!-- <CatInformation msg="Welcome to vue unit test"></CatInformation> -->
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  name: "App",
  components: {
    SideBar,
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
