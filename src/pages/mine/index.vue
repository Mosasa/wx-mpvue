<template>
  <div class="container">
    <user-head :userInfo="userInfo" :hasUserInfo="hasUserInfo" :canIUse="canIUse"></user-head>
    <div>
      <my-order></my-order>
    </div>
    <div>
      <order-cell></order-cell>
    </div>
    <div>
      <other-list></other-list>
    </div>
  </div>
</template>

<script>
import userHead from '@/components/userHead'
import myOrder from '@/components/myOrder'
import orderCell from '@/components/orderCell'
import otherList from '@/components/otherList'
export default {
  data() {
    return {
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('img.open-type.getUserInfo')
    }
  },
  components: {
    'user-head': userHead,
    'my-order': myOrder,
    'order-cell': orderCell,
    'other-list': otherList
  },
  onShow() {
    var app = getApp();
    if(app.globalData.userInfo) {
      this.userInfo = app.globalData.userInfo;
      this.hasUserInfo = true
    } else if (this.canIUse) {
      app.userInfoReadyCallback = res => {
        this.userInfo = res.userInfo;
        this.hasUserInfo = true
      }
    }else {
      wx.getUserInfo({
      success: res => {
          app.globalData.userInfo = res.userInfo
          this.userInfo = res.userInfo
            // hasUserInfo: true
        }
      })
    }
    // console.log(app.globalData.userInfo)
  }
}
</script>

<style>
.container{
  width: 100%;
  height: 100%;
}
</style>
