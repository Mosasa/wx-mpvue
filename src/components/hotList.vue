<template>
  <div class="container-list">
    <div class="container-item" v-for="item in goods" :key="item" :data-id="item.id" @click="tabDetails">
      <div class="row">
        <div class="col">
          <div class="col-4">
            <img :src="item.pic" class="col-img">
          </div>
          <div class="col-7">
            <div class="goods-title">{{item.name}}</div>
            <div class="status">
              <span>库存0</span>
              <span>月销0</span>
              <span>赞0</span>
            </div>
            <div class="goods-price">¥{{item.minPrice}}</div>
          </div>
          <div class="col-1">
            <img :src="icon" alt="" class="icon-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      icon: '/static/images/addShopping.png'
    }
  },
  props: {
    goods: {
      type: Array,
      default (){
        return [
          {
            minPrice:0
          }
        ]
      }
    }
  },
  mounted: function(options){
    this.getGoodList();
  },
  methods: {
    getGoodList(categoryId){
      console.log(categoryId);
      wx.request({
        url: 'http://localhost:3030/shop/goods/list',
        data: {
          categoryId: categoryId
        },
        method: 'POST',
        success: res => {
          console.log(res);
          this.goods = res.data.data;
        }
      })
    },
    tabDetails(e){
      wx.navigateTo({
        url: '../goods-details/main?id='+e.currentTarget.dataset.id
      })
    }
  }
}
</script>
<style>
.col{
  display:flex;
  border-bottom: 1rpx solid #dcdcdc;
  padding: 14rpx 0 30rpx 0;
}
.col-4{
  width: 200rpx;
  height: 180rpx;
  float: left;
  flex:0;
}
.col-4 .col-img{
  width: 200rpx;
  height: 180rpx;
}
.col-7{
  flex:1;
}
.col-7 .goods-title{
  font-size: 34rpx;
}
.col-7 .status{
  width: 200rpx;
  font-size: 24rpx;
  padding: 16rpx 0 26rpx 0;
  display: flex;
  justify-content: space-between;
}
.col-7 .goods-price{
  font-size:36rpx;
  color:#ff3366;
}
.col-1{
  position: relative;
  right: 20rpx;
  top: 130rpx;
}
.col-1 .icon-img{
  width: 60rpx;
  height: 60rpx;
}
</style>
