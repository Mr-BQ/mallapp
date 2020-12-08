<template>
    <div class="checkbox" @click="checkclick">
        <div class="img" :class="{check:checked}"></div>
    </div>
</template>

<script>
    export default {
        name: "CheckBox",
        props:{
          checked:{
            type:Boolean,
            default:false
          }
        },
        methods:{
            checkclick(){
                this.$emit('checkclick')
            }
        }
    }
</script>

<style scoped>
    .checkbox{
      width: 20px;
      height: 20px;
    }
    .img{
        background-image: url("~assets/img/check/uncheck.svg");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: 100%;
    }
    .check{
        background-image: url("~assets/img/check/check.svg");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-size: 100%;
    }
</style>