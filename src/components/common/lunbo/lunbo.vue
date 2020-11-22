<template>
    <div id="lunbo">
        <div id="pics" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot name="pic"></slot>
        </div>

        <div id="index">
            <slot name="ind_item">
                <div v-for="index in piccnt" :key="index" class="ind_item" :class="{active:index-1 == curindex}" @click="changeindex(index-1)"></div>
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
                lunbotimer:null,
                isscolling:false,
                islunbo:true,
                slide1:null,
                startX:0,
                distance:0,
                picsize:0
            }
        },
        mounted() {
            this.slide1 = document.getElementsByClassName('slide')[0]
            this.picsize = parseInt(getComputedStyle(this.slide1,null)['width'])
            this.slide1.style.marginLeft = (-1)*this.picsize + 'px'
            this.slide1.addEventListener('transitionend',()=>{
                if(this.curindex == this.piccnt){
                    this.curindex = 0
                    this.slide1.style.transition = '0ms'
                    this.slide1.style.marginLeft = -this.picsize + 'px'
                }
                if(this.curindex == -1){
                    this.curindex = this.piccnt-1
                    this.slide1.style.transition = '0ms'
                    this.slide1.style.marginLeft = -this.picsize*(this.curindex+1) + 'px'
                }
                if(!this.islunbo){
                    this.islunbo = true
                    this.lunbo()
                }
                this.isscolling = false
            })
            this.lunbo()
        },
        methods:{
            touchStart(e){
                if(this.isscolling){
                    return
                }
                clearInterval(this.lunbotimer)
                this.islunbo = false
                this.startX = e.touches[0].pageX

            },
            touchMove(e){
                let currentX = e.touches[0].pageX

                this.distance = currentX - this.startX
                this.slide1.style.transition = 'margin-left 0ms'
                this.slide1.style.marginLeft = (this.curindex+1)*this.picsize*(-1) + this.distance + 'px'

            },
            touchEnd(e){
                let move = Math.abs(this.distance)

                if(this.distance == 0){
                    return
                }else if(this.distance > 0 && move > this.picsize * 0.3){
                    this.curindex--

                }else if(this.distance < 0 && move > this.picsize * 0.3 ){
                    this.curindex++
                }
                this.scoll(this.slide1,(-1)*this.picsize*(this.curindex+1))
            },
            changeindex(index){
                clearInterval(this.lunbotimer)
                this.islunbo = false
                this.curindex = index

                // this.move(obj,40,(-1)*size*this.curindex,()=>{
                //     this.lunbo()
                // })
                this.scoll(this.slide1,(-1)*this.picsize*(this.curindex+1))
            },
            scoll(obj,target){
                // if(parseInt(getComputedStyle(obj,null)['marginLeft']) == target){
                //     return
                // }
                this.isscolling = true;
                obj.style.transition = 'margin-left 1s'
                obj.style.marginLeft = target + 'px'
            },
            // move(obj,speed,target,callback) {
            //     clearInterval(this.timer)
            //     let currentval = parseInt(getComputedStyle(obj,null)['marginLeft'])
            //     if(target < currentval){//如果目标位置小于当前位置，说明向左移动，speed为负数
            //         speed = -speed
            //     }
            //     this.timer = setInterval(()=> {
            //         let oldval = parseInt(getComputedStyle(obj,null)['marginLeft'])
            //         let newval = oldval + speed
            //         if( (speed > 0 && newval > target) || (speed < 0 && newval < target)){
            //             newval = target
            //         }
            //         obj.style.marginLeft = newval + 'px'
            //         if(newval == target){
            //             clearInterval(this.timer)
            //             callback && callback()
            //         }
            //     },20)
            // },
            lunbo(){
                this.lunbotimer = setInterval(()=> {
                    this.curindex = (this.curindex+1)%(this.piccnt+1)
                    this.scoll(this.slide1,(-1)*this.picsize*(this.curindex+1))
                    // this.move(obj,speed,(-1)*size*this.curindex,()=> {
                    //     if(this.curindex == this.piccnt-1){
                    //         this.curindex = 0
                    //         obj.style.marginLeft = 0 + 'px'
                    //     }
                    // })
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