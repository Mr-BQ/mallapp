<template>
  <div class="toast" v-show="isShow">
    <div class="content" >
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
name: "Toast",
  data(){
    return{
      message:'',
      isShow:false,
      timer:null
    }
  },
  methods:{
    show(msg,duration=1500){
      // if(this.timer){
      //   clearTimeout(this.timer)
      // }
      this.message = msg
      this.isShow = true
      this.timer = setTimeout(()=>{
        this.message = ''
        this.isShow = false
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.7);
    color: #eee;
    font-size: 20px;
    padding: 10px 10px;
    border: 1px solid transparent;
    border-radius: 10%;
  }


</style>