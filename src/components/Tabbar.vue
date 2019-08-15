<template>
  <div id="tabbar">
    <router-link :to="'/'+selected">
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="ele">
        <img slot="icon" src="../img/ele.png" />
        外卖
      </mt-tab-item>

      <mt-tab-item id="supermarket">
        <img slot="icon" src="../img/supermarket.png" />
        超市
      </mt-tab-item>

      <mt-tab-item id="order">
        <img slot="icon" src="../img/order.png" />
        订单
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../img/mine.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null
    };
  }
};
</script>

<style lang="scss" scoped>
#tabbar{
  margin-top:70px
}
</style>