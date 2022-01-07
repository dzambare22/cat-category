<template>
  <div id="app">
    <v-app>
      <ToolBar></ToolBar>
      <v-row>
        <v-col cols="12" class="ml-n10">
          <router-view />
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
export default {
  name: "App",
  components: {
    ToolBar,
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
  }
};
</script>
<style></style>
<style lang="scss">
.v-application--wrap {
  min-height: 97vh !important;
}
</style>
