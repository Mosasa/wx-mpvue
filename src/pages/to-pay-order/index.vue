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
 onShow: function(){
    this.initShippingAddress();
    console.log('lalala')
  },
  methods:{
    initShippingAddress() {
    let that = this;
    console.log("xixixi")
    wx.request({
      url: 'http://localhost:3030/user/shipping-address/list',
      method: 'POST',
      data: {
        uid: app.globalData.user._id
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
