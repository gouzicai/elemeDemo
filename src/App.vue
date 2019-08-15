<template>
  <div>
      <router-view></router-view>
      <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'
export default {
    data(){
        return {
        }
    },
    components:{
        tabbar
    }
};
</script>

<style lang="scss" scoped>
</style>