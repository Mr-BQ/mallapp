<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">EMALL</div></nav-bar>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata} from "../../network/home";

  export default {
        name: "Home",
        data(){
            return{
              result:null
            }
        },
        components:{
          NavBar
        },
        created() {
            getHomeMultidata().then(data=>{
                this.result = data;
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
