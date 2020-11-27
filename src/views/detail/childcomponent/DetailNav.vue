<template>
    <div class="DetailNav">
        <nav-bar>
            <div slot="left" class="back" @click="back">
                <img src="~assets/img/back.svg" alt="back">
            </div>
            <div slot="center" class="content">
                <div v-for="(item,index) in items" class="item"
                    :class="{active:index === curindex}" @click="itemclick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "detailnav",
        components:{
            NavBar
        },
        data(){
            return{
                items:['商品','参数','评论','推荐'],
                curindex:0
            }
        },
        methods:{
            itemclick(index){
                this.curindex = index
            },
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .content{
        display:flex
    }

    .item{
        flex:1;
    }
    .back img{
        height: 40px;
        width: 40px;
    }
    .back{
        margin-top: 3px;
    }
    .active{
        color:dodgerblue;
    }
</style>