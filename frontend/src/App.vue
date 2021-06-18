<template>
  <v-app id="inspire">
    <v-appp-bar color="teal lighten-3" app: shrink-on-scroll >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <span class="nav-title" >My Books</span>
      </v-toolbar-title>

      <v-space></v-space>

      <v-btn icon>
        <v-icon>ndi-dots-vertical</v-icon>
      </v-btn>
    </v-appp-bar>

    <v-main class="main">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
</style>
