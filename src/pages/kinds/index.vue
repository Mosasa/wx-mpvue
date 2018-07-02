<template>
  <div>
    <scroll :text="motto"></scroll>
  </div>
</template>
<script>
import scroll from '@/components/scroll'
export default {
  data(){
    return{
      motto:'hello'
    }
  },
  components: {
    scroll
  },
}
</script>
<style>
scroll{
  width: 100%;
  height: 1000rpx;
}
</style>

