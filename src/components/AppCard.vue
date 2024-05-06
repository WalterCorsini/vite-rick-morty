<script>
export default{
    props:{
        cardObj: Object,
    }
}
</script>

<template>
    <div>
        <img :src="cardObj.image" alt="">
        <span>{{ cardObj.name }}</span>
        <span>{{ cardObj.status }}</span>
        <span>{{ cardObj.species }}</span>
    </div>
    </template>

<style lang="scss" scoped>
    div{    
        img{
            border-radius: 50%;
            width: 80%;
        }
        span{
        display: block;
        }
        span:nth-child(2){
            margin-bottom: 10px;
        }
        span:nth-child(3),
        span:nth-child(4){
            font-size: 11px;
        }
        span:nth-child(4){
            margin-bottom: 10px;
        }
    }
</style>