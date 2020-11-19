<template>
    <lunbo :piccnt="list.length">
        <lunboitem v-for="(item,index) in list" slot="pic" :key="index">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title">
            </a>
        </lunboitem>
    </lunbo>
</template>

<script>
    import lunbo from "../common/lunbo/lunbo";
    import lunboitem from "../common/lunbo/lunboitem";
    export default {
        name: "mainlunbo",
        props:['list'],
        components:{
            lunbo,
            lunboitem
        }
    }
</script>

<style scoped>

</style>