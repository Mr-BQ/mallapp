<template>
    <div class="detailtoolbar">
        <div class="left">
            <div class="kefu">
                <img src="~assets/img/detail/kefu.svg" alt="kefu">
                <div class="text">客服</div>
            </div>
            <div class="dianpu">
                <img src="~assets/img/detail/dianpu.svg" alt="kefu">
                <div class="text">店铺</div>
            </div>
            <div class="shoucang">
                <img src="~assets/img/detail/shoucang.svg" alt="kefu">
                <div class="text">收藏</div>
            </div>
        </div>
        <div class="right">
            <div class="cart" @click="addtocart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailToolBar",
        methods:{
            addtocart(){
                this.$emit('addtocart')
            }
        }
    }
</script>

<style scoped>
    .detailtoolbar{
        height: 60px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background-color: #bfa;
        display: flex;
    }
    .left{
        flex:1;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        padding:3px 0;
    }
    .dianpu{
    }
    .right{
        flex:1;
        display: flex;
        background-color: #ff8198;
        line-height: 60px;
        text-align: center;
    }
    .cart{
        background-color: gold;
        flex:1;
    }
    .buy{
        flex:1;
        background-color: hotpink;
        color: ghostwhite;
    }
    .left img{
        width: 30px;
    }
</style>