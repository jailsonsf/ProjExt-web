<template>
  <v-container v-on:click="detailBook">
    <h1>{{ item.title }}</h1>
  </v-container>
</template>

<script>
export default {
  name: "BookItem",
  props: ["item"],
  data: () => ({}),
  methods: {
    detailBook() {
      this.$store.dispatch("setCurrentBook", this.item.id);
      this.$router.push({ name: "book" });
    },
  },
};
</script>
