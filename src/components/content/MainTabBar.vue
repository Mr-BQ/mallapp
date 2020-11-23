<template>
    <div class="maintabbar">
        <tab-bar>
            <tab-bar-item link="/home" >
                <img  slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
                <img  slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="首页">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item link="/category" >
                <img  slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类">
                <img  slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="分类">
                <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item link="/cart" >
                <img  slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="购物车">
                <img  slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="购物车">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item link="/profile">
                <img  slot="item-icon" src="~assets/img/tabbar/my.svg" alt="我的">
                <img  slot="item-icon-active" src="~assets/img/tabbar/my_active.svg" alt="我的">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "../common/tabbar/TabBar";
    import TabBarItem from "../common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
    .maintabbar{
        /*z-index: 9;*/
    }
</style>