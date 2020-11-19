<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">EMALL</div></nav-bar>
    <homelunbo :list="list"></homelunbo>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import lunbo from "../../components/common/lunbo/lunbo";
  import lunboitem from "../../components/common/lunbo/lunboitem";
  import {getHomeMultidata} from "../../network/home";
  import homelunbo from "../../components/content/homelunbo";

  export default {
        name: "Home",
        data(){
            return{
              list:[]
            }
        },
        components:{
          NavBar,
          homelunbo
        },
        created() {
            getHomeMultidata().then(data=>{
                this.list = data.data.banner.list
                this.list.push(this.list[0])//将最后一张图片放到最后，进行衔接
                console.log(this.list);
            })
        }
    }
</script>

<style scoped>
  .navbar{
    font-size: 20px;
    background-color: dodgerblue;
    color: #fff;
  }
</style>
