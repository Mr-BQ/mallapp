<template>
    <div class="goodlist">
        <good-list-item v-for="(item,index) in goods" :good="item" :key="index"></good-list-item>
    </div>
</template>

<script>
    import GoodListItem from "./GoodListItem";
    export default {
        name: "GoodList",
        props:{
            goods:{
                type:Array,
                default:[]
            }
        },
        components:{
            GoodListItem
        }
    }
</script>

<style scoped>
    .goodlist{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>