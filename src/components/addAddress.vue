<template>
  <div class="address-box" v-if="isNeedLogistics > 0">
    <div class="add-address" :hidden="curAddressData">
      <div class="title" @click="addAddress">新增收获地址</div>
    </div>
    <div class="show-address" :hidden="!curAddressData" @click="selectAddress">
      <div class="name-tel">{{curAddressData.linkMan}} {{curAddressData.mobile}}</div>
      <div class="addr-text">{{curAddressData.address}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isNeedLogistics:{
      type: Number,
    },
    curAddressData:{
      type: Boolean
    },
    // yunPrice: Number,
  }
}
</script>

<style>
.address-box{
    width: 100%;
    background: url(https://cdn.it120.cc/images/weappshop/arrow-right.png) no-repeat 705rpx center ,
                url(https://cdn.it120.cc/images/weappshop/addr-line.png) no-repeat center bottom;
    background-size: 16rpx auto,750rpx auto;
    background-color: #fff;
    margin: 20rpx 0; 
}
.add-addres{
    width: 100%;
}
.add-address .title{
    font-size: 28rpx;
    color: #000;
    margin-left: 30rpx;
    background: url(https://cdn.it120.cc/images/weappshop/ico-add-addr.png) no-repeat left center;
    background-size: 60rpx auto;
    padding: 40rpx 0 40rpx 90rpx; 
}
.show-address{
    width: 664rpx;
    box-sizing: border-box;
    padding-left: 100rpx;
    background: url(https://cdn.it120.cc/images/weappshop/ico-addr.png) no-repeat 30rpx 35rpx;
    background-size: 30rpx auto;
}
.show-address .name-tel{
    font-size: 28rpx;
    color: #000;
    padding: 30rpx 0 20rpx 0;
}
.show-address .addr-text{
    font-size: 24rpx;
    color: #888;
    padding-bottom: 34rpx;
    line-height: 36rpx;
}
</style>
