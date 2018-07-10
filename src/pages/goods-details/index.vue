<import src="../../wxParse/wxParse.wxml"/>
<template>
  <div class="container">
    <d-swiper :swiperList="swiperlist" :styleObject="styleobject"></d-swiper>
   
  </div>
</template>
<script>
import swiper from '@/components/swiper'
export default {
  data(){
    return {
       swiperlist:{
                  item1:[{
                        url: "https://img.alicdn.com/imgextra/i4/1987905011/TB2zQTdhborBKNjSZFjXXc_SpXa_!!1987905011-0-item_pic.jpg_430x430q90.jpg"
                    }],
                    item2: [{
                        url: "https://img.alicdn.com/imgextra/i2/2406931838/TB2BL3QbgFkpuFjSspnXXb4qFXa_!!2406931838.jpg_430x430q90.jpg"
                    }],
                    item3: [{
                        url: "https://img.alicdn.com/imgextra/i3/2406931838/TB2RecrXNxmpuFjSZFNXXXrRXXa_!!2406931838.jpg_430x430q90.jpg"
                    }],
                    item4: [{
                        url: "https://img.alicdn.com/imgextra/i2/2406931838/TB2ZlHoXNXkpuFjy0FiXXbUfFXa_!!2406931838.jpg_430x430q90.jpg"
                    }],
                    item5: [{
                        url: "https://img.alicdn.com/imgextra/i2/2406931838/TB2wITFXY8kpuFjy0FcXXaUhpXa_!!2406931838.jpg_430x430q90.jpg"
                    }],
        },
        styleobject:'width:100%;height:750rpx;position:absolute;top:0'
    }
  },
  components: {
    'd-swiper':swiper,
  },
  mounted(){
    // console.log(this.styleobject)
  }
}
</script>
<style>
.container{
  width: 100%;
  height: 100%;
}
d-swiper{
  z-index: 1000;
}
.goods-info{
  margin-bottom: 24rpx;
  width: 100%;
}
.goods-info .goods-title{
  box-sizing: border-box;
  padding: 35rpx 35rpx 0 35rpx;
  font-size: 32rpx;
  line-height: 1.4;
  color: #000;
  background:#fff;
}
.goods-info .goods-price{
   box-sizing:border-box;
   padding: 35rpx 35rpx;
   color:#e64340;
   font-size: 28rpx;
   font-weight: bold;
   background:#fff;
}
.row-arrow{
  width: 100%;
  box-sizing: border-box;
  padding: 0  120rpx 0 35rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 102rpx;
  font-size: 28rpx;
  line-height: 102rpx;
  margin:28rpx 0;
  background: #fff url(https://cdn.it120.cc/images/weappshop/arrow-right.png) no-repeat 697rpx center;
  background-size: 18rpx auto;
}
.goods-des-info{
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}
.label-title{
  font-size:28rpx;
  color:#000000;
  padding: 30rpx;
}
.goods-text{
  padding: 0 30rpx;
  font-size:28rpx;
  color:#666666;
  line-height: 56rpx;
  margin-bottom: 30rpx;
}
.des-imgs{
  width:100%;
}
.des-imgs image{
  width: 100%;
}
.row-arrow{
  width: 100%;
  box-sizing: border-box;
  padding: 0  120rpx 0 35rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 102rpx;
  font-size: 28rpx;
  line-height: 102rpx;
  margin-bottom: 28rpx;
  background: #fff url(https://cdn.it120.cc/images/weappshop/arrow-right.png) no-repeat 697rpx center;
  background-size: 18rpx auto;
}
.footer-box{
  width: 100%;
  height: 100rpx;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  box-shadow:0 0 8rpx 0 ;
}
.footer-box .shop-cart-btn{
  position: relative;
  width: 150rpx;
  height: 100%;
  line-height: 100rpx;
  text-align: center;
  padding-top: 26rpx;
  font-size:20rpx;
  color:#acacb7;
  box-sizing: border-box;
  background:url("https://cdn.it120.cc/images/weappshop/cart.png") no-repeat center 21rpx;
  background-size: 44rpx auto;
}
.footer-box .shop-cart-btn .shop-num{
  position: absolute;
  color:#e64340;
  left: 80rpx;
  top:-20rpx;
}
.footer-box .join-shop-cart{
  text-align: center;
  width: 300rpx;
  height: 100%;
  line-height: 100rpx;
  background-color: #ff6850;
  color:#fff;
  font-size: 34rpx;
}
.footer-box .now-buy{
  text-align: center;
  height: 100%;
  width: 300rpx;
  line-height: 100rpx;
  background-color: #e64340;
  color:#fff;
  font-size: 34rpx;
}
</style>
