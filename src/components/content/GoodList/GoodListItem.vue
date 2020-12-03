<template>
    <div class="goodlistitem" @click="todetail">
        <img :src="imgurl" alt="good.title" @load="imgload">
        <div class="content">
            <p>{{good.title}}</p>
            <span class="price">¥{{good.price}}</span>
            <span class="like">{{good.cfav}}</span>
        </div>
    </div>
</template>

<script>
    import {debounce} from "../../../common/utils";

    export default {
        name: "GoodListItem",
        props:{
            good:{
                type:Object,
                default:{}
            }
        },
        data(){
            return{
                timer:null
            }
        },
        methods:{
            imgload(){
                if(this.$route.path.indexOf('/home') !== -1){
                    console.log('home load img');
                    this.$bus.$emit('loadimg')
                }else{
                    this.$bus.$emit('Detailloadimg')
                }

            },
            todetail(){
                this.$router.push('/Detail/' + this.good.iid)
            }
        },
        computed:{
            imgurl(){
                return this.good.show? this.good.show.img : this.good.image
            }
        }
    }
</script>

<style scoped>
    .goodlistitem img{
        width: 100%;
    }

    .goodlistitem{
        width: 48%;
    }

    .like::before{
        content:'';
        position: absolute;
        left:-14px;
        background: url("~assets/img/like.svg");
        background-size: 14px 14px;
        width: 14px;
        height: 14px;
    }

    .content p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .price{
        margin:2px 20px;
        color: dodgerblue;
    }
    .like{
        position: relative;
    }
</style>