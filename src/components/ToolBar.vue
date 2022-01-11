<template>
  <div class="row">
    <nav class="navbar navbar-expand-sm bg-light fixed-top">
      <a class="navbar-brand" href="javascript:void(0)">Cats</a>
      <ul class="nav nav-pills" role="tablist">
        <li
          class="nav-item"
          v-for="(item, index) in items"
          :key="index"
          @click="onTabClick(item)"
        >
          <a
            class="nav-link"
            :class="{ active: $route.path === item.path }"
            data-toggle="pill"
            >{{ item.title }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "ToolBar",
  data() {
    return {
      tab: 0,
      items: [
        { title: "Category", path: "/category" },
        { title: "Breed", path: "/breed" },
      ],
    };
  },
  methods: {
    onTabClick(item) {
      if (item.title === "Category") {
        this.$router.push("/category");
      } else {
        this.$router.push("/breed");
      }
    },
  },
};
</script>
