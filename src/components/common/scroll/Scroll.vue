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
            },
            pullupLoad:{
                type:Boolean,
                default:true
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
                        probeType:this.probetype,
                        pullUpLoad:true
                    })
                    this.scroll.on('scroll',(position)=>{
                        this.$emit('scrollContent',position)
                    })
                    this.scroll.on('pullingUp',()=>{
                        this.$emit('pullup')

                    })
                })
            },200)
        },
        updated() {
            // this.scroll.refresh()
        },
        methods:{
            refresh(){
                console.log('refresh')
                this.scroll && this.scroll.refresh()
            }
        }

    }
</script>

<style scoped>

</style>