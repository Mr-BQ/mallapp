<template>
    <div class="detailgoodinfo">
        <div class="describe">
            <div class="start"></div>
            <div class="desc">{{info.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="key">
            {{info.detailImage[0].key}}
        </div>
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
        box-shadow: 0 4px 3px rgba(100,100,100,.2);
    }
    .goodimg img{
        width: 100%;
    }
    .start,.end{
        height: 30px;
    }

    .start::before{
        content: '';
        position:absolute;
        background: url("~assets/img/lefttop.svg");
        background-size: 100%;
        width: 30px;
        height: 30px;
    }
    .end::after{
        content: '';
        position:absolute;
        right:0;
        background: url("~assets/img/rightbot.svg") no-repeat;
        background-size: 80%;
        width: 30px;
        height: 30px;
    }
    .desc{
        padding:0 20px;
        white-space: pre-line;
        color:black;
    }
    .key{
        color:black;
        font-size: 20px;
        margin:10px 0;
    }
</style>