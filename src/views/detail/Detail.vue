<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <Scroll class="scroll" ref="scroll" :probetype="3" :pullup="false">
            <detail-lunbo v-if="topimages.length != 0" :items="topimages"></detail-lunbo>
            <detail-basic-info v-if="good != null" :good="good"></detail-basic-info>
            <shop-info :shop="shop" v-if="shop != null"></shop-info>
            <detail-good-info :info="detailinfo" v-if="detailinfo != null" @loadimg="refreshbs"></detail-good-info>
        </Scroll>
    </div>

</template>

<script>
    import DetailNav from "./childcomponent/DetailNav";
    import DetailLunbo from "./childcomponent/DetailLunbo";
    import {getDetail,Good,Shop} from "../../network/detail";
    import DetailBasicInfo from "./childcomponent/DetailBasicInfo";
    import ShopInfo from "./childcomponent/ShopInfo";
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailGoodInfo from "./childcomponent/DetailGoodInfo";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                topimages:[],
                good:null,
                shop:null,
                detailinfo:null
            }
        },
        components:{
            DetailNav,
            DetailLunbo,
            DetailBasicInfo,
            ShopInfo,
            Scroll,
            DetailGoodInfo
        },
        created() {
            this.iid = this.$route.params.iid
            getDetail(this.iid).then(res=>{
                const data = res.result
                console.log(data);
                this.topimages.push(...data.itemInfo.topImages)
                this.good = new Good(data.itemInfo,data.columns,data.shopInfo.services)
                this.shop = new Shop(data.shopInfo)
                this.detailinfo = data.detailInfo
            })
        },
        methods:{
            refreshbs(){
                this.$refs.scroll.refresh()
            }
        }
    }
</script>

<style scoped>
    .detail{
       position: relative;
        z-index: 9;
        height: 100vh;

    }
    .scroll{
        overflow: hidden;
        background-color: #fff;
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>