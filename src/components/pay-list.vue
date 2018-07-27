<template>
  <div class="container">
    <div class="goods-list">
        <div class="list-title">商品列表</div>
        <div class="a-goods" v-for="(item, index) in goodsList" :key="index">
            <div class="img-box">
                <image src="item.pic" class="img" />
            </div>
            <div class="text-box">
                <div class="arow arow01">
                    <div class="goods-name">item.name</div>
                    <div class="goods-price">¥ item.price</div>
                </div>
                <div class="arow">
                    <div class="goods-label">item.label</div>
                    <div class="goods-num">x item.number</div>
                </div>
            </div>
        </div>
     </div>
     <div class="peisong-way">
        <div class="row-box" v-if="isNeedLogistics > 0">
            <div class="row-label">配送方式</div>
            <div class="right-text" v-if="yunPrice > 0">快递</div>
            <div class="right-text" v-if="yunPrice == 0">包邮</div>
        </div>
        <div class="row-box">
            <div class="row-label">备注</div>
            <div class="right-text">
                <input name="remark" type="text" class="liuyan" placeholder="如需备注请输入" />
            </div>
        </div>
     </div>
     <div class="goods-info">
        <div class="row-box" v-if="isNeedLogistics > 0 && yunPrice > 0">
            <div class="row-label">商品金额</div>
            <div class="right-text">¥ allGoodsPrice</div>
        </div>
        <div class="row-box" v-if="isNeedLogistics > 0 && yunPrice > 0">
            <div class="row-label">运费</div>
            <div class="right-text">+ ¥ yunPrice</div>
        </div>
        <div class="row-box">
            <div class="row-label">应付总额</div>
            <div class="right-text">¥ allGoodsAndYunPrice</div>
        </div>
     </div>
     <div class="jiesuan-box">
        <div class="left-price">
            <div class="total">合计：¥ allGoodsAndYunPrice</div>
        </div>
        <button class="to-pay-btn" formType="submit" @click="createOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsList:Array,
    isNeedLogistics: {
      type: Number,
      default: 1
    },
    curAddressData:Boolean,
    yunPrice: Number,
    allGoodsAndYunPrice:{
      type: Number,
      default: 0
    }
  },
  methods: {
    createOrder(e) {
      let that = this
      var app = getApp();
      console.log(app.globalData.user)
      let loginToken = app.globalData.token
      //console.log(loginToken)
      let remark = e.detail.value.remark
      let pastData = {
      token: loginToken,
      goodsJsonStr: that.data.goodsJsonStr,
      remark: remark,
      uid: app.globalData.user._id,
      goodsIdList: that.data.goodsIdList,
      amount: that.data.allGoodsAndYunPrice,
      goodsImg: that.data.goodsImg
    }
    if (that.isNeedLogistics > 0){
      if (!that.curAddressData){
        wx.showModal({
          title: '错误',
          content: '请选择您的收货地址',
          showCancel: false
        })
        return
      }
    }
    pastData.provinceId = that.curAddressData.provinceId
    pastData.cityId = that.curAddressData.cityId
    if (that.curAddressData.districtId) {
      pastData.districtId = that.curAddressData.districtId;
    }
    pastData.address = that.curAddressData.address
    pastData.code = that.curAddressData.code
    pastData.linkMan = that.curAddressData.linkMan
    pastData.mobile = that.curAddressData.mobile

    console.log(pastData)

    wx.request({
      url: 'http://localhost:3030/order/create',
      method: 'POST',
      data: pastData,
      success:function(res){
         //清除购物车
         wx.getStorage({
           key: 'shopCarInfo',
           success: function(res) {
             let newShopCar = {}
             let newList = []
             let list = res.data.shoplist
             let num = 0
            for (let i = 0; i < list.length;i++){
              if (!list[i].active){
                newList.push(list[i])
                num++
              }
            }
            newShopCar.shoplist = newList
            newShopCar.shopNum = num
            wx.setStorage({
              key: 'shopCarInfo',
              data:newShopCar
            })
            // console.log(newShopCar)
           },
         })
         wx.redirectTo({
           url: "/pages/order-list/index"
         })
      }
    })
    }
  }
}
</script>

<style>
.goods-list{
    width:100%;
    background-color: #fff;
    margin-bottom: 20rpx;
}
.goods-list .list-title{
    font-size: 28rpx;
    color: #000;
    padding: 30rpx 0 25rpx 30rpx;
}
.goods-list  .a-goods{
    width: 720rpx;
    margin-left: 30rpx;
    display: flex;
    /*justify-content: space-between;*/
    border-top: 1px solid #eee;
    padding: 30rpx 30rpx 30rpx 0;
}
.goods-list  .a-goods .img-box{
    width: 160rpx;
    height:160rpx;
    overflow: hidden;
    margin-right: 20rpx;
    background-color: #d8d8d8;
}

.goods-list .img-box .img{
    width: 160rpx;
    height:160rpx;
}
.goods-list  .a-goods .text-box{
    width: 510rpx;
    box-sizing: border-box;
    padding-top: 10rpx;
}
.a-goods .text-box .arow{
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
.a-goods .text-box .arow .goods-name{
     width: 360rpx;
     font-size:26rpx;
     height: 74rpx;
     color:#000000;
     line-height: 1.6;
     overflow: hidden;
 }
.a-goods .text-box .arow01{
    margin-bottom: 30rpx;
}
.a-goods .text-box .arow .goods-price{
    font-size:26rpx;
    color:#000000;
    align-self: flex-start;
}
.a-goods .text-box .arow .goods-label{
    font-size: 26rpx;
    color: #999;
}
.a-goods .text-box .arow .goods-num{
    font-size: 26rpx;
    color: #999;
}
.peisong-way{
    width: 100%;
    background-color: #fff;
    margin-bottom: 20rpx;
}
.peisong-way .row-box{
    width: 720rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 24rpx 0 24rpx 30rpx;
    border-bottom: 1rpx solid #eee;
}
.peisong-way .row-label{
    font-size: 28rpx;
    color: #000;
}
.peisong-way .right-text{
    font-size: 28rpx;
    color: #666;
    padding-right: 30rpx;
}
.peisong-way .liuyan{
    width: 510rpx;
    font-size: 28rpx;
}
.goods-info{
    width: 100%;
    background-color: #fff;
    margin-bottom: 120rpx;
    padding-bottom: 24rpx;
}
.goods-info .row-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 24rpx 30rpx 12rpx 30rpx;
    font-size: 28rpx;
    color: #000;
}
.goods-info .row-box .right-text{
    text-align: right;
}
.jiesuan-box{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top:1px solid #eee; 
    background-color: #fff;
}
.jiesuan-box .to-pay-btn{
    width:250rpx;
    text-align: center;
    height: 100%;
    line-height: 100rpx;
    background-color: #e64340;
    font-size:32rpx;
    color:#ffffff;
    border-radius: 0;
}

.jiesuan-box  .left-price{
    display: flex;
    width: 500rpx;
    justify-content:flex-end;
    line-height: 100rpx;
    padding: 0 30rpx 0 0;
    font-size:28rpx;
    box-sizing: border-box;
}

.jiesuan-box .total{
    color: #e64340;
    text-align: right;
}
</style>
