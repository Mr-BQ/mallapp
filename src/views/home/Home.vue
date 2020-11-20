<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">EMALL</div></nav-bar>
    <homelunbo :list="data.banner.list"></homelunbo>
    <Recommend :recommend="data.recommend.list"></Recommend>
    <Fashion/>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import lunbo from "../../components/common/lunbo/lunbo";
  import lunboitem from "../../components/common/lunbo/lunboitem";
  import {getHomeMultidata} from "../../network/home";
  import homelunbo from "./childcomponent/homelunbo";
  import Recommend from "./childcomponent/Recommend";
  import Fashion from "./childcomponent/Fashion";

  export default {
        name: "Home",
        data(){
            return{
              data:null
            }
        },
        components:{
          NavBar,
          homelunbo,
          Recommend,
          Fashion
        },
        created() {
            getHomeMultidata().then(data=>{
                this.data = data.data
                console.log(this.data);
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
    height: 1000px;
    padding-top: 43px;
  }
</style>
