<template>
  <div class="container">
    <div class="shopBox">
      <div class="list-top">
        <div class="label">购物车</div>
        <div class="edit-btn" @click="editTap" :hidden="!goodsList.saveHidden"></div>
        <div class="edit-btn" @click="saveTap" :hidden="goodsList.saveHidden">完成</div>
      </div>
      <div class="goodsList">
        <div class="a-goods" v-for="(list,index) in goodsList" :key="index">
          <div class="a-goods-conts" :class="list.active ? 'active': ''" @click="selectTap" @touchstart="touchS" @touchmove="touchM" @touchend="touchE" :data-index="index" :style="{marginLeft:list.left}">
            <div class="goods-info">
              <div class="img-box">
                <img :src="list.pic" alt="" class="img">
              </div>
              <div class="text-box">
                <div class="goods-title">{{list.name}}</div>
                <div class="goods-label">{{list.label}}</div>
                <div class="goods-price">¥ {{list.price}}</div>
                <div class="buy-num">
                  <div class="decrease-btn" :class="list.number==1?'disabled':''" @onClick="decreaseBtnTap" :data-index="index">-</div>
                  <input type="number" :value="list.number" disabled />
                  <div class="increase-btn" :class="list.number==10?'disabled':''" @onClick="increaseBtnTap" :data-index="index">+</div>
                </div>
              </div>
            </div>
            <div class="delete-btn" :data-index="index" @onClick="delItem">删除</div>
          </div>
        </div>
      </div>
      <div class="jiesuan-box">
        <div class="left-price">
          <div class="all-selected" :class="goodsList.allSelect?'active':''" @click="bindAllSelect">全选</div>
          <div class="total" :hidden="noSelect">合计：¥{{goodsList.totalPrice}}</div>
        </div>
        <div class="to-pay-btn" @click="toPayOrder" :hidden="!goodsList.saveHidden">去结算</div>
        <div class="to-pay-btn" :class="noSelect?'no-select':''" :hidden="goodsList.saveHidden" @click="deleteSelectd">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  props:{
    goodsList: {
      type: Object
    }
  },
  onShow: () => {
      this.initEleWidth();
      this.cartShow();
      this.list[index].pic
  },
  methods: {
    //获取元素自适应后的实际宽度
    getEleWidth: function (w) {
      var real = 0;
      try {
        var res = wx.getSystemInfoSync().windowWidth;
        var scale = (750 / 2) / (w / 2);  //以宽度750px设计稿做宽度的自适应
        // console.log(scale);
        real = Math.floor(res / scale);
        return real;
      } catch (e) {
        return false;
       // Do something when catch error
       }
    },
    initEleWidth: function () {
      var delBtnWidth = this.getEleWidth(this.delBtnWidth);
      this.delBtnWidth =  delBtnWidth
    },
    cartShow:function() {
      var shoplist = [];
      // 获取购物车数据
      var shopCarInfoMem = wx.getStorageSync('shopCarInfo')
      if (shopCarInfoMem && shopCarInfoMem.shoplist) {
        shoplist = shopCarInfoMem.shoplist
      }
      // this.totalPrice()
      this.goodsList.list = shoplist;
      this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), shoplist);
    },
    getSaveHide: function () {
      var saveHidden = this.goodsList.saveHidden;
      return saveHidden;
    },
    allSelect:function() {
      var list = this.goodsList.list;
      var allSelect = false
      for (var i = 0; i < list.length; i++) {
        var curItem = list[i]
        if (curItem.active) {
          allSelect = true
        } else{
          allSelect = false
          break 
        }
      }
      return allSelect
    },
    noSelect: function(){
      var list = this.goodsList.list;
      var noSelect = false
      for (var i = 0; i < list.length; i++) {
        var curItem = list[i]
        if (curItem.active) {
          noSelect = false
          break
        } else {
          noSelect = false
        }
      }
      return noSelect
      /*return list.forEach((item) => {
        if (item.active) {
          return false
        } else {
          return true
        }
      })*/
    },
    totalPrice: function () {
      var list = this.goodsList.list;
      var total = 0;
      for (var i = 0; i < list.length; i++) {
        var curItem = list[i];
        if (curItem.active) {
          total += parseFloat(curItem.price) * curItem.number;
        }
      }
      return total
    },
    toPayOrder(total) {
      this.goodsList.totalPrice = total
    },
    selectTap(e) {
      var index = e.currentTarget.dataset.index
      var list = this.goodsList.list
      if (index!=='' && index!==null){
        list[parseInt(index)].active = !list[parseInt(index)].active
        this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list)
      }
    },
    bindAllSelect() {
      var list = this.goodsList.list;
      var currentAllSelect = this.goodsList.allSelect
      if (currentAllSelect) {
        list.forEach((item) => {
          item.active = false
        })
      } else {
        list.forEach((item) => {
          item.active = true
        })
      }
      this.setGoodsList(this.getSaveHide(), this.totalPrice(), !currentAllSelect, this.noSelect(), list);
    },
    saveHidden:function() {
      return this.goodsList.saveHidden
    },
    setGoodsList: function (saveHidden, total,  allSelect, noSelect, list) {
      this.goodsList = {
        saveHidden: saveHidden,
        totalPrice: total,
        allSelect: allSelect,
        noSelect: noSelect,
        list: list
      }
      var shopCarInfo = {};
      var tempNumber = 0;
      shopCarInfo.shoplist = list;

      for (var i = 0; i < list.length; i++) {
        tempNumber = tempNumber + list[i].number
      }
      shopCarInfo.shopNum = tempNumber;
      wx.setStorage({
        key: "shopCarInfo",
        data: shopCarInfo
      })
    },
    increaseBtnTap(e){
      var index = parseInt(e.currentTarget.dataset.index)
      var list = this.goodsList.list
      if (index !== null && index !== '')
        if (list[index].number<10) {
        list[index].number++
        this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
      }
    },
    decreaseBtnTap(e) {
      var index = parseInt(e.currentTarget.dataset.index)
      var list = this.oodsList.list
      if (index !== null && index !== '')
        if (list[index].number > 1) {
          list[index].number--
          this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
        }
    },
    touchS(e) {
      if (e.touches.length == 1){ 
        this.startX = e.touches[0].clientX
      }
    },
    touchM(e) {
      var index = parseInt(e.currentTarget.dataset.index)
      var left = ''
      if(e.touches.length == 1){
        var moveX = e.touches[0].clientX
        var disX = this.startX - moveX
        var btnWidth = 120
        if (disX <= 0){
          left = 0
        } else if (disX>0 ){
          left = `-${disX}rpx`
          if (disX>=btnWidth){
            left = `-${btnWidth}rpx`
          }
        }
        var list = this.goodsList.list
        if (index !== '' && index!==null){
          list[index].left = "left"
          this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
        }
      }
    },
    touchE(e) {
      var left = ''
      var index = parseInt(e.currentTarget.dataset.index)
      if (e.changedTouches.length == 1){
        var endX = e.changedTouches[0].clientX
        var disX = this.startX - endX
        var btnWidth = 120
        disX >= btnWidth/2 ? left = `-${btnWidth}rpx` : left = 0
      }
      var list = this.goodsList.list
      if (index !== '' && index !== null) {
        list[index].left = left
        this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list);
      }
    },
    delItem(e) {
      var index = e.currentTarget.dataset.index
      var list = this.goodsList.list
      list.splice(index,1)
      this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list); 
    },
    editTap(){
      var list = this.goodsList.list
      list.forEach((item)=>{
        item.active = false
      })
      this.setGoodsList(!this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list); 
    },
    saveTap(){
      var list = this.goodsList.list
      list.forEach((item) => {
        item.active = true
      })
      this.setGoodsList(!this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), list); 
    },
    deleteSelected(){
      var list = this.goodsList.list
      var newList = []
      list.forEach((item) => {
        if (!item.active) {
          newList.push(item)
        }
      })
      this.setGoodsList(this.getSaveHide(), this.totalPrice(), this.allSelect(), this.noSelect(), newList); 
    },
    toPayOrder(){
      wx.showLoading()
      if (this.goodsList.noSelect){
        return
      }
      let shopList = []
      let DoneNUmber = 0
      let shopListMap = wx.getStorageSync('shopCarInfo')
      if (shopListMap && shopListMap.shoplist){
        shopList = shopListMap.shoplist
      }
      if (shopList.length==0){
        return
      }
      let isFail = false
      let needDoneNUmber = 0
      for (var i = 0; i < shopList.length;i++){
        console.log(isFail)
        if (isFail){
          wx.hideLoading()
          console.log(333)
          return
        }
        if(!shopList[i].active){
          continue
        }
        if (shopList[i].active) {
          needDoneNUmber++
        }
        let carShopBean = shopList[i]
      }
      this.navToPayOrder();
    },
    navToPayOrder() {
      wx.hideLoading()
      wx.navigateTo({
        url: "../to-pay-order/main"
      })
    },
    toIndexPage () {
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
  margin-top: -206rpx;
}
.list-top{
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    box-sizing: border-box;
    display: flex;
    justify-content:space-between;
    padding: 0 30rpx;
    font-size: 28rpx;
    align-items: center;
    background: #dd3366;
}
.list-top .label{
    color: #000;
}
.list-top .edit-btn{
    color: #999;
    height: 100%;
}
.goodsList{
    width: 100%;
    background-color: #fff;
    margin-left:118rpx;
    /* padding-bottom: 100rpx; */
}
.a-gooods{
    width: 100%;
    overflow: hidden;
}
.a-goods-conts{
    display: flex;
    justify-content:space-between;
    padding-left: 30rpx;
    width: 870rpx;
    box-sizing: border-box;
    transition: margin-left 0.2s ease-in-out;
    background: url(https://cdn.it120.cc/images/weappshop/gou.png) no-repeat 30rpx center;
    background-size: 40rpx auto; 
}
.a-goods-conts.active{
    background: url(https://cdn.it120.cc/images/weappshop/gou-red.png) no-repeat 30rpx center;
    background-size: 40rpx auto; 
}
.goods-info{
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content:space-between;
    padding: 30rpx 0 30rpx 70rpx; 
    width: 720rpx;
    box-sizing: border-box;
}
.goods-info .img-box{
    width: 160rpx;
    height:160rpx;
    overflow: hidden;
    margin-right: 20rpx;
    background-color: #d8d8d8;
}
.goods-info .text-box{
    width: 440rpx;
    position: relative;
}
.goods-info .text-box .goods-title{
    font-size: 28rpx;
    color:#000;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 10rpx 20rpx 5rpx 0;
}
.goods-info .text-box .goods-label{
    font-size: 26rpx;
    color:#999;
    height: 38rpx;
    line-height: 38rpx;
    margin: 8rpx 0 25rpx 0;
}
.goods-info .text-box .goods-price{
    font-size: 26rpx;
    color:#e64340;
}
.goods-info .text-box .buy-num{
    width: 164rpx;
    height: 48rpx;
    line-height: 48rpx;
    position: absolute;
    right: 30rpx;
    bottom: 0;
    display: flex;
    /*justify-content: space-between;*/
    font-size: 24rpx;
    text-align: center
}
.goods-info .text-box .buy-num .decrease-btn{
    width: 48rpx;
    height: 100%;
    border-left: 1rpx solid #ccc;
    border-bottom: 1rpx solid #ccc;
    border-top: 1rpx solid #ccc;
    border-bottom-left-radius: 6rpx;
    border-top-left-radius: 6rpx;
}
.goods-info .text-box .buy-num .decrease-btn.disabled{
    background-color: #f5f5f9;
    border-left: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    color: #ccc;
}
.goods-info .text-box .buy-num .increase-btn{
    width: 48rpx;
    height: 100%;
    border-right: 1rpx solid #ccc;
    border-bottom: 1rpx solid #ccc;
    border-top: 1rpx solid #ccc;
    border-bottom-right-radius: 6rpx;
    border-top-right-radius: 6rpx;
}
.goods-info .text-box .buy-num .increase-btn.disabled{
    background-color: #f5f5f9;
    border-right: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    color: #ccc;
}
.goods-info .text-box .buy-num input{
    width: 68rpx;
    height: 48rpx;
    min-height: 48rpx;
    text-align: center;
    font-size: 24rpx;
    border: 1rpx solid #ccc;
}

.goods-info .img-box .img{
    width: 160rpx;
    height:160rpx;
}
.a-goods-conts .delete-btn{
    width: 120rpx;
    line-height: 220rpx;
    text-align: center;
    background:#e64340;
    font-size: 24rpx;
    color: #fff;
}
.jiesuan-box{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    border-bottom:1px solid #eee; 
    border-top:1px solid #eee; 
    background-color: #fff;
}
.jiesuan-box .to-pay-btn{
    width:240rpx;
    text-align: center;
    line-height: 100rpx;
    background-color: #e64340;
    font-size:32rpx;
    color:#ffffff;
}
.jiesuan-box .to-pay-btn.no-select{
    background-color: #ccc;
}

.jiesuan-box  .left-price{
    display: flex;
    width: 510rpx;
    justify-content: space-between;
    line-height: 100rpx;
    padding: 0 30rpx 0 0;
    font-size:28rpx;
    box-sizing: border-box;
}
.jiesuan-box .all-selected{
    padding-left: 90rpx;
    color:#000000;
    background: url(https://cdn.it120.cc/images/weappshop/gou.png) no-repeat 30rpx center;
    background-size: 40rpx auto; 
}
.jiesuan-box .all-selected.active{
    background: url(https://cdn.it120.cc/images/weappshop/gou-red.png) no-repeat 30rpx center;
    background-size: 40rpx auto; 
}
.jiesuan-box .total{
    color: #e64340;
}
</style>

