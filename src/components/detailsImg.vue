<template>
  <div class="container">
    <swiper class="swiper" :indicator-dots="indicatorDors"  :autoplay="autoplay" :duration="duration" :interval="interval">
      <swiper-item class="swiper-item" v-for="pics in goodsDetail" :key="pics" >
        <img :src="item.pic" alt="" width="355rpx" height="150rpx" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
export default {
  data(){
    return {
      goodsDetail:{}
    }
  },
  mounted(){
    // wx.
  }
}
</script>

<style>

</style>
