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
    import lunbo from "../../../components/common/lunbo/lunbo";
    import lunboitem from "../../../components/common/lunbo/lunboitem";
    export default {
        name: "mainlunbo",
        props:{
            list:{
                type:Array,
                default:[]
            }
        },
        components:{
            lunbo,
            lunboitem
        },
        mounted() {
            this.list.push(this.list[0])
        }
    }
</script>

<style scoped>

</style>