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
      })
    this.selectList();
  },

  methods: {
    selectList() {
      //  methods with search in global storage
      this.cardsArray = [];
      if (this.store.selectedStatus !== "All") {
        this.store.list.forEach(element => {
          if (this.store.selectedStatus === element.status) {
            this.cardsArray.push(element);
          }
        });
      } else {
        console.log("ciao");
        console.log(this.store.list);
        this.cardsArray = this.store.list;
      }
    }
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
};
</script>

<template>

  <AppHeader @filter="selectList" />

  <AppCardsList :cardsArray="cardsArray" />

</template>

<style lang="scss"></style>
