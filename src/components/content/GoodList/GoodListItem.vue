<template>
    <div class="goodlistitem">
        <img :src="good.show.img" alt="good.title" @load="imgload">
        <div class="content">
            <p>{{good.title}}</p>
            <span class="price">¥{{good.price}}</span>
            <span class="like">{{good.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodListItem",
        props:{
            good:{
                type:Object,
                default:{}
            }
        },
        methods:{
            imgload(){
                this.$bus.$emit('loadimg')
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