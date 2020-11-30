<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <Scroll class="scroll" ref="scroll" :probetype="3" :pullup="false" @scrollContent="scrollcontent">
            <detail-lunbo v-if="topimages.length != 0" :items="topimages"></detail-lunbo>
            <detail-basic-info v-if="good != null" :good="good"></detail-basic-info>
            <shop-info :shop="shop" v-if="shop != null"></shop-info>
            <detail-good-info :info="detailinfo" v-if="detailinfo != null" @loadimg="refreshbs"></detail-good-info>
            <detail-param-info :paraminfo="paraminfo" v-if="paraminfo != null"></detail-param-info>
            <detail-comment-info v-if="commentinfo != null" :commentinfo="commentinfo"></detail-comment-info>
        </Scroll>
        <back-top  v-show="showbacktop" @click.native="backtop"></back-top>
    </div>

</template>

<script>
    import DetailNav from "./childcomponent/DetailNav";
    import DetailLunbo from "./childcomponent/DetailLunbo";
    import {getDetail,Good,Shop,GoodParam} from "../../network/detail";
    import DetailBasicInfo from "./childcomponent/DetailBasicInfo";
    import ShopInfo from "./childcomponent/ShopInfo";
    import Scroll from "../../components/common/scroll/Scroll";
    import DetailGoodInfo from "./childcomponent/DetailGoodInfo";
    import DetailParamInfo from "./childcomponent/DetailParamInfo";
    import BackTop from "../../components/content/backtop/BackTop";
    import DetailCommentInfo from "./childcomponent/DetailCommentInfo";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                topimages:[],
                good:null,
                shop:null,
                detailinfo:null,
                paraminfo:null,
                commentinfo:null,
                showbacktop:false

            }
        },
        components:{
            DetailNav,
            DetailLunbo,
            DetailBasicInfo,
            ShopInfo,
            Scroll,
            DetailGoodInfo,
            BackTop,
            DetailParamInfo,
            DetailCommentInfo
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
                this.paraminfo = new GoodParam(data.itemParams.info,data.itemParams.rule)
                if(data.rate.cRate !== 0){
                    this.commentinfo = data.rate.list[0]
                }
            })
        },
        methods:{
            refreshbs(){
                this.$refs.scroll.refresh()
            },
            scrollcontent(position){
                this.showbacktop = (-position.y) > 2000
            },
            backtop(){
                this.$refs.scroll.scroll.scrollTo(0,0,1000)
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