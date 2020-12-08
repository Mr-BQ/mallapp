<template>
    <div class="cart">
        <nav-bar class="navbar">
            <div slot="center">购物车({{$store.state.cartlist.length}})</div>
        </nav-bar>
        <scroll class="scroll" ref="scroll">
            <div class="cartlist">
                <cart-good-item v-for="(item,index) in $store.state.cartlist" :good="item" :key="index"></cart-good-item>
            </div>
        </scroll>
      <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import CartGoodItem from "../../components/content/CartGoodItem/CartGoodItem";
    import Scroll from "../../components/common/scroll/Scroll";
    import CartBottomBar from "@/views/cart/childComponents/CartBottomBar";
    export default {
        name: "Cart",
        components:{
            NavBar,
            CartGoodItem,
            Scroll,
            CartBottomBar
        },
        activated() {
            console.log('cart actived');
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    .navbar{
        background-color: dodgerblue;
        color: white;
    }
    .cart{
        /*height: 100vh;*/
    }
    .scroll{
        position: absolute;
        top: 40px;
        bottom: 89px;
        left: 0;
        right: 0;
        overflow: hidden;
    }

</style>
