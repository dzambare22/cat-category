<template>
  <div id="app">
    <v-app>
      <ToolBar></ToolBar>
      <v-row>
        <v-col clos="12" class="px-5">
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
  },
  mounted() {},
  methods: {},
};
</script>
<style></style>
<style lang="scss">
  .v-application--wrap {
    min-height: 97vh !important;
  }
</style>
