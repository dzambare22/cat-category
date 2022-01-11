<template>
  <div id="app">
    <ToolBar></ToolBar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
export default {
  name: "App",
  components: {
    ToolBar,
  }
};
</script>
<style></style>
<style lang="scss">
.v-application--wrap {
  min-height: 97vh !important;
}
</style>
