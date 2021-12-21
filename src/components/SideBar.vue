<template>
  <v-app id="inspire">
    <v-row>
      <v-col cols="2">
        <v-navigation-drawer permanent>
          <v-list dense>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-content>
                  <v-list-item-title @click="sidebarClick(item)">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider></v-divider>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="10">
        <router-view />
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  name: "sidebar",
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
  methods: {
    sidebarClick(item) {
      console.log("click", item);
      if (item.title === "Category") {
        this.$router.push("/category");
      } else {
        this.$router.push("/breed");
      }
    },
  },
};
</script>
