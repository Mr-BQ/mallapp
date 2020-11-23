<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    export default {
        name: "Scroll",
        props:{
            probetype:{
                type:Number,
                default:0
            }
        },
        data(){
            return{
                scroll:null
            }
        },
        mounted(){
            setTimeout(()=>{
                this.$nextTick(()=>{
                    if(!this.$refs.wrapper){
                        return
                    }
                    this.scroll = new BScroll(this.$refs.wrapper,{
                        click:true,
                        probeType:this.probetype
                    })
                    this.scroll.on('scroll',(position)=>{
                        this.$emit('scrollContent',position)
                    })
                })
            },200)
        }

    }
</script>

<style scoped>

</style>