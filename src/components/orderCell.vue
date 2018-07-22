<template>
  <div class="order">
    <div v-for="item in orderCell" :key="item">
      <navigator hover-class="none" :url="item.url" class="order-cell">
        <img :src="item.icon" :class="item.class" />
        <div class="badge" v-if="item.count > 0">{{item.count}}</div>
        <div>{{item.text}}</div>
      </navigator>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
