<template>
    <swiper class="swiperList" :autoplay="true" :circular="true" :indicator-dots="true" indicator-color="rgba(228,228,228,1)" indicator-active-color="#ff3366">
        <swiper-item v-for="(items,i) in swiperList" :key="i">
            <div v-for="(item,index) in items" class="swiper-info" :key="index" @click="choose">
                <image :src="item.url"  class="swiper-image"/>
            </div>
        </swiper-item>
  </swiper>
</template>
<script>
export default {
    data() {
        return {
              swiperList:{
                  item1:[{
                        url: "https://img.alicdn.com/imgextra/i4/2406931838/TB1vHncSFXXXXcLapXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
                    }],
                    item2: [{
                        url: "https://img.alicdn.com/imgextra/i2/101450072/TB1vZfxlDnI8KJjSszgXXc8ApXa_!!0-item_pic.jpg_430x430q90.jpg"
                    }],
                    item3: [{
                        url: "https://img.alicdn.com/imgextra/i1/3085614114/TB19R9Ocgn.PuJjSZFkXXc_lpXa_!!0-item_pic.jpg_430x430q90.jpg"
                    }],
                    item4: [{
                        url: "https://img.alicdn.com/imgextra/i1/2548289425/TB1brhyyVGWBuNjy0FbXXb4sXXa_!!0-item_pic.jpg_430x430q90.jpg"
                    }],
                    item5: [{
                        url: "https://img.alicdn.com/imgextra/i3/3161150069/TB12lCTtY9YBuNjy0FgXXcxcXXa_!!0-item_pic.jpg_430x430q90.jpg"
                    }]
              }
        }
    },
   methods: {
        choose() {
         wx.showToast({
            title: '待完善',
            icon: 'success',
            duration: 2000
            })
        }
   }
}
</script>

<style scoped>
.swiperList{
  width: 100%;
  height: 380rpx;
}
.swiper-image{
  width: 100%;
  height: 350rpx;
}
</style>
