<template>
  <v-app id="inspire">
    <v-app-bar color="teal lighten-3" app: shrink-on-scroll >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span class="nav-title" >My Books</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>ndi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
</style>
