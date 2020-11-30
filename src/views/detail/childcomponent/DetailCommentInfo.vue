<template>
    <div class="detailcommentinfo">
        <div class="header">
            <div class="headerleft">用户评价</div>
            <div class="headerright">更多</div>
        </div>
        <div class="userinfo">
            <div class="logo">
                <img :src="commentinfo.user.avatar" alt="">
            </div>
            <div class="username">{{commentinfo.user.uname}}</div>
        </div>
        <div class="comment">
            {{commentinfo.content}}
        </div>
        <div class="detail">
            <div class="time">{{commentinfo.created | formatdate}}</div>
            <div class="style">{{commentinfo.style}}</div>
        </div>
        <div class="commentimg" v-if="commentinfo.images">
            <img v-for="(item,index) in commentinfo.images" :src="item" alt="index" :key="index">
        </div>
    </div>
</template>

<script>
    import {formatDate} from "../../../common/utils";

    export default {
        name: "DetailCommentInfo",
        props:{
            commentinfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        filters:{
            formatdate(value){
                return formatDate(new Date(value*1000),'yyyy-MM-dd')
            }
        }

    }
</script>

<style scoped>
    .header{
        display:flex;
        margin:20px 10px;
        padding: 10px 0;
        border-bottom: 2px solid lightgrey;
        border-top: 2px solid lightgrey;
    }
    .headerleft{
        flex:1;
        margin-left: 15px;
    }
    .headerright{
        flex:1;
        text-align: right;
        margin-right: 15px;
       color:black;
    }
    .userinfo{
        display:flex;

    }
    .logo{
        height:3rem;
        weight:3rem;
        overflow:hidden;
        border:1px solid transparent;
        border-radius: 50%;
        margin-left: 10px;
    }
    .logo img{
        height:100%;
    }
    .username{
        font-size: 1.3rem;
        font-weight: bold;
        align-self: center;
        margin-left: 20px;
    }
    .comment{
        padding:10px 20px;
        color:grey;
    }
    .detail{
        display:flex;
        color:darkgrey;
    }
    .time{
        width: auto;
        margin: 0 19px;
    }
    .style{
        width:auto;
    }

    .commentimg{
        width: 80px;
        height: 80px;
        margin:10px 20px;
        display: flex;
    }
    .commentimg img{
        width: 100%;
        height: 100%;
        margin-right: 8px;
    }
    .detailcommentinfo{
        box-shadow: 0 4px 3px rgba(100,100,100,.2);
        padding-bottom: 20px;
    }
</style>