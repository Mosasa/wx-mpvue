<template>
  <scroll-view class="goods-scroll" scroll-x="true">
    <div class="goods-container">
      <div class="goods-box" v-for="item in goods" :key="item" :data-id="item.id" @click="tabDetails">
        <div class="image-box">
          <image :src="item.pic"/>
        </div>
        <div class="goods-content">
          <span class="goods-title">{{item.name}}</span>
          <span class="goods-price">¥{{item.minPrice}}</span>
        </div>
        
      </div>
    </div>
  </scroll-view>
</template>
<script>
export default {
  data(){

  },
  props: {
    goods: {
      type: Array,
      default() {
        return [
          {
            minPrice: 0
          }
        ]
      }
    }
  },
  mounted: function(options){
    this.getGoodsList();
  },
  methods: {
    getGoodsList(categoryId){
      console.log(categoryId);
      wx.request({
        url:'http://localhost:3030/shop/goods/list',
        data:{
          categoryId: categoryId
        },
        method:'POST',
        success: res => {
          console.log(res);
          this.goods = res.data.data;
        }
      })
    },
    tabDetails(e){
      wx.navigateTo({
        url: '../pages/goods-details/index?id='+e.currentTarget.dataset.id
      })
    }
  }
}
</script>
<style>
.goods-container{
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: content-box;
  background: 	#F5F5F5;
}
.goods-container::-webkit-scrollbar {display:none}
.goods-box{
  width:210rpx;
  height:350rpx;
  background:#fff;
  z-index: 1000;
  padding-bottom: 20rpx;
  margin: 0 4rpx 20rpx 12rpx;
  
  /* border-bottom: 1rpx solid #dcdcdc; */
  /* border-width: 14rpx; */
}
.goods-box .image-box{
  width:210rpx;
  height:240rpx;
  overflow: hidden;
  box-sizing:border-box;
}
.goods-content{
  width: 210rpx;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
}
/* .goods-content:hover 
{ 
text-overflow:inherit; 
overflow:visible; 
} */
.image-box image{
  width:100%;
  height:260rpx;
}
.goods-box .goods-content .goods-title{
  width: 100rpx;
  font-size:20rpx;
  padding:24rpx 0 0 24rpx;
  color:#000;
}
.goods-box .goods-price{
  display: block;
  padding:12rpx 0 16rpx 16rpx;
  color:#ff3366;
  font-size:24rpx;
}
</style>
