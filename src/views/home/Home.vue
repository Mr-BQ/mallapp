<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">EMALL</div></nav-bar>
    <homelunbo :list="data.banner.list"></homelunbo>
    <Recommend :recommend="data.recommend.list"></Recommend>
    <Fashion/>
    <tab-control class="tabcontrol" :list="['流行','新款','精选']" @tabclick="changegood"></tab-control>
    <good-list class="goodlist" :goods="showgood" ></good-list>
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

  export default {
        name: "Home",
        data(){
            return{
              data:{banner:{}},
              goods:{
                pop:{page:0,list:[]},
                new:{page:0,list:[]},
                sell:{page:0,list:[]}
              },
              curtab:'pop'
            }
        },
        components:{
          NavBar,
          homelunbo,
          Recommend,
          Fashion,
          TabControl,
          GoodList
        },
        created() {
          this.getHomemultidata()
          this.getHomegoods('pop')
          this.getHomegoods('new')
          this.getHomegoods('sell')



        },
        computed:{
          showgood(){
            return this.goods[this.curtab].list
          }
        },
        methods:{
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
    position: fixed;
    top:0;
    left: 0;
    right:0;
    z-index: 9;
  }
  #home{
    height: 5000px;
    padding-top: 43px;

  }
  .tabcontrol{
    position: sticky;
    top:44px;
    background-color: #fff;
    z-index: 9;

  }
  .goodlist{
    margin-bottom: 100px;
  }
</style>
