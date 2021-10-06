<template>
  <div class="home">
    <v-container fluid>
      <book-list :books="books" />
      <h1 justify="center" align="center" v-if="this.books.length == 0">
        Sem Livros
      </h1>
    </v-container>
  </div>
</template>

<script>
import BookList from "../components/BookList.vue";

export default {
  name: "Home",
  data: () => ({
    books: [],
  }),
  components: { BookList },
  beforeCreate() {
    this.$store.dispatch("loadingBooks").then((e) => {
      console.log(e);
      this.books = this.$store.state.booksStore.books;
    });
  },
};
</script>
