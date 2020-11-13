<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="colorstyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        link:String,
        activecolor:{
          type:String,
          default:'dodgerblue'
        }
      },
      computed:{
        isactive(){
          return this.$route.path == this.link;
        },
        colorstyle(){
          return this.isactive? {color:this.activecolor} :{}
        }
      },
      data(){
          return{
            // isactive:true
          }
      },
      methods:{
          itemclick(){
            if(this.$route.path != this.link)
              this.$router.replace(this.link);

          }
      }

    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 4px;
    margin-bottom: -4px;
  }


</style>
