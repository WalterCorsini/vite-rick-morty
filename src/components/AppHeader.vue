<script>
import { store } from "../store";
export default{
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <div>
        <span>Rick And morty App</span>
        <select name="status" id="">
            <option value="" v-for="curElem in store.status">{{ curElem }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    div{
        display: flex;
        flex-direction: column;
        padding: 30px;
        text-align: center;
        font-size: 30px;
        font-weight: 800;
        select{
            width: 76px;
            text-align: center;
            align-self: flex-end;
        }
    }
</style>