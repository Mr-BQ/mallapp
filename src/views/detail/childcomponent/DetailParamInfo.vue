<template>
    <div class="detailparaminfo">
        <table v-for="(table,index) in paraminfo.size" :key="index" class="size">
            <tr v-for="(tr,index1) in table" :key="index1">
                <td v-for="(td,index2) in tr " :key="index2" :class="{attrname:index2 == 0}">
                    {{td}}
                </td>
            </tr>
        </table>
        <table class="params">
            <tr v-for="(item,index) in paraminfo.infos" :key="index">
                <td class="attrname">{{item.key}}</td>
                <td class="attrval">{{item.value}}</td>
            </tr>
        </table>
        <table class="infoimg" v-if="paraminfo.image">
            <img :src="paraminfo.image" alt="">
        </table>
    </div>
</template>

<script>
    export default {
        name: "DetailParamInfo",
        props:{
            paraminfo:{
                type:Object,
                default(){
                    return{

                    }
                }
            }
        }

    }
</script>

<style scoped>
    td{
        border-bottom:1px solid lightgrey;
    }
    .size{
        border-collapse: collapse;
        width: 100%;
        text-align: left;
        line-height: 3rem;
        margin: 10px 0;
        box-shadow: 0 4px 3px rgba(100,100,100,.2);
    }
    .params{
        border-collapse: collapse;
        width: 100%;
        text-align: left;
        line-height: 3rem;
        box-shadow: 0 4px 3px rgba(100,100,100,.2);
    }
    .attrname{
        white-space: nowrap;
        padding-left:20px;
        padding-right: 10px;

    }
    .attrval{
        color:dodgerblue;
        padding-right: 10px;
    }
</style>