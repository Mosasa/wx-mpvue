<template>
  <div class="container">
    <div>
      <add-address></add-address>
    </div>
    <div>
      <pay-list></pay-list>
    </div>
  </div>
</template>

<script>
import addAddress from '../../components/addAddress'
import payList from '@/components/pay-list'
export default {
  data() {
    return {
      goodsList:[],
      isNeedLogistics: 1,
      curAddressData:false,
      yunPrice: 0,
      allGoodsAndYunPrice:0,
      curAddressData:false,
    }
  },
  components: {
    'add-address': addAddress,
    'pay-list': payList
  },
  onLoad: function (options) {
    let that = this
    if (options.detail) {
      console.log(options.detail)
        this.goodsList = [JSON.parse(options.detail)],
        this.goodsIdList = [JSON.parse(options.detail).goodsId],
        this.goodsImg = [JSON.parse(options.detail).pic]
    } else {
      wx.getStorage({
        key:'shopCarInfo',
        success: function(res){
          //console.log(res.data)
          let goodsList = res.data.shoplist
          let ActiveGoods = goodsList.filter(function(item){
            return item.active == true
          })
            this.goodsList = ActiveGoods,
            this.goodsIdList =  ActiveGoods.map(item => item.goodsId),
            this.goodsImg = ActiveGoods.map(item => item.pic)
        }
      })
    }
  },
 onShow: function(options){
    this.initShippingAddress();
  },
  getDistrictId(obj, id){
    if (!obj){
      return ''
    }
    if(!id){
      return ""
    }
    return id
  },
  methods:{
    initShippingAddress(options) {
    let that = this;
    // var app = getApp();
    console.log(options)
    wx.request({
      url: 'http://localhost:3030/user/shipping-address/list',
      method: 'POST',
      data: {
        uid: options._id
      },
      success: function(res) {
        if(res.data.code == 0) {
          let defaultAddresses = res.data.data.filter(item => item.isDefault);
          that.curAddressData = defaultAddresses ? defaultAddresses[0] : null
        }else {
          that.curAddressData = null
        }
        that.processYunfei();
      }
    })
  }
  }
}
</script>
<style>
.container{
  width: 100%;
  height: 100%;
}
</style>
