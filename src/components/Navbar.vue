<template>
  <nav>
    <v-snackbar v-model="sanckbar" :timeout="4000" top color="success">
      <span>Awesome! You add a new porject.</span>
      <v-btn text color="White" @click="sanckbar = false">Close</v-btn>
    </v-snackbar>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase indigo--text">
        <span class="font-weight-light">Todo</span>
        <span>Mesfer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Dropdown menu -->

      <v-menu offset-y >
        <template v-slot:activator="{ on, attrs }">
        <v-btn text color="indigo" v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-down</v-icon>
          <span>Menu</span>
        </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route" class="indigo--text">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="indigo">
        <span>Sign Out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-switch v-model="$vuetify.theme.dark" label="Dark Mode"></v-switch>
    </v-app-bar>

    <v-navigation-drawer floating app v-model="drawer" class="indigo ">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="circle-cropped.png" alt="my-image">
          </v-avatar>
          <p class ="white--text subheading-2 text-center">Mesfer</p>
        </v-flex>

      <!-- Popups(dialog)-->
     <v-flex class="mt-4 mb-3">
       <Popup @projectAdded="sanckbar= true "/>
     </v-flex>
        </v-layout>
        
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-tile-main>
            <v-list-tile-title class="white--text">{{
              link.text
            }}</v-list-tile-title>
          </v-list-tile-main>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

import Popup from './Popup.vue';

export default {
  components: { Popup },
  data() {
    return {
      sanckbar: false,
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Project", route: "/projects" },
        { icon: "mdi-account-group", text: "Team", route: "/team" },
        { icon: " mdi-bullseye-arrow", text: "Vision", route: "/vision" },
      ],
    };
  },
};
</script>