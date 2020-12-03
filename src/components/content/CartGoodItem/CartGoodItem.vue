<template>
    <div class="cartgooditem">
        <div class="item">
            <check-box class="check"></check-box>
            <div class="img"><img :src="good.image" alt="img"></div>
            <div class="text">
                <div class="title">{{good.title}}</div>
                <div class="desc">{{good.desc}}</div>
                <div class="priceAndCnt">
                    <div class="price">¥{{good.price}}</div>
                    <div class="cnt">×{{good.count}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CheckBox from "../checkbox/CheckBox";
    export default {
        name: "CartGoodItem",
        props:{
            good:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        components:{
            CheckBox
        }
    }
</script>

<style scoped>
    .item{
        display: flex;

    }
    .check{
        align-self: center;
        margin-left: 5px;
    }
    .img{
        margin:10px;
    }
    .img img{
        width: 80px;
        height: 100px;
        border: 1px solid transparent;
        border-radius: 10%;
        overflow: hidden;
    }
    .text{
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .title{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 22px;
    }
    .desc{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .priceAndCnt{
        display: flex;
        justify-content: space-between;
        font-size: 22px;
    }
    .price{
        color: dodgerblue;
    }
    .cnt{
        margin-right: 10px;
    }
    .cartgooditem{
        border-bottom: 1px solid lightgrey;
    }
</style>