<template>
  <div class="container">
    <div class="address-list">
      <div class="a-address" v-for="(item, index) in addressList" :key="index">
        <div class="left-text" :class="item.isDefault? 'active':''" @click="selectTap" :data-id="item._id" :data-index="index">
          <div class="name-tel">
            {{item.linkMan}}  {{item.mobile}}
          </div>
          <div class="address-box">
            {{item.address}}
          </div>     
        </div>   
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>

</style>
