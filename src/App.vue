<script>
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
      cardsArray : [],
    }
  },
  created(){
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
          this.cardsArray = resp.data.results;
      });

  }
};
</script>

<template>
  <AppHeader />
  <AppCardsList :cardsArray="cardsArray" />

</template>

<style lang="scss">


</style>
