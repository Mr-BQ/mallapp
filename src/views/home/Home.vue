<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">EMALL</div></nav-bar>
    <homelunbo :list="data.banner.list"></homelunbo>
    <Recommend :recommend="data.recommend.list"></Recommend>
    <Fashion/>
    <tab-control class="tabcontrol" :list="['流行','新款','精选']"></tab-control>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import homelunbo from "./childcomponent/homelunbo";
  import Recommend from "./childcomponent/Recommend";
  import Fashion from "./childcomponent/Fashion";
  import TabControl from "../../components/content/TabControl";

  export default {
        name: "Home",
        data(){
            return{
              data:null,
              goods:{
                pop:{page:0,list:[]},
                new:{page:0,list:[]},
                chosen:{page:0,list:[]}
              }
            }
        },
        components:{
          NavBar,
          homelunbo,
          Recommend,
          Fashion,
          TabControl
        },
        created() {
            getHomeMultidata().then(data=>{
                this.data = data.data
                console.log(this.data);
            })

            getHomeGoods('pop',1).then(data=>{
              console.log(data);
            })

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
  }
  #home{
    height: 5000px;
    padding-top: 43px;
  }
  .tabcontrol{
    position: sticky;
    top:44px
  }
</style>
