<template>
  <div class="cartbottombar">
    <div class="checkbox">
      <check-box :checked="selectAll" @checkclick="selectallclick" class="check"></check-box>
      全选
    </div>
    <div class="price">合计：¥ {{totalprice}}</div>
    <div class="cal">去计算({{callength}})</div>
  </div>
</template>

<script>
import CheckBox from "@/components/content/checkbox/CheckBox";
export default {
  name: "CartBottomBar",
  components:{
    CheckBox
  },
  data(){
    return{
      selectAll:false
    }
  },
  methods:{
    selectallclick(){
      this.selectAll = !this.selectAll
    }
  },
  computed:{
    totalprice(){
      return this.$store.state.cartlist.filter(item => item.checked).reduce((preval,item)=>{
        return preval + item.price * item.count
      },0)
    },
    callength(){
      return this.$store.state.cartlist.filter(item => item.checked).length
    }
  }

}
</script>

<style scoped>
  .cartbottombar{
    position: absolute;
    height: 40px;
    background-color: #eee;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
  }
  .checkbox{
    display: flex;
    align-items: center;
    width: 20%;
  }
  .check{
    width: 25px;
    height: 25px;
    margin: 0 10px;
  }
  .price{
    line-height: 40px;
    width: 50%;
    text-align: center;
  }
  .cal{
    flex: 1;
    line-height: 40px;
    background-color: dodgerblue;
    color: white;
    text-align: center;
  }
</style>