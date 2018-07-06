<template>
  <div class="container">
    <div v-if="goodsList.list.length<=0">
      <shop-car-no ></shop-car-no>
    </div>
    <div v-else>
      <shop-car-hav ></shop-car-hav>
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
        list:[]
      }
    }
  },
  components: {
    'shop-car-no':shopCarNo,
    'shop-car-hav':shopCarHav
  },
}
</script>
<style>
.container{
  width: 100%;
  height: 100%;
}
</style>


