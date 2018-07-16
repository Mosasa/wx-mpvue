<template>
  <div class="container">
    <div class="footer-box">
      <div class="shop-cart-btn" @click="goShopCar">
        <div class="shop-num">{{shopNum}}</div>
        购物车
      </div>
      <div class="join-shop-cart" @click="addBtn">加入购物车</div>
      <div class="now-buy" @click="tobuy">立即购买</div>
    </div>
    <div class="show-popup" :hidden="hideShopPopup" >
        <div class="popup-mask" @click="closePopupTap"></div>
        <div class="popup-contents">
             <div class="pop-goods-info">
                <div class="pop-img-box">
                    <image :src="goodsLabel.pic" class="goods-thumbnail"/>
                </div>
                <div class="pop-goods-des">
                    <div class="pop-goods-title">{{goodsLabel.name}}</div>
                    <div class="pop-goods-price">¥ {{selectSizePrice}}</div>
                </div>
                <div class="pop-goods-close" @click="closePopupTap"></div>
             </div>
             <div class="size-label-box">
                <div v-for="(property, x) in goodsLabel" :key="x" v-if="property.name">
                <div class="label">{{property.name}}</div> 
                <div class="label-item-box">
                    <div class="label-item" :class="p.active ? 'active' : '' " v-for="(p, i) in property" @click="labelItemTap" :key="i" :data-propertyindex="idx" :data-propertyid="index" :data-propertyname="property.name" :data-propertychildindex="index" :data-propertychildid="p.id" :data-propertychildname="p.name">
                        {{p.name}}
                    </div> 
                </div>
                </div>
             </div> 
             <div class="buy-num-box">
                <div class="num-label">购买数量</div>
                <div class="num-box">
                    <div class="num-decrease" :class="buyNumber == buyNumMin ? 'hui': ''" @click="numdecreaseTap">-</div>
                    <div class="num-input">
                       <input  type="number" :value="buyNumber" disabled/>
                    </div>
                    <div class="num-increase" :class="buyNumber== buyNumMax ? 'hui': ''" @click="numincreaseTap">+</div>
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
      buyNumber: 0, //单个购买数量
      hasMoreSelect: false,//是否有多种规格可选
      selectSize:'选择:',//选择规格
      //selectSizePrice: 0,单个选择商品价格
      selectSize: '选择: ',//选择规格
      canSubmit: false,//是否能添加到购物车,
      isBuy: false
    }
  },
  props:{
    goodsLabel: {
      type: Object,
    },
    selectSizePrice: {
      type: Number,
    },
    buyNumMax: {
      type: Number,
    },
    buyNumMin: {
      type: Number,
    },
    propertyChildIds: {
      type: Number,
    },
    propertyChildNames: {
      type: String
    },
    hideShopPopup: {
      type: Boolean,
      default() {
        return true
      }
    },
    shopCarInfo: {
      type:Object
    },
    saveShopCar: {
      type: Object
    }
  },
  methods: {
    addBtn(){
      this.hideShopPopup = false;
    },
    closePopupTap(){
      this.hideShopPopup = true;
    },
    numincreaseTap(){
    let buyNumber = this.buyNumber
    if (buyNumber < this.buyNumMax){
       buyNumber++
    }
    // console.log(buyNumber)
    this.buyNumber = buyNumber
    },
    numdecreaseTap() {
      let buyNumber = this.buyNumber
      if (buyNumber > this.buyNumMin) {
      buyNumber--
    }
      this.buyNumber = buyNumber
  },
  labelItemTap(e){
    console.log(e);
    let propertyindex = e.currentTarget.dataset.propertyindex;
    let propertiesArr = this.goodsLabel.property;
    let curProperty = propertiesArr[propertyindex];
    let curProperty_childs = curProperty.childsCurGoods;
    for(let i = 0; i < curProperty_childs.length; i++){
      curProperty_childs[i].active = false;
    }
    curProperty_childs[e.currentTarget.dataset.propertyid].active = true;
    let needSelectNum = propertiesArr.length;
    let curSelectNum = 0;
    let propertyChildIds = '';
    let propertyChildNames = '';
    let canSubmit = false;
    for(let i = 0; i < propertiesArr.length; i++){
      canSelectNum++
      let properties_childs = propertiesArr[i].childsCurGoods;
      for(let j = 0; j < properties_childs.length; j++){
        if(properties_childs[j].active){
          properties_childs += propertiesArr[i].id + ':' +properties_childs[j].id + ',';
          propertyChildNames += propertiesArr[i].name + properties_childs[j].name + ''
        }
      }
    }
    if(needSelectNum == curSelectNum){
      canSubmit = true;
    }
    this.selectSizePrice = curProperty_childs[e.currentTarget.dataset.propertyid].price;
    this.buyNumMax = 1000;
    this.propertyChildIds = propertyChildIds;
    this.propertyChildNames = propertyChildNames;
    this.buyNumber = 1;
    this.goodsLabel = this.goodsLabel;
    this.canSubmit = canSubmit;
  },
  addShopCar(){
    let shopCarMap = {};
    const save = this.saveShopCar;
    shopCarMap.goodsId = save.id;
    shopCarMap.pic = save.pic;
    shopCarMap.name = save.name;
    shopCarMap.label = this.propertyChildNames;
    shopCarMap.propertyChildIds = this.propertyChildIds;
    shopCarMap.price = this.selectSizePrice;
    shopCarMap.left = '';
    shopCarMap.active = true;
    shopCarMap.number = this.buyNumber;
    shopCarMap.logisticsType = save.logisticsId;
    shopCarMap.logistics = save.logistics;
    this.closePopupTap();
    var shopCarInfo = this.shopCarInfo;
    if(!shopCarInfo.shopNum){
      shopCarInfo.shopNum = 0
    }
    if(!shopCarInfo.shoplist){
      shopCarInfo.shoplist = []
    }
    var hasSameGoodsindex = -1;
    for(var i = 0; i < shopCarInfo.shoplist.length; i++){
      var tamShopCarMap = shopCarInfo.shoplist[i];
      if(tamShopCarMap.goodsId === shopCarMap.goodsId && shopCarMap.propertyChildIds == tamShopCarMap.propertyChildIds){
        shopCarMap.number = shopCarMap.number + tamShopCarMap.number;
        hasSameGoodsindex = i;
        break;
      }
    }
    shopCarInfo.shopNum = shopCarInfo.shopNum + this.buyNumber;
    if(hasSameGoodsindex > -1){
      shopCarInfo.shoplist.splice(hasSameGoodsindex, 1, shopCarMap)
    } else {
      shopCarInfo.shoplist.push(shopCarMap);
    }
    this.shopCarInfo = shopCarInfo;
    this.shopNum = shopCarInfo.shopNum;
    // this.closePopupTap();
    wx.showToast({
      title: '加入购物车🛒成功！',
      icon: 'success',
      duration: 2000
    })
    wx.setStorage({
      key: 'shopCarInfo',
      data: shopCarInfo,
      success: function(res){
        //success
      }
    })
  },
  tobuy(){
    console.log(this.canSubmit);
    if(this.buyNumber < 1){
      wx.showModal({
        title: '提示',
        content: '暂时缺货哦',
        showCancel: false
      })
      return
    }
    let shopCarMap = {};
    const save = this.saveShopCar;
    shopCarMap.goodsId = save.id;
    shopCarMap.pic = save.pic;
    shopCarMap.name = save.name;
    shopCarMap.label = this.propertyChildNames;
    shopCarMap.propertyChildIds = this.propertyChildIds;
    shopCarMap.price = this.selectSizePrice;
    shopCarMap.left = '';
    shopCarMap.active = true;
    shopCarMap.number = this.buyNumber;
    shopCarMap.logisticsType = save.logisticsId;
    shopCarMap.logistics = save.logistics;

    wx.navigateTo({
      url: `订单页面路径?detail=${JSON.stringify(shopCarMap)}`
    })
  },
  goShopCar() {
    wx.getStorage({
      key: 'shopCarInfo',
      success: function(res) {
        console.log(res.data.shoplist)
      }
    })
    wx.reLaunch({
      url: '../order/main'
    })
  }
  },
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
   margin-right:40rpx;
   align-items: center;
}
.num-label{
  font-size:26rpx;
  color:#000000;
}
.buy-num-box .num-box{
     display: flex;
}
.buy-num-box .num-box .num-decrease,
.buy-num-box .num-box .num-input,
.buy-num-box .num-box .num-increase{
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
