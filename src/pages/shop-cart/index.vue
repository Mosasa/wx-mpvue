<template>
  <div class="container">
    <div v-if="goodsList.length<=0">
      <shop-car-no ></shop-car-no>
    </div>
    <div v-else>
      <shop-car-hav :goodsList="goodsList"></shop-car-hav>
    </div>
  </div>
</template>
<script>
import shopCarNo from '@/components/shopcarNo'
import shopCarHav from '@/components/shopCarHav'
export default {
  data(){
    return {
        saveHidden:false,
        totalPrice: 0,
        allSelect: false,
        noSelect: false,
        goodsList:[]
    }
  },
  components: {
    'shop-car-no':shopCarNo,
    'shop-car-hav':shopCarHav
  },
  onShow: function() {
    this.initEleWidth();
    this.cartShow();
    wx.getStorage({
      key: 'shopCarInfo',
      success: res => {
        // var index = 
        this.goodsList = res.data.shoplist;
        console.log(this.goodsList);
      }
    })
    // console.log(this.setGoodsList());
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
      this.goodsList = shoplist;
      this.setGoodsList(this.getSaveHide, this.totalPrice, this.allSelect, this.noSelect, shoplist);
    },
    getSaveHide: function () {
      var saveHidden = this.saveHidden;
      return saveHidden;
    },
    allSelect:function() {
      var list = this.goodsList;
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
      var list = this.goodsList;
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
      var list = this.goodsList;
      var total = 0;
      for (var i = 0; i < list.length; i++) {
        var curItem = list[i];
        if (curItem.active) {
          total += parseFloat(curItem.price) * curItem.number;
        }
      }
      return total;
    },
    saveGoodsList: function(saveHidden, total,   allSelect, noSelect, list){
        this.saveHidden = saveHidden,
        this.totalPrice = tatal,
        this.allSelect = allSelect,
        this.noSelect = noSelect,
        this.goodsList = list
      var shopCarInfo = {};
      var tempNumber = 0;
      shopCarInfo.shoplist = list;
      console.log(list);
      for(var i = 0; i < list.length; i++){
        tempNumber = tempNumber + list[i].number
      }
      shopCarInfo.shopNum = tempNumber;
      wx.setStorage({
        key: 'shopCarInfo',
        data: shopCarInfo,
    })
  },
  setGoodsList:(saveHidden, total,  allSelect, noSelect, list) => {
      this.saveHidden = saveHidden,
      this.totalPrice = total,
      this.allSelect = allSelect,
      this.noSelect = noSelect,
      this.goodsList = list
      var shopCarInfo = {};
      var tempNumber = 0;
      shopCarInfo.shoplist = list;
      console.log(list)
      for (var i = 0; i < list.length; i++) {
        tempNumber = tempNumber + list[i].number
      }
      shopCarInfo.shopNum = tempNumber;
      wx.setStorage({
        key: "shopCarInfo",
        data: shopCarInfo
      })
    },
  }
}
</script>
<style>
.container{
  width: 100%;
  height: 100%;
}
</style>


