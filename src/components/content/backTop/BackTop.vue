<template>
  <div class="back-top">
    <img src="~assets/img/common/返回顶部.png" alt="">
  </div>

</template>

<script>
  export default {
    name:"BackTop",
    // methods:{
    //   backClick(){
    //     this.$emit('backClick')
    //   }
    // }
  }

</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 60px;
  }

  .back-top img {
    width: 43px;
    height: 43px;
    /* background-color: rgba(255,255,255,0.6); */
  }
</style>
