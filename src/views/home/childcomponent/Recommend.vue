<template>
    <div class="recommend">
        <div v-for="(item,index) in recommend" class="recommend_item" :key="index">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
            recommend:{
                type:Array,
                default:[]
            }
        }

    }
</script>

<style scoped>
    .recommend{
        display: flex;
        padding: 5% 3%;
        border-bottom: .8rem solid lightgrey;
    }

    .recommend_item img{
        width: 100%;
        margin-bottom: 10%;
    }
    .recommend_item{
        text-align: center;
        margin: 0 3%;
    }
    .recommend_item p{
        color:darkgrey;
    }


</style>