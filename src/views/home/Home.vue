<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">EMALL</div></nav-bar>
    <tab-control ref="tab2" class="tabcontrol2" v-show="isfixed" :list="['流行','新款','精选']" @tabclick="changegood"></tab-control>
    <Scroll class="content" ref="scroll" :probetype="3"
            :pullup="ispullUpLoad" @pullup="loadmore" @scrollContent="scrollcontent">
      <homelunbo v-if="data != null" :list="data.banner.list"></homelunbo>
      <Recommend v-if="data != null" :recommend="data.recommend.list"></Recommend>
      <Fashion/>
      <tab-control ref="tab1" :list="['流行','新款','精选']" @tabclick="changegood"></tab-control>
      <good-list class="goodlist" :goods="showgood" ></good-list>
    </Scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top> <!--监听组件事件，要加上.native-->

  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import homelunbo from "./childcomponent/homelunbo";
  import Recommend from "./childcomponent/Recommend";
  import Fashion from "./childcomponent/Fashion";
  import TabControl from "../../components/content/TabControl";
  import GoodList from "../../components/content/GoodList/GoodList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backtop/BackTop";
  import {debounce} from "../../common/utils";


  export default {
        name: "Home",
        data(){
            return{
              data:null,
              goods:{
                pop:{page:0,list:[]},
                new:{page:0,list:[]},
                sell:{page:0,list:[]}
              },
              curtab:'pop',
              isShowBackTop:false,
              ispullUpLoad:true,
              taboffsetheight:0,
              isfixed:false
            }
        },
        components:{
          NavBar,
          homelunbo,
          Recommend,
          Fashion,
          TabControl,
          GoodList,
          Scroll,
          BackTop
        },
        mounted() {
          this.getHomemultidata()
          this.getHomegoods('pop')
          this.getHomegoods('new')
          this.getHomegoods('sell')
        },
        updated() {
          let refresh = null
          if(!refresh){
            refresh = debounce(this.$refs.scroll.refresh,200)
            this.$bus.$on('loadimg',()=>{
              refresh()
            })
          }
          this.taboffsetheight = this.$refs.tab1.$el.offsetTop
        },
    computed:{
          showgood(){
            return this.goods[this.curtab].list
          }
        },
        methods:{
          loadmore(){
            this.getHomegoods(this.curtab)
          },
          scrollcontent(position){
            this.isShowBackTop  = (-position.y) > 1000
            this.isfixed = (-position.y) > this.taboffsetheight
          },
          backTopClick(){//回到顶部
            this.$refs.scroll.scroll.scrollTo(0,0,1000)//获取子组件Scroll的scroll实例，并调用其scrollTo方法
          },
          changegood(index){
            switch (index) {
              case 0:
                this.curtab = 'pop'
                break
              case 1:
                this.curtab = 'new'
                break
              case 2:
                this.curtab = 'sell'
            }
            this.$refs.tab1.curindex = index
            this.$refs.tab2.curindex = index
          },
          getHomemultidata(){
            getHomeMultidata().then(data=>{
              this.data = data.data
              console.log(this.data);
            })
          },
          getHomegoods(type){
            let page = ++this.goods[type].page
            getHomeGoods(type,page).then(data=>{
              this.goods[type].list.push(...data.data.list)
              if(this.$refs.scroll.scroll){
                  this.$refs.scroll.scroll.finishPullUp()
              }

            })
          }
        }
    }
</script>

<style scoped>
  .navbar{
    font-size: 20px;
    background-color: dodgerblue;
    color: #fff;
  }
  #home{
    /*height: 5000px;*/
    /*padding-top: 43px;*/
    /*position: relative;*/

  }
  .tabcontrol2{
    /*position: sticky;*/
    /*top:44px;*/
    background-color: #fff;
    position: relative;
    z-index: 5;
  }
  .goodlist{
    margin-bottom: 100px;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
