<template>
  <v-container>
    <h1>Title</h1>

    <v-space></v-space>

    <span> Description</span>
  </v-container>
</template>

<script>
export default {
  beforeCreate() {
    let idCurretnBook = this.$store.state.booksStore.currentBook;
    alert(idCurretnBook);
  },
};
</script>

<style>
</style>