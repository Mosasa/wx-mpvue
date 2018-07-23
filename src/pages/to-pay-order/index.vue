<template>
  <div class="container">
    <add-address></add-address>
  </div>
</template>

<script>
import addAddress from '../../components/addAddress'
export default {
  data() {
    return {
      isNeedLogistics: 1,
      curAddressData:false,
    }
  },
  components: {
    'add-address': addAddress
  },
 onLoad: function(options) {
   wx.getStorage({
      key: 'shopCarInfo',
      success: (res) =>{
        // success
        console.log(`initshopCarInfo:${res.data}`)
        this.shopCarInfo = res.data;
        this.shopNum = res.data.shopNum
      }
    })
    let that = this;
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
        // that.processYunfei();
      }
    })
 } ,
 onShow: function(options){
   console.log(options)
    // this.initShippingAddress();
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
