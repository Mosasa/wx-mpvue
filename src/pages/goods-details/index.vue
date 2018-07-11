<template>
  <div class="container">
    <div class="swiper-list">
      <d-swiper :swiperList="swiperlist" :styleObject="styleobject"></d-swiper>
    </div>
    <div class="goods-info">
      <div class="goods-title">{{goodsDetail.name}}</div>
      <div class="goods-price">¥ {{goodsDetail.minPrice}}</div>
    </div>
    <div class="goods-des-info">
      <div class="goods-text">
        <span>goods-describe</span>
      </div>
    </div>
    <footer-box :hideShopPopup="hideShopPopup"></footer-box>
  </div>
</template>
<script>
import swiper from '@/components/swiper'
import footerBox from '@/components/footerBox'
export default {
  data(){
    return {
      goodsDetail:{
        name:'',
        minPrice:''
      },//商品详情对象
      shopCarInfo: {},//设置在缓存的购物车信息   
      hideShopPopup: true, //规格弹出框
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
      styleobject:'width:100%;height:750rpx;position:absolute;top:0;z-index:1000'
    }
  },
  components: {
    'd-swiper':swiper,
    footerBox,
  },
  onLoad: function(options){
    // console.log(this.styleobject)
      // console.log(options)
    wx.getStorage({
      key: 'shopCarInfo',
      success: function(res){
        // success
         // console.log(`initshopCarInfo:${res.data}`)
        // this.shopCarInfo = res.data;
        // this.shopNum = res.data.shopNum
      }
    })
    wx.request({
      url: 'http://localhost:3030/shop/goods/detail',
      method: 'POST',
      data: {
        id: options.id
      },
      success: res =>{
        console.log(res);
        this.goodsDetail.name = res.data.data.basicInfo.name;
        this.goodsDetail.minPrice = res.data.data.basicInfo.minPrice;
      }
    })
  }
}
</script>
<style>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: column;
  flex-wrap: wrap;
}
.swiper-list{
 width: 100%;
 height: 750rpx;
}
.goods-info{
  margin-bottom: 24rpx;
  width: 100%;
  position: relative;
  bottom: 200rpx;
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
.select-box{
  width: 100%;
  height: 102rpx;
}
</style>
