<template>
    <div class="detaillunbo">
        <lunbo :piccnt="items.length-2" v-if="items.length != 1">
            <lunboitem v-for="(item,index) in items" :key="index" slot="pic">
                <div>
                    <img :src="item" alt="pics">
                </div>
            </lunboitem>
        </lunbo>

        <lunboitem v-else>
            <img :src="items[0]" alt="pic">
        </lunboitem>
    </div>
</template>

<script>
    import lunbo from "../../../components/common/lunbo/lunbo";
    import lunboitem from "../../../components/common/lunbo/lunboitem";
    export default {
        name: "DetailLunbo",
        props:{
            items:{
                type:Array,
                default:[]
            }
        },
        components:{
            lunbo,
            lunboitem
        },
        mounted() {
            if(this.items.length != 1){
                let first = this.items[0]
                let last = this.items[this.items.length-1]
                this.items.push(first)
                this.items.unshift(last)
            }
        }

    }
</script>

<style scoped>
    .detaillunbo{
        position: relative;
        height: 300px;
        overflow: hidden;
    }
</style>