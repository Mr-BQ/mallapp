<template>
    <div class="shop">
        <div class="name">
            <div class="logo">
                <img :src="shop.logo" alt="shop.name">
            </div>
            <div class="shopname">{{shop.name}}</div>
            <div class="fans">粉丝  <span class="fan">{{shop.fans}}</span></div>
        </div>
        <div class="describe">
            <div class="count">
                <div class="sells">
                    <div>{{(shop.sells/10000).toFixed(1)}}万</div>
                    总销量
                </div>
                <div class="goodscount">
                    <div>{{shop.goodsCount}}</div>
                    全部宝贝
                </div>
            </div>
            <div class="score">
                <div class="scoreitem" v-for="(item,index) in shop.score" :key="index">
                    <span class="scoreitem_name">{{item.name}}</span>
                    <span class="scoreitem_score" :class="{better:item.isBetter}">{{item.score}}</span>
                    <span class="scoreitem_better" :class="{better:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
                </div>
            </div>
        </div>
        <div class="toshop">
            <a :href="shop.shopurl">进店逛逛</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopInfo",
        props:{
            shop:{
                type:Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>
    .name{
       margin: 20px 0 10px;
       display: flex;
    }
    .logo{
        height: 50px;
        border-radius: 50%;
        border:1px solid lightgrey;
        overflow: hidden;
        margin: 0 8px;
    }
    .logo img{
        height: 100%;
    }
    .shopname{
        font-size: 22px;
        align-self: center;
    }
    .fans{
        color: black;
        align-self: center;
        margin:0 auto;
    }
    .fan{
        font-size: 20px;
    }
    .describe{
        color:black;
        display:flex;
    }

    .count{
        display: flex;
        flex:1;
        border-right: 2px solid lightgrey;
        margin: 20px 0;
    }
    .sells{
        flex:1;
        text-align: center;
        align-self: center;
    }
    .sells div{
        font-size: 20px;
        margin-bottom: 3px;
    }
    .goodscount{
        flex:1;
        text-align: center;
        align-self: center;
    }
    .goodscount div{
        font-size: 20px;
        margin-bottom: 3px;
    }

    .score{
        flex:1;
    }
    .scoreitem
    {
        display: flex;
        justify-content: space-between;
        padding:0 25px;
        margin: 10px 0;
    }
    .scoreitem_score{
        color:limegreen;
    }
    .scoreitem_better{
        border:1px solid transparent;
        border-radius: 10%;
        background-color: limegreen;
        color:white;
    }
    .scoreitem_score.better{
        color:red;
    }
    .scoreitem_better.better{
        background-color: orangered;
    }
    .toshop{
        height: 2rem;
        width: 8rem;
        background-color: lightsteelblue;
        border:1px solid transparent;
        border-radius: 8%;
        line-height: 2rem;
        text-align: center;
        margin: 0 auto;
    }

    .toshop a{
        display: inline-block;
        width: 100%;
    }
</style>