<template>
  <v-container>
    <h1>{{ this.currentBook.title }}</h1>

    <v-spacer></v-spacer>

    <span>{{ this.currentBook.description }}</span>
  </v-container>
</template>

<script>
export default {
  created() {
    this.currentBook = this.$store.state.booksStore.currentBook;
  },
};
</script>

<style>
</style>