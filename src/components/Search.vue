<template>
  <div>
     <div id="search"><mt-search v-model="searchValue"></mt-search><router-link to="/search"><mt-button type="default">搜索</mt-button></router-link></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#search{
  position: relative;
  a{
    position:absolute;
    display: inline-block;
    width:20%;
    margin:0;
    padding:0;
    button{
      width:100%;
      height:50px;
      padding:0;
    }
  }
}
.mint-search {
  display: inline-block;
  width: 80%;
  height: 50px;
}
</style>