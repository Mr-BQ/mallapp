<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in list" :key="index" :class="{active:index == curindex}" @click="curindex=index" class="tabctrl_item">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data(){
            return{
                curindex:0
            }
        },
        props:{
            list:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style scoped>
    .tabcontrol{
        display: flex;
    }
    .tabctrl_item{
        flex: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
    }
    .active{
        color:dodgerblue;
    }
    .active span{
        border-bottom: 3px solid dodgerblue;
        padding:5px 5px;
    }
</style>