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
        <h3>Rick And morty App</h3>
        <div>
            <span>risulati mostrati {{ this.store.count }}</span>
        <select @change="$emit('filter')" v-model="store.selectedStatus">
            <option  :value="curElem" v-for="curElem in store.status">{{ curElem }}</option>
        </select>
        </div>
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
        span{
            font-size: 12px;
        }
        select{
            width: 76px;
            text-align: center;
            align-self: flex-end;
        }
    }
</style>