<template>
    <div id="outter">
        <div id="pics">
            <slot name="pic"></slot>
        </div>

        <div id="index">
            <slot name="ind_item">
                <div v-for="index in piccnt-1" :key="index" class="ind_item" :class="{active:index-1 == curindex}" @click="changeindex(index-1)"></div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lunbo",
        props:['piccnt'],
        data(){
            return{
                curindex:0,
                timer:null,
                lunbotimer:null
            }
        },
        mounted() {
            this.lunbo()
        },
        methods:{
            changeindex(index){
                clearInterval(this.lunbotimer)
                this.curindex = index
                let obj = document.getElementsByClassName('slide')[0]
                let size = parseInt(getComputedStyle(obj,null)['width'])
                this.move(obj,40,(-1)*size*this.curindex,()=>{
                    this.lunbo()
                })
            },
            move(obj,speed,target,callback) {
                clearInterval(this.timer)
                let currentval = parseInt(getComputedStyle(obj,null)['marginLeft'])
                if(target < currentval){//如果目标位置小于当前位置，说明向左移动，speed为负数
                    speed = -speed
                }
                this.timer = setInterval(()=> {
                    let oldval = parseInt(getComputedStyle(obj,null)['marginLeft'])
                    let newval = oldval + speed
                    if( (speed > 0 && newval > target) || (speed < 0 && newval < target)){
                        newval = target
                    }
                    obj.style.marginLeft = newval + 'px'
                    if(newval == target){
                        clearInterval(this.timer)
                        callback && callback()
                    }
                },20)
            },
            lunbo(){
                this.lunbotimer = setInterval(()=> {
                    this.curindex = (this.curindex+1)%this.piccnt
                    let obj = document.getElementsByClassName('slide')[0]
                    let size = parseInt(getComputedStyle(obj,null)['width'])
                    let speed = size/50
                    this.move(obj,speed,(-1)*size*this.curindex,()=> {
                        if(this.curindex == this.piccnt-1){
                            this.curindex = 0
                            obj.style.marginLeft = 0 + 'px'
                        }
                    })
                },3000)
            }
        }

    }
</script>

<style scoped>
    #index{
        height: 10%;
        margin-top: -7%;
        display: flex;
        justify-content: center;

    }

    #pics{
        display: flex;
        overflow: hidden;
    }

    .ind_item{
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: lightgray;
        margin: 0 5%;
    }

    .active{
        background-color: dodgerblue;
    }

</style>