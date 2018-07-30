<template>
  <div class="container">
    <div class="status-box">
        <div @click="statusTap" class="status-label index == currentType ? 'active' : ''" v-for="(item, index) in statusType" :key="index" :data-index="index">
            item
            <div class="tabClass[index]" v-if="index!=0"></div>
        </div>
    </div>
    <div class="no-order" hidden="orderList ? true : false">
        <img src="/images/no-order.png" class="no-order-img"/>
        <div class="text">暂无订单</div>
    </div>
    <div class="order-list" :hidden="orderList ? false : true">
        <div class="a-order" v-for="(item, index) in orderList" :key="index">
            <div class="order-date">
                <div class="date-box">下单时间：item.dateAdd</div>
                <div :class="status (item.status==-1 || item.status==4) ? '':'red'">item.statusStr</div>
            </div>
            <div class="goods-info" @click="orderDetail" :data-id="item.id">
                <div class="goods-des">
                   <div>订单号:item._id </div>
                   <div v-if="item.remark && item.remark != ''">备注： item.remark</div>
                </div>
            </div>
            <div >
                <scroll-div class="goods-img-container" scroll-x="true">
                    <div class="img-box" v-for=" (goodsImg, index) in item" :key="index">
                        <img src="item" class="goods-img" />
                    </div>
                </scroll-div>
            </div>
            <div class="price-box">
                <div class="total-price">合计：¥ item.amount</div>
                <div class="btn cancel-btn" :hidden="item.status==0? fslse : true" @click="cancelOrderTap"  :data-id="item._id">取消订单</div>
                <div class="btn topay-btn" :hidden="item.status==0? fslse : true" @click="toPayTap" :data-id="item._id" :data-money="item.amountReal">马上付款</div>        
            </div>  
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusType: ["全部", "待付款", "待发货", "待收货", "已完成"],
      currentType:0,
      tabClass:["","","","","",""]
    }
  },
  methods:{
    statusTap(e){
    let index = e.currentTarget.dataset.index
    this.
      currentType = index
    this.switchTap()
  },
  //支付
  toPayTap(e){
    // wx.showModal({
    //   title: '',
    //   content: '个人展示作品暂不支持支付功能',
    //   showCancel:false
    // })
    let orderId = e.currentTarget.dataset.id
    console.log(orderId);
    wx.request({
      url: 'http://localhost:3030/order/update',
      method: 'POST',
      data: {
        status: 1,
        id: orderId
      },
      success: (res) => {
        console.log(res)
        if (res.data.code === 0) {
          this.currentType= 2
          this.switchTap()
        }
      }
    })
  },
  getOrderStatistics(){
    let that = this
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.urlName + '/order/statistics',
      data:{
        token: app.globalData.token
      },
      success:(res)=>{
        let resData = res.data.data
        let tabClass = that.tabClass
        if (res.data.code){
          if (resData.count_id_no_pay>0){
            tabClass[1] = 'red-dot'
          }
          if (resData.count_id_no_transfer > 0) {
            tabClass[2] = 'red-dot'
          }
          if (resData.count_id_no_confirm > 0) {
            tabClass[3] = 'red-dot'
          }
          if (resData.count_id_success > 0) {
            tabClass[4] = 'red-dot'
          }
          that.tabClass = tabClass
        }
      }
    })
  },
  cancelOrderTap(e){
    let id = e.currentTarget.dataset.id
    console.log(id)
    let that =this
    wx.showModal({
      title: '确定要取消该订单吗？',
      content: '',
      success:(res)=>{
        if(res.confirm){
          wx.showLoading()
          wx.request({
            url: 'http://localhost:3030/order/update',
            data: {
              status: -1,
              id: id
            },
            method: 'POST',
            success:(res)=>{
              wx.hideLoading()
              if(res.data.code == 0){
                // that.onShow()
                this.setData({
                  currentType: 0
                })
                this.switchTap()
              }
            }
          })
        }
      }
    })
  },
  onLoad: function (e) {
    this.currentType = e.currentType
    this.switchTap()
  },
  switchTap () {
    console.log(this.data.currentType)
    let that = this
    wx.showLoading()
    let postData = {
      uid: app.globalData.user._id
    }
    if (this.currentType == 1){
      postData.status = 0
    }
    if (this.currentType == 2){
      postData.status = 1
    }
    if(this.currentType == 3){
      postData.status = 2
    }
    if (this.currentType == 4) {
      postData.status = 4
    }
    console.log(postData)
    this.getOrderStatistics()
    wx.request({
      // url: 'https://api.it120.cc/'+app.globalData.urlName +'/order/list',
      url: 'http://localhost:3030/order/list',
      method: 'POST',
      data: postData,
      success:(res)=>{
        wx.hideLoading()
        if(res.data.code==0){
          that.orderList = res.data.data
            // goodsMap: res.data.data.goodsMap,
            // logisticsMap: res.data.data.logisticsMap
        } else {
          that.orderList = null,
            that.logisticsMap = {},
            that.goodsMap = {}
        }
      }
    })
  }
  }
}
</script>

<style>
.container{
    width: 100%;
    background-color: #F2f2f2;
}
.status-box{
    width:100%;
    height: 88rpx;
    line-height: 88rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}
.status-box .status-label{
    width: 150rpx;
    height: 100%;
    text-align: center;
    font-size:28rpx;
    color:#353535;
    box-sizing: border-box;
    position: relative;
}
.status-box .status-label.active{
    color:#e64340;
    border-bottom: 6rpx solid #e64340;
}
.status-box .status-label .red-dot{
    width: 16rpx;
    height: 16rpx;
    position: absolute;
    left: 116rpx;
    top:23rpx;
    background-color: #f43530;
    border-radius: 50%;
}
.no-order{
    width: 100%;
    position: absolute;
    bottom: 0;
    top: 88rpx;
    left: 0;
    right: 0;
    text-align: center;
    padding-top: 203rpx;
    background-color: #F2f2f2;
}
.no-order-img{
    width: 81rpx;
    height: 96rpx;
    margin-bottom: 31rpx;
}
.no-order .text{
    font-size:28rpx;
    color:#999999;
    text-align: center
}
.order-list{
    width: 100%;
}
.order-list .a-order{
    width: 100%;
    background-color: #fff;
    margin-top: 20rpx;
}
.order-list .a-order .order-date{
    padding: 0 30rpx;
    height: 88rpx;
    display: flex;
    justify-content: space-between;
    font-size:26rpx;
    color:#000000;
    align-items: center;
}
.order-list .a-order .order-date .red{
    font-size:26rpx;
    color:#e64340;
}
.a-order  .goods-info,
.goods-img-container{
    width: 720rpx;
    margin-left: 30rpx;
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    padding: 30rpx 0;
    display: flex;
    align-items: center;
}
.goods-info .img-box{
    width: 120rpx;
    height: 120rpx;
    overflow: hidden;
    margin-right: 30rpx;
    background-color: #f7f7f7;
}
.goods-info .img-box .goods-img,
.goods-img-container .img-box .goods-img{
    width: 120rpx;
    height: 120rpx;
}
.goods-info  .goods-des{
    width: 540rpx;
    height: 78rpx;
    line-height: 39rpx;
    font-size:26rpx;
    color:#000000;
    overflow: hidden;
}
.goods-img-container{
    height: 180rpx;
    box-sizing: border-box;
    white-space: nowrap;
}
.goods-img-container .img-box{
    width: 120rpx;
    height: 120rpx;
    overflow: hidden;
    margin-right: 20rpx;
    background-color: #f7f7f7;
    display: inline-block;
}
.order-list .a-order .price-box{
    position: relative;
    width: 720rpx;
    height: 100rpx;
    margin-left: 30rpx;
    box-sizing: border-box;
    padding: 20rpx 30rpx 20rpx 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:26rpx;
}
.order-list .a-order .price-box .total-price{
    font-size:26rpx;
    color:#e64340;
}
.a-order .price-box .btn{
    width: 166rpx;
    height: 60rpx;
    box-sizing: border-box;
    text-align: center;
    line-height: 60rpx;
    border-radius: 6rpx;
    margin-left: 20rpx;
}
.a-order .price-box .cancel-btn{
    border: 1rpx solid #ccc;
    position: absolute;
    right: 216rpx;
    top:20rpx;
}
.a-order .price-box .topay-btn{
    border:1px solid #e64340;
    color: #e64340;
}
</style>
