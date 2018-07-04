<template class="container">
  <div class="container-list">
    <scroll-view class="type-scroll" scroll-y>  
      <div class="type-container">
        <div class="type-box" v-for="item in categories" :key="item">
          <div :id="item.id" class="type-navbar-item" :class="activeCategoryId==item.id?'type-item-on':''" @click="tabClick">{{item.name}}</div>
        </div>
      </div>
    </scroll-view>
    <scroll-view class="goods-scroll" scroll-y>
      <div class="goods-container">
        <div class="goods-box" v-for="item in goods" :key="item" :data-id="item.id" @click="tabDetails">
          <div class="image-box">
            <image :src="item.pic"/>
          </div>
          <span class="goods-title">{{item.name}}</span>
          <span class="goods-price">¥{{item.minPrice}}</span>
        </div>
      </div>
    </scroll-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      categories:[],
      activeCategoryId: 0
    }
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
    let category = [
      {id: 0, name: '全部'},
      {id: 1, name: 'JAVA'},
      {id: 2, name: 'C++'},
      {id: 3, name: 'PHP'},
      {id: 4, name: 'VUE'},
      {id: 5, name: 'CSS'},
      {id: 6, name: 'HTML'},
      {id: 7, name: 'JavaScript'}
    ]
    this.categories = category
    this.getGoodsList(0)
  },
  methods: {
    tabClick(e){
      this.activeCategoryId = e.currentTarget.id;
      this.getGoodsList(e.currentTarget.id);
    },
    getGoodsList(categoryId){
      console.log(categoryId);
      if(categoryId == 0){
        categoryId = ''
      }
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
        url: '../pages/goods-details/index?id='+e.currentTarget.dataset.id,
      })
    }
   },
 }
</script>
<style scoped>
.container{
  min-height: 100%;
  background:#f2f2f2;
}
.container-list{
  display: flex;
  height: 100%;
  /* background: #000; */
}
.type-scroll{
  height:100%;
  flex: 0 0 80px;
}
.goods-scroll{
  height:100%;
  flex: 1
}
.type-container{
  width: 80px;
  height: 100%;
  background: #f2f2f2;
  margin-top: 2px;
}
.type-navbar{
  white-space:nowrap;
  display: flex;
  height:88rpx
}
.type-box{
  display: inline-block;
  width:160rpx;
  line-height: 84rpx;
  text-align:center;
  font-size:24rpx;
  background:#f2f2f2;
}
.type-navbar-item{
  border-bottom:4rpx solid #fff
}
.type-navbar-item{
  border-bottom:4rpx solid #fff
}

.type-item-on{
  border-left:4rpx solid #e64340;
  background: #fff;
}

.goods-container{
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
  box-sizing: content-box;
  padding:4rpx 10rpx 10rpx 0;
}
.goods-box{
  width:49%;
  overflow:hidden;
  margin-bottom:24rpx;
  background:#fff;
}
.goods-box .image-box{
  width:100%;
  overflow: hidden;
  padding:8rpx 8rpx 0rpx 8rpx;
  box-sizing:border-box;

}
.image-box image{
  width:100%;
  height:270rpx;
}
.goods-box .goods-title{
  width:256rpx;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow: hidden;
  font-size:24rpx;
  padding-top:18rpx;
  color:#000;
  margin:0 12rpx;
}
.goods-box .goods-price{
  width:280rpx;
  overflow:hidden;
  padding:18rpx 0;
  color:#ff3366;
  font-size:24rpx;
  margin-left:12rpx;
}
</style>

