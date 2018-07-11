<template>
  <div class="container">
    <div class="footer-box">
      <div class="shop-cart-btn" @click="goShopCar">
        <div class="shop-num">{{shopNum}}</div>
        购物车
      </div>
      <div class="join-shop-cart" @click="addShopCar">加入购物车</div>
      <div class="now-buy" @click="tobuy">立即购买</div>
    </div>
    <div class="show-popup" :hidden="hideShopPopup" >
        <div class="popup-mask" @click="closePopupTap"></div>
        <div class="popup-contents">
             <div class="pop-goods-info">
                <div class="pop-img-box">
                    <image :src="goodsDetail.pic" class="goods-thumbnail"/>
                </div>
                <div class="pop-goods-des">
                    <div class="pop-goods-title">{{goodsDetail.name}}</div>
                    <div class="pop-goods-price">¥ {{selectSizePrice}}</div>
                </div>
                <div class="pop-goods-close" @click="closePopupTap"></div>
             </div>
             <div class="size-label-box">
                <div v-for="(property, x) in goodsDetail" :key="x">
                <div class="label">{{property.name}}</div> 
                <div class="label-item-box">
                    <div class="label-item" :class="item.active ? 'active' : '' " v-for="(p, i) in property" @click="labelItemTap" :key="i">
                        {{p.name}}
                    </div> 
                </div>
                </div>
             </div> 
             <div class="buy-num-box">
                <div class="num-label">购买数量</div>
                <div class="num-box">
                    <div class="num-jian" :class="buyNumber == buyNumMin ? 'hui': ''" @click="numJianTap">-</div>
                    <div class="num-input">
                       <input  type="number" :value="buyNumber" disabled/>
                    </div>
                    <div class="num-jia" :class="buyNumber== buyNumMax ? 'hui': ''" @click="numJiaTap">+</div>
                </div>
             </div>  
             <div v-if="!isBuy" class="popup-join-btn" @click="addShopCar">
                加入购物车
             </div>
             <div v-else class="popup-join-btn" @click="tobuy">
                立即购买
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      shopNum:0,//全部购买数量
      hasMoreSelect: false,//是否有多种规格可选
      selectSize:'选择:',//选择规格
    }
  },
  props:['hideShopPopup'],
  methods: {
    addShopCar(){
      this.hideShopPopup = false;
    },
    closePopupTap(){
      this.hideShopPopup = true;
    }
  },
  mounted(){
    
  }
  // props:['shopNum']
}
</script>
<style scoped>
.container{
  width: 100%;
  height: 100%;
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
.show-popup{
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  z-index: 4;
}
.popup-mask{
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
.popup-contents{
  position: fixed;
  left: 0;
  bottom: 0;
  width:100%;
  background-color: #fff;
  z-index: 6;
}
.pop-goods-info{
  display: flex;
  align-items: center;
  margin-left: 30rpx;
  padding: 30rpx 0;
  border-bottom: 1px solid #eee;
}
.pop-img-box{
  width: 120rpx;
  height: 120rpx;
  overflow: hidden;
  margin-right: 26rpx;
}
.pop-img-box .goods-thumbnail{
  width: 120rpx;
  height: 120rpx;
}
.pop-goods-title{
  width: 484rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size:26rpx;
  color:#000000;
}
.pop-goods-price{
  font-size:26rpx;
  color:#e64340;
  margin-top:20rpx; 
}
.pop-goods-close{
  width: 36rpx;
  height: 36rpx;
  flex: 1;
  background:url("https://cdn.it120.cc/images/weappshop/popup-close.png") no-repeat center center;
  background-size: 36rpx auto;
  align-self: flex-start;
  margin-top: -10rpx;
}
.size-label-box  .label{
  font-size:26rpx;
  color:#000;
  padding-left: 30rpx;
  padding: 30rpx 0 20rpx 30rpx;
}
.size-label-box .label-item-box{
  display: flex;
  margin-left: 30rpx;
  flex-direction: row;
  flex-wrap:wrap;
}
.size-label-box .label-item{
  font-size:26rpx;
  color:#000;
  padding: 14rpx 20rpx;
  border: 1px solid #ddd;
  border-radius: 6rpx;
  margin: 0 20rpx 20rpx 0;
}
.size-label-box .label-item.active{
  color: #e64340;
  border: 1px solid #e64340;
}
.buy-num-box{
   display: flex;
   justify-content: space-between;
   padding: 30rpx 30rpx 48rpx 0;
   margin-left: 30rpx; 
   border-top: 1px solid #eee;
   margin-top: 30rpx;
   align-items: center;
}
.num-label{
  font-size:26rpx;
  color:#000000;
}
.buy-num-box .num-box{
     display: flex;
}
.buy-num-box .num-box .num-jian,
.buy-num-box .num-box .num-input,
.buy-num-box .num-box .num-jia{
  width: 80rpx;
  height: 64rpx;
  line-height: 62rpx;
  text-align: center;
  border: 1px solid #eee;
}
.buy-num-box .num-box .num-input{
  font-size: 28rpx;
}
.buy-num-box .num-box .num-input input{
  height: 100%;
}
.popup-join-btn{
  width: 100%;
  height: 89rpx;
  text-align: center;
  line-height: 89rpx;
  font-size:34rpx;
  color:#ffffff;
  background-color: #e64340;
}
.buy-num-box .num-box .hui{
  background-color: #f5f5f9;
}
</style>
