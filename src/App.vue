<script>
import { store } from "./store";
// axios
import axios from "axios";
// import components
import AppHeader from "./components/AppHeader.vue";
import AppCardsList from "./components/AppCardsList.vue";

export default {
  components: {
    AppHeader,
    AppCardsList,
  },
  data() {
    return {
      store,
      cardsArray: [],
    }
  },
  created() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        this.store.list = resp.data.results;
      })
    this.selectList();
  },

  methods: {
    selectList() {
      this.cardsArray = [];
      if (this.store.selectedStatus !== "All") {
        this.store.list.forEach(element => {
          if (this.store.selectedStatus === element.status) {
            // alert("si");
            this.cardsArray.push(element);
          }
        });
      } else {
        this.cardsArray = this.store.list;
      }
    }
  }
};
</script>

<template>

  <AppHeader @filter="selectList" />

  <AppCardsList :cardsArray="cardsArray" />

</template>

<style lang="scss"></style>
