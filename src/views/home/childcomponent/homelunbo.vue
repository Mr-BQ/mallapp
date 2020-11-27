<template>
    <div class="homelunbo">
        <lunbo :piccnt="list.length-2">
            <lunboitem v-for="(item,index) in list" slot="pic" :key="index">
                <a :href="item.link">
                    <img :src="item.image" :alt="item.title">
                </a>
            </lunboitem>
        </lunbo>
    </div>

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
            let first = this.list[0]
            let last = this.list[this.list.length-1]
            this.list.push(first)
            this.list.unshift(last)
        }
    }
</script>

<style scoped>
    .homelunbo{
        position: relative;
    }
</style>