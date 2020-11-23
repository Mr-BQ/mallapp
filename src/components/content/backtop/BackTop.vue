<template>
    <div class="backtop">
        <img src="~assets/img/top.png" alt="top">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
    .backtop{
        position: fixed;
        right: 10px;
        bottom: 60px;
    }
    .backtop img{
        width: 50px;
        height: 50px;
    }

</style>