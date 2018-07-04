<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="swiperList">
      <swiper :text="motto"></swiper>
    </div>
    <div class="navTab">
      <div class="recTab">
        <text>  ——  为你推荐  ——</text>
    </div>
    </div>
    <scroll></scroll>
    <div class="hot">
      <span> —— 热门商品 ——</span>
    </div>
    <hot :v-text="motto"></hot>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form> -->
    <div class="fixed-img">
      <img :src="fixImg" alt="" class="fix-img">
    </div>
  </div>
</template>

<script>
import swiper from '../../components/swiper'
import card from '@/components/card'
import scroll from '@/components/hotRecommend'
import hot from '../../components/hotList'


export default {
  data () {
    return {
      motto: 'Hello World',
      fixImg:'/static/images/shoppingCar.png',
      userInfo: {}
    }
  },
  components: {
    card,
    'swiper':swiper,
    'scroll':scroll,
    'hot':hot
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style>
.container{
  overflow-y: scroll;
  overflow-x:hidden;
}
.container::-webkit-scrollbar {display:none}
.swiperList{
  width: 100%;
  height: 380rpx;
  /* background: #888; */
  position: absolute;
  top: 0;
}
.navTab{
  width: 100%;
  height: 200rpx;
  background: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=330815385,1416866006&fm=27&gp=0.jpg');
  background-size: 100%,180rpx;
  margin-top: 180rpx;
}
.navTab .recTab{
  width: 80%;
  height: 140rpx;
  background: #fff;
  margin:18rpx auto;
  text-align: center;
  line-height: 160rpx;
  font-size: 50rpx;
  font-style:italic;
  border: 1rpx solid #dcdcdc;
  border-width: 10rpx;
  /* border-radius: 50rpx; */
}
scroll{
  overflow: scroll;
}
.hot{
  width: 100%;
  margin-top: 60rpx;
  padding-bottom: 40rpx;
  border-bottom: 1rpx solid #dcdcdc;
  text-align: center;
}
.fixed-img .fix-img{
  width: 80rpx;
  height: 80rpx;
  z-index: 2000;
  position: fixed;
  bottom: 180rpx;
  right: 40rpx;
}
.hot span{
  font-size: 16rpx;
  
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
