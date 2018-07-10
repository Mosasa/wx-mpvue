<template>
<div :style="styleObject">
    <swiper class="swiperList" :autoplay="true" :circular="true" :indicator-dots="true" indicator-color="rgba(228,228,228,1)" indicator-active-color="#ff3366" :style="styleObject">
        <swiper-item v-for="(items,i) in swiperList" :key="i">
            <div v-for="(item,index) in items" class="swiper-info" :key="index" @click="choose" >
                <image :src="item.url"  class="swiper-image" :style="styleObject"/>
            </div>
        </swiper-item>
   </swiper>
</div>
    
</template>
<script>
export default {
    data() {
        return {
            styleObject:{
                height:'100%',
                width:'100%'
            }
        }
    },
    props:['swiperList','url','styleObject'],
   methods: {
        choose() {
         wx.showToast({
            title: '待完善',
            icon: 'success',
            duration: 2000
            })
        }
   },
   mounted(){
       console.log(this.styleObject)
   }
}
</script>

<style>
.swiperList{
    width: 100%;
    height: 350rpx;
}
.swiper-image{
  width: 100%;
  height: 350rpx;
}
</style>
