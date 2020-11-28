<template>
    <div class="basicinfo">
        <div class="title">{{good.title}}</div>
        <div class="price">
            <div class="newprice priceitem">{{good.newPrice}}</div>
            <div class="oldprice priceitem" v-if="good.discount">{{good.oldPrice}}</div>
            <div class="discount priceitem" v-if="good.discount">{{good.discount}}</div>
        </div>
        <div class="columns">
            <div class="columnitem" v-for="(item,index) in good.columns" :key="index">
                {{item}}
            </div>
        </div>
        <div class="services">
            <div class="serviceitem" v-for="(item,index) in good.services" :key="index">
                <img :src="item.icon" alt="item.name" v-if="item.icon">
                {{item.name}}
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DetailBasicInfo",
        props:{
            good:{
                type:Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>
    .price,.columns,.services{
        display: flex;
        align-content: space-evenly;
    }

    .title{
        font-size: 18px;
        margin: 5px 5px;
        color: black;
    }
    .services{
        flex-wrap: wrap;
    }

    .newprice{
        font-size: 30px;
        color:dodgerblue;
        margin: 5px;
    }
    .oldprice{
        text-decoration: line-through;
        align-self: flex-end;
        padding-bottom: 8px;
    }
    .discount{
        align-self: center;
        margin-left: 5px;
        border:5px solid dodgerblue;
        background-color: dodgerblue;
        border-radius: 15%;
        color: white;
        margin-bottom: 8px;
        font-size: 14px;
    }

    .columns{
        border-bottom: 1px solid lightgrey;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
    }
    .columnitem{
        flex:1;
        text-align: center;
        color:darkgrey;
        margin-bottom: 2px;
    }

    .columnitem:first-child{
        text-align: left;
        /*margin-left: 4px;*/
    }
    .columnitem:last-child{
        text-align:right;
        /*margin-right: 6px;*/
    }

    .services{
        flex-wrap: wrap;
        justify-content: space-between;
        box-shadow: 0 4px 3px rgba(100,100,100,.2);
    }
    .serviceitem{
        font-size: 15px;
        color: black;
        margin: 5px 5px;
    }
    .services img{
        height: 15px;
    }
</style>