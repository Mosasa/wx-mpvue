<template>
   <div class="container">
    <div class="list" hover-class="none" :data-tip="tip" :data-url="url" @click="navigateTo">
    <div class="list-icon-wrap">
      <img :src="icon" class="list-icon" />
    </div>
    <div class="list-text">{{text}}</div>
    <div class="arrow-wrap">{{tip}}
      <img src="/static/images/accessory.png" class="list-arrow" />
    </div>
  </div>
  <div :hidden="!cut?true:false" style="heigth: 23.44rpx"></div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      icon: '/static/images/order.png',
      text: '我的订单',
      tip: '',
      url: ''
    }
    
  }
}
</script>

<style>
.list {
  width: 750rpx;
  background: #f8f8f8;
  height: 120.77rpx;
  line-height: 120.77rpx;
  padding: 0 35.15rpx;
  border: 1px solid #f8f8f8;
  background: #fff;
  font-size: 32.81rpx;
  margin-top: -422rpx;
}
.list-icon-wrap {
  float: left;
  height: 120.77rpx;
  line-height: 120.77rpx;
  padding-top:10rpx;
  padding-left:20rpx;
}
.list-icon {
  width: 42.18rpx;
  height: 40.84rpx;
  line-height: 40.84rpx;
  margin-top: 30rpx;
}

.arrow-wrap {
  float: right;
  color: #999;
  line-height: 100.77rpx;
  font-size: 23.44rpx;
  padding-right:30rpx;

}

.list-arrow {
  width: 11.72rpx;
  height: 40.72rpx;
  line-height: 40.72rpx;
  margin: 35rpx 0 0 18.75rpx;

}

.list-text {
  float: left;
  font-size: 32.81rpx;
  text-indent: 29.29rpx;
}
</style>
