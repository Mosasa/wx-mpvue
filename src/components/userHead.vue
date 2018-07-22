<template>
  <div class="container">
    <div class="info">
      <div class="info-wrap">
        <img class="info-icon" :src="userInfo.avatarUrl" @click="navigateTo" data-url-type="userinfo" open-type="getUserInfo" />
        <div class="info-name">{{userInfo.nickName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // userInfo: {},
      // hasUserInfo: false
    }
  },
  props:{
    userInfo: {
      type: Object
    },
    hasUserInfo: Boolean,
    canIUse: wx.canIUse('img.open-tyoe.getUserInfo')
  },
  navigateTo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.userInfo = e.detail.userInfo;
    e.stopPropagation();
  }
}
</script>

<style>
.info{
  width: 100%;
  height: 421.85rpx;
  margin-bottom: 23.44rpx;
  background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4178760997,915846559&fm=27&gp=0.jpg");
  background-size: 100%;
  margin-top: -397rpx;
}
.info-wrap{
  margin: auto;
  text-align: center;
}
.info-icon{
  width: 164rpx;
  height: 164rpx;
  border: 4.69rpx solid #fff;
  border-radius: 82rpx;
  margin-top: 105rpx;
  margin-bottom: 29.29rpx;
}

</style>
