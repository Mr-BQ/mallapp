<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <detail-lunbo v-if="topimages.length != 0" :items="topimages"></detail-lunbo>
    </div>

</template>

<script>
    import DetailNav from "./childcomponent/DetailNav";
    import DetailLunbo from "./childcomponent/DetailLunbo";
    import {getDetail} from "../../network/detail";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                topimages:[]
            }
        },
        components:{
            DetailNav,
            DetailLunbo
        },
        created() {
            this.iid = this.$route.params.iid
            getDetail(this.iid).then(res=>{
               this.topimages.push(...res.result.itemInfo.topImages)
            })

        }
    }
</script>

<style scoped>

</style>