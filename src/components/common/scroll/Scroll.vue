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
            pullup:{
                type:Boolean,
                default:false
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
                        pullUpLoad:this.pullup
                    })
                    this.scroll.on('scroll',(position)=>{
                        this.$emit('scrollContent',position)
                    })
                    if(this.pullup){
                        this.scroll.on('pullingUp',()=>{
                            this.$emit('pullup')
                        })
                    }
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