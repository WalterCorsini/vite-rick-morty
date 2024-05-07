<script>
import { store } from "./store";
// axios
import axios from "axios";
// import components
import AppHeader from "./components/AppHeader.vue";
import AppCardsList from "./components/AppCardsList.vue";

export default {
  components:{
    AppHeader,
    AppCardsList,
  },
  data(){
    return{
      store,
      cardsArray : [],
    }
  },
  created(){
    // axios
    // .get("https://rickandmortyapi.com/api/character")
    // .then((resp) => {
    //   this.cardsArray = resp.data.results;
    // })
    this.selectList();
  },

  methods:{
      selectList(){
        if(this.store.selectedStatus !== "All"){
          const status ={
              status: this.store.selectedStatus,
          }
          axios
          .get("https://rickandmortyapi.com/api/character",
          {params: status})
          .then((resp) => {
              this.cardsArray = resp.data.results;
    })
        } else {
          axios
          .get("https://rickandmortyapi.com/api/character")
          .then((resp) => {
              this.cardsArray = resp.data.results;
    })
        }
      },
  }
};
</script>

<template>

<AppHeader @filter="selectList" />

  <AppCardsList :cardsArray="cardsArray" />

</template>

<style lang="scss">


</style>
