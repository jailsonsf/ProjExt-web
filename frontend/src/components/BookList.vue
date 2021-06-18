<template>
  <v-container fluid>
    <v-list three-line>
      <template v-for="book in books">
        <book-item :item="book" :key="book.id" />
        <v-colider :key="book.id" />
      </template>
    </v-list>
  </v-container>
</template>

<script>
import BookItem from "./BookItem.vue";

export default {
  name: "BookList",
  props: ["books"],
  components: { BookItem },
};
</script>
