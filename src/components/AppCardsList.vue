<script>
import AppCard from './AppCard.vue';
export default {
    components: {
        AppCard,
    },
    props: {
        cardsArray: Array,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="card in cardsArray">
            <AppCard :cardObj="card" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        width: 80%;
        margin: 0 auto;
        .card{
            width: calc(80% / 4 - 30px / 4);
            aspect-ratio: 1;
            border-radius: 50%;
            text-align: center;
        }
    }
</style>