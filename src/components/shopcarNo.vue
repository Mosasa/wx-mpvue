<template>
  <div class="container">
    <div class="noShop">
      <div class="title-box">
        {{goodsList.list.length}}
        购物车空空如也
      </div>
      <div class="to-index-btn" @click="toIndexPage">
        去逛逛
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      goodsList:{
        list: []
      }
    }
  },
  methods: {
    toIndexPage(){
    wx.switchTab({
      url: "../kinds/main"
    })
  }
  }
}
</script>
<style>
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.title-box{
    width: 100%;
    /* padding-top: 330rpx; */
    text-align: center;
    font-size:28rpx;
    color:#999;
    background: url(https://cdn.it120.cc/images/weappshop/icon-cart.png) no-repeat center 205rpx;
    background-size: 100rpx auto;
    margin-bottom: 50rpx;
}
.to-index-btn{
    color:#fff;
    background:#e64340;
    border-radius:6px;
    width:300rpx;
    height:70rpx;
    line-height: 70rpx;
    text-align: center;
    font-size:28rpx;
    margin:0 auto
}
</style>
