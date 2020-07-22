<template>
  <!--ref/children-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name:"Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true, //如果是监听点击<div @click="">的话这个值必须设置为true
        probeType:this.probeType, //(这里分 0 1 2 3个级别0 1 表示不会监听到滚动;2 表示只监听手指滑动的区域;3表示监听所有)
        pullUpLoad:this.pullUpLoad //这个的值是 true或false 我在这里设置里一个变量;作用是动态设置
      })

      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll',position)
      })

      // 3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })

      this.scroll.refresh()
    },
    methods:{
      scrollTo(x,y,time = 300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
</style>
