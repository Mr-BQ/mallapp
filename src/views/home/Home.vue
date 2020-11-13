<template>
  <div id="home">
    <nav-bar class="navbar"><div slot="center">EMALL</div></nav-bar>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Home",
        components:{
          NavBar
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
