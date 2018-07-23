<template>
   <div class="container">
    <div class="list" v-for="item in list" :key="item" hover-class="none" :data-tip="tip" :data-url="url" @click="navigateTo">
    <div class="list-icon-wrap">
      <img :src="item.icon" class="list-icon" />
    </div>
    <div class="list-text">{{item.text}}</div>
    <div class="arrow-wrap">{{item.tip}}
      <img src="/static/images/accessory.png" class="list-arrow" />
    </div>
  </div>
  <div :hidden="!cut?true:false" style="heigth: 23.44rpx"></div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      list: [
      {
        icon: '/static/images/address.png',
        text: '地址管理',
        tip: '',
        cut: true,
        url: '../select-address/index'
      }, {
        icon: '/static/images/tel.png',
        text: '客服电话',
        tip: '1380043433',
      }, {
        icon: '/static/images/feedback.png',
        text: '意见反馈',
        tip: '',
        cut: true,
        url: '../feedback/feedback'
      }, {
        icon: '/static/images/about.png',
        text: '关于商城',
        tip: '',
        url: '../about/about'
      }
    ]
    }
  },
  methods: {
    navigateTo(e) {
    const url = e.currentTarget.dataset.url;
    if (e.currentTarget.dataset.urlType) {
      wx.navigateTo({
        url: 'user-info/user-info'
      });
    } else {
      if (url === undefined) {
        wx.makePhoneCall({
          phoneNumber: e.currentTarget.dataset.tip
        });
      } else {
        wx.navigateTo({
          url
        });
      }
    }
  }
  }
}
</script>
<style scoped>
.list {
  width: 750rpx;
  background: #f8f8f8;
  height: 120.77rpx;
  line-height: 120.77rpx;
  padding: 0 35.15rpx;
  border: 1px solid #e8e8e8;
  background: #fff;
  font-size: 32.81rpx;
  margin-top: -510rpx;	
  overflow: hidden;
}
.list-icon-wrap {
  float: left;
  height: 120.77rpx;
  line-height: 120.77rpx;
  padding-top:10rpx;
  padding-left:20rpx;
}
.list-icon {
  width: 42.18rpx;
  height: 40.84rpx;
  line-height: 40.84rpx;
  margin-top: 30rpx;
}

.arrow-wrap {
  float: right;
  color: #999;
  line-height: 100.77rpx;
  font-size: 23.44rpx;
  padding-right:30rpx;

}

.list-arrow {
  width: 11.72rpx;
  height: 40.72rpx;
  line-height: 40.72rpx;
  margin: 35rpx 0 0 18.75rpx;

}

.list-text {
  float: left;
  font-size: 32.81rpx;
  text-indent: 29.29rpx;
}
</style>


  