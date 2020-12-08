<template>
    <div class="cartgooditem">
        <div class="item">
            <div class="checkbox">
              <check-box class="check" :checked="good.checked" @checkclick="checkClick"></check-box>
            </div>
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
        },
        methods:{
          checkClick(){
            this.$store.commit('checkchange',this.good)
          }
        }
    }
</script>

<style scoped>
    .item{
        display: flex;

    }
    .checkbox{
        width: 20%;
        margin-left: 5px;
        display: flex;
        align-items: center;
    }
    .check{
      height: 20px;
      width: 20px;
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