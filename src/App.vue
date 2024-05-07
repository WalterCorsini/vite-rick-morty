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
      flag:true,
      cardsArray : [],
    }
  },
  created(){
    this.flag = true;
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resp) => {
        this.cardsArray = resp.data.results;
        this.flag = false;
      })
  },

};
</script>

<template>

  <AppHeader />
  <div v-if="flag">caricamento....</div>
  <AppCardsList v-else :cardsArray="cardsArray" />

</template>

<style lang="scss">


</style>
