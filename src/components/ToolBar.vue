<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title class="ml-5">Search Cat Information By</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab
            v-for="(item, index) in items"
            :key="index"
            @click="onTabClick(item)"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  name: "ToolBar",
  data() {
    return {
      tab: 0,
      items: [{ title: "Category" }, { title: "Breed" }],
    };
  },
  mounted() {
    if (this.$route.path === "/breed") {
      this.tab = 1;
    } else {
      this.tab = 0;
    }
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
