<template>
  <div class="container">
    <div v-if="goodsList.list.length<=0">
      <shop-car-no ></shop-car-no>
    </div>
    <div v-else>
      <shop-car-hav :goodsList="goodsList"></shop-car-hav>
    </div>
  </div>
</template>
<script>
import shopCarNo from '@/components/shopcarNo'
import shopCarHav from '@/components/shopCarHav'
export default {
  data(){
    return {
      goodsList:{
        saveHidden:true,
        totalPrice: 0,
        allSelect: true,
        noSelect: false,
        list: []
      },
    }
  },
  components: {
    'shop-car-no':shopCarNo,
    'shop-car-hav':shopCarHav
  },
  onShow: function() {
    wx.getStorage({
      key: 'shopCarInfo',
      success: res => {
        // console.log(res)
        this.goodsList.list = res.data.shoplist;
        console.log(this.goodsList.list[0].pic)
      }
    })
  },
  methods: {
   
  //   saveGoodsList: function(saveHidden, total,   allSelect, noSelect, list){
  //     this.goodsList =  {
  //       saveHidden: saveHidden,
  //       totalPrice: tatal,
  //       allSelect: allSelect,
  //       noSelect: noSelect,
  //       list: list
  //     };
  //     var shopCarInfo = {};
  //     var tempNumber = 0;
  //     shopCarInfo.shoplist = list;
  //     console.log(list);
  //     for(var i = 0; i < list.length; i++){
  //       tempNumber = tempNumber + list[i].number
  //     }
  //     shopCarInfo.shopNum = tempNumber;
  //     wx.setStorage({
  //       key: 'shopCarInfo',
  //       data: shopCarInfo,
  //   })
  // },
  }
}
</script>
<style>
.container{
  width: 100%;
  height: 100%;
}
</style>


