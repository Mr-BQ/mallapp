<template>
    <div class="checkbox" @click="checkclick">
        <div class="img" :class="{check:checked}"></div>
    </div>
</template>

<script>
    export default {
        name: "CheckBox",
        data(){
            return{
                checked:false
            }
        },
        methods:{
            checkclick(){
                this.checked = !this.checked
            }
        }
    }
</script>

<style scoped>
    .img{
        background-image: url("~assets/img/check/uncheck.svg");
        width: 20px;
        height: 20px;
        background-size: 100%;
    }
    .check{
        background-image: url("~assets/img/check/check.svg");
        width: 20px;
        height: 20px;
        background-size: 100%;
    }
</style>