<template>
    <div class="detailgoodinfo">
        <div class="goodimg">
            <img v-for="(item,index) in info.detailImage[0].list" :src="item" :alt="index" :key="index" @load="imgload">
        </div>
    </div>
</template>

<script>
    import {debounce} from "../../../common/utils";

    export default {
        name: "DetailGoodInfo",
        props:{
            info:{
                type:Object,
                default(){
                    return{
                        load:null
                    }
                }
            }
        },
        methods:{
            imgload(){
                if(!this.load){
                    this.load = debounce(()=>{
                        console.log('emit load img');
                        this.$emit('loadimg')
                    },200)
                }
                this.load()
            }
        }
    }
</script>

<style scoped>
    .goodimg{
        /*width: auto;*/
    }
    .goodimg img{
        width: 100%;
    }
</style>