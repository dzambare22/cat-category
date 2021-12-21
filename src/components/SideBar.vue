<template>
  <v-app id="inspire">
    <v-app-bar color="deep-purple accent-4" height="50" dense dark>
      <v-toolbar-title style="font-size: 16px">SearchBy</v-toolbar-title>
    </v-app-bar>
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
      if(item.title === 'Category') {
         this.$router.push("/category");
      } else {
         this.$router.push("/breed");
      }
    },
  },
};
</script>
