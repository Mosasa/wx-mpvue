<template>
  <div class="order">
    <div v-for="item in orderCell" :key="item">
      <navigator hover-class="none" :url="item.url" class="order-cell">
        <img :src="item.icon" :class="item.class" />
        <div class="badge" v-if="item.count > 0">{{item.count}}</div>
        <div>{{item.text}}</div>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderCell: [
      {
        icon: '/static/images/to-be-paid.png',
        text: '待付款',
        url: '../order-list/index?currentType=1',
        class: 'order-cell-icon-small'
      }, {
        icon: '/static/images/to-be-delivered.png',
        text: '待发货',
        url: '../order-list/index?currentType=2',
        class: 'order-cell-icon-small',
      }, {
        icon: '/static/images/to-be-received.png',
        text: '待收货',
        url: '../order-list/index?currentType=3',
        class: 'order-cell-icon-big'
      }
      ]
    }
  }
  
}
</script>

<style>
.order {
    overflow: hidden;
    display: -webkit-box;
    background: #fff;
    margin-bottom: 23.44rpx;
    font-size: 25.78rpx;
    height: 166.40rpx;
    margin-top:-489rpx;
    border-top: 1rpx solid #E8E8E8;
    border-bottom: 1rpx solid #E8E8E8;	
}

.order-cell {
    text-align: center;
    -webkit-box-flex: 1;
    margin-top: 42.18rpx;
    position: relative;
    padding:0 90rpx;
}
.order-cell-icon-big {
    width: 51.56rpx;
    height: 46.87rpx;
    margin-bottom: 11.72rpx;
}

.order-cell-icon-small {
    width: 44.53rpx;
    height: 46.87rpx;
    margin-bottom: 11.72rpx;
}

.badge {
    position: absolute;
    left: 52%;
    top: -6%;
    display: inline-block;
    padding: .1rem .25rem;
    font-size: .6rem;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: .4rem;
    background-color: #fc3151;
    color: white;
    box-sizing: border-box;
    transition: all .4s ease-out;
}
</style>
