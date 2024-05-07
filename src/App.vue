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
        this.cardsArray = this.store.list;
        this.selectList();
      })
  },

  methods: {
    selectList() {
  // Directly assign the entire list if no specific status is selected
  if (this.store.selectedStatus === "All") {
    this.cardsArray = this.store.list;
  } else {
    // Filter the list based on the selected status
    this.cardsArray = this.store.list.filter((curElem) => curElem.status === this.store.selectedStatus);
  }
  // Update the count and log the length
  this.store.count = this.cardsArray.length;
}

  //  methods with call api when select options change

  // let status = {};
  // if(this.store.selectedStatus !== "All"){
  //        status.status = this.store.selectedStatus;
  //  }
  //   axios
  //   .get("https://rickandmortyapi.com/api/character",
  //   {params: status})
  //   .then((resp) => {
  //     this.cardsArray = resp.data.results;
  //   })
  //
},
}
</script>

<template>

  <AppHeader @selection="selectList" />

  <AppCardsList :cardsArray="cardsArray" />

</template>

<style lang="scss"></style>
