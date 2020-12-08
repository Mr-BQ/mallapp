<template>
    <div class="detail">
        <detail-nav ref="nav" @tabclick="tabclick"></detail-nav>
        <Scroll class="scroll" ref="scroll" :probetype="3" :pullup="false" @scrollContent="scrollcontent">
            <detail-lunbo v-if="topimages.length != 0" :items="topimages"></detail-lunbo>
            <detail-basic-info v-if="good != null" :good="good"></detail-basic-info>
            <shop-info :shop="shop" v-if="shop != null"></shop-info>
            <detail-good-info :info="detailinfo" v-if="detailinfo != null" @loadimg="refreshbs"></detail-good-info>
            <detail-param-info ref="params" :paraminfo="paraminfo" v-if="paraminfo != null"></detail-param-info>
            <detail-comment-info ref="comment" v-if="commentinfo != null" :commentinfo="commentinfo"></detail-comment-info>
            <good-list ref="recommend" v-if="recommend.length != 0" :goods="recommend"></good-list>
        </Scroll>
        <detail-tool-bar @addtocart="addToCart"></detail-tool-bar>
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
    import {getRecommend} from "../../network/detail";
    import GoodList from "../../components/content/GoodList/GoodList";
    import {debounce} from "../../common/utils";
    import DetailToolBar from "./childcomponent/DetailToolBar";

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
                showbacktop:false,
                recommend:[],
                offtopYs:[]
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
            DetailCommentInfo,
            GoodList,
            DetailToolBar
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
            getRecommend().then(res=>{
                this.recommend = res.data.list
            })
        },
        updated() {
            let refresh = null
            if(!refresh){
                refresh = debounce(this.refreshbs,200)
                this.$bus.$on('Detailloadimg',()=>{
                    refresh()
                })
            }
        },
        methods:{
            refreshbs(){
                this.offtopYs = []
                this.offtopYs.push(0)
                this.$refs.params && this.offtopYs.push(this.$refs.params.$el.offsetTop)
                this.$refs.comment && this.offtopYs.push(this.$refs.comment.$el.offsetTop)
                this.$refs.recommend && this.offtopYs.push(this.$refs.recommend.$el.offsetTop)
                this.$refs.scroll && this.$refs.scroll.refresh()
            },
            scrollcontent(position){
                this.showbacktop = (-position.y) > 2000
                if(-position.y >= this.offtopYs[3]){
                    this.$refs.nav.curindex = 3
                }else if(-position.y >= this.offtopYs[2]){
                    this.$refs.nav.curindex = 2
                }else if(-position.y >= this.offtopYs[1]){
                    this.$refs.nav.curindex = 1
                }else{
                    this.$refs.nav.curindex = 0
                }
            },
            backtop(){
                this.$refs.scroll.scroll.scrollTo(0,0,1000)
            },
            tabclick(index){
                this.$refs.scroll.scroll.scrollTo(0,-this.offtopYs[index],300)
            },
            addToCart(){
                const product = {}
                product.image = this.topimages[0]
                product.title = this.good.title
                product.desc = this.good.desc
                product.price = this.good.realPrice
                product.iid = this.iid
                this.$store.dispatch('addTocart',product).then(res=>{
                  console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    .detail{
       position: relative;
        /*z-index: 9;*/
        height: 100vh;

    }
    .scroll{
        overflow: hidden;
        background-color: #fff;
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
    }

</style>