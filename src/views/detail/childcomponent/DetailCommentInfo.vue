<template>
    <div class="detailcommentinfo">
        <div class="userinfo">

        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailCommentInfo",
        props:{
            commentinfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        }

    }
</script>

<style scoped>

</style>