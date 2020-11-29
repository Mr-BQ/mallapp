<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <detail-lunbo v-if="topimages.length != 0" :items="topimages"></detail-lunbo>
        <detail-basic-info v-if="good != null" :good="good"></detail-basic-info>
        <shop-info :shop="shop" v-if="shop != null"></shop-info>
    </div>

</template>

<script>
    import DetailNav from "./childcomponent/DetailNav";
    import DetailLunbo from "./childcomponent/DetailLunbo";
    import {getDetail,Good,Shop} from "../../network/detail";
    import DetailBasicInfo from "./childcomponent/DetailBasicInfo";
    import ShopInfo from "./childcomponent/ShopInfo";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                topimages:[],
                good:null,
                shop:null
            }
        },
        components:{
            DetailNav,
            DetailLunbo,
            DetailBasicInfo,
            ShopInfo
        },
        created() {
            this.iid = this.$route.params.iid
            getDetail(this.iid).then(res=>{
                const data = res.result
                console.log(data);
                this.topimages.push(...data.itemInfo.topImages)
                this.good = new Good(data.itemInfo,data.columns,data.shopInfo.services)
                this.shop = new Shop(data.shopInfo)
            })

        }
    }
</script>

<style scoped>
    .detail{
        height: 2000px;
    }
</style>