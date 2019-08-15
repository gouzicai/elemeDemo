<template>
  <div>
    <mt-search v-model="value"></mt-search>
    <mt-swipe :auto="2000" id="circlePicture">
      <mt-swipe-item>
        <img src="../img/lbt1.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/lbt2.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/lbt3.png" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/lbt4.png" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div>
      <img src="../img/lbt4.png" id="main" />
    </div>
    <mt-swipe :auto="0" id="foodsType" :show-indicators="false">
      <mt-swipe-item>
        <table>
          <tr>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>美食</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>卖场便利</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>水果</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>跑腿代购</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>甜品饮品</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>星选好店</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>送药上门</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>大牌惠吃</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>取送件</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>签到领红包</div>
            </td>
          </tr>
        </table>
      </mt-swipe-item>
      <mt-swipe-item>
        <table>
          <tr>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>晚餐</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>速食简餐</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>汉堡披萨</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>米粉面馆</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>鸭脖卤味</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>全城送</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>炸鸡炸串</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>买菜</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>鲜花绿植</div>
            </td>
            <td>
              <div>
                <img src="../img/lbt4.png" alt />
              </div>
              <div>包子粥店</div>
            </td>
          </tr>
        </table>
      </mt-swipe-item>
    </mt-swipe>

    <div id="extend">
      <div>
        <span>
          电影
          <br />
          <font>19.9元起</font>
        </span>
        <span></span>
      </div>
      <div>2</div>
      <div>3</div>
    </div>

    <div id="superMember">
      <div class="supermember-text">超级会员 已为我节省93元 下单即可获得奖励金</div>
    </div>

    <div>
      <h3 style="margin:5px 0">优惠专区</h3>
    </div>

    <div id="discountArea">
      <div>
        <img src="../img/lbt4.png" />
        <img src="../img/lbt4.png" />
      </div>
      <div>
        <img src="../img/lbt4.png" />
        <img src="../img/lbt4.png" />
        <img src="../img/lbt4.png" />
        <img src="../img/lbt4.png" />
      </div>
    </div>

    <div>
      <h3 style="margin:5px 0">专属推荐</h3>
    </div>

    <div id="specialRecommend">
      <img src="../img/lbt4.png" />
      <img src="../img/lbt4.png" />
    </div>

    <div>
      <h3 style="margin:5px 0">推荐商家</h3>
    </div>

    <div id="sortScreen">综合排序</div>

    <div id="storeList">
      <div class="store" v-for="store in storeList" :key="store.id">
        <div class="store-left">
          <img src="../img/lbt4.png" alt />
        </div>
        <div class="store-right">
          <p>{{store.storeName}}<br>
          星星：{{store.star}} 月售{{store.monthSell}}<br>
          起送：{{store.startDelivery}}  夜间配送{{store.nightDelivery}}<br>
          </p>
          <p>
            {{store.deliveryTime}}分钟&nbsp;&nbsp;{{store.distance}}km
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      storeList:[]
    };
  },

  created(){
    this.getStoreData();
  },
  methods:{
    getStoreData(){
      this.axios.get("https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/storelist").then(res=>{
        this.storeList = res.data.storeList;
      })
    }
  }

};
</script>

<style lang="scss" scoped>
.mint-search {
  height: 50px;
}
#circlePicture {
  margin-top: 10px;
  height: 100px;
  .mint-swipe-item img {
    height: 100px;
    width: 100%;
  }
}
#main {
  margin-top: 10px;
  width: 100%;
  height: 100px;
}

#foodsType {
  width: 100;
  height: 160px;
  table {
    width: 100%;
    tr {
      width: 100%;
      td {
        padding: 0;
        width: 20%;
        height: 80px;
        text-align: center;
        font-size: 10px;
        margin: 0 10px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}

#extend {
  height: 50px;
  margin-bottom: 5px;
  div {
    border-radius: 5px;
    background-color: pink;
    width: 30%;
    height: 40px;
    margin: 2.5%;
    float: left;
    span {
      margin-left: 20px;
      font {
        font-size: 1px;
        margin-left: 20px;
      }
    }
  }
  div:first-child {
    margin-left: 0px;
  }
  div:last-child {
    margin-right: 0px;
  }
}

#superMember {
  border-radius: 5px;
  background-color: lightblue;
  padding: 10px 0;
  font-size: 10px;
  margin-bottom: 10px;
  // vertical-align: middle;
  // line-height: 50px;
  .supermember-text {
    vertical-align: middle;
  }
}

#discountArea {
  div:first-child {
    img {
      width: 49%;
      height: 150px;
    }
  }
  div:nth-child(2) {
    img {
      margin: 1% 1.1%;
      width: 22%;
      height: 150px;
    }
    img:first-child {
      margin-left: 0;
    }
    img:last-child {
      margin-right: 0;
    }
  }
}

#specialRecommend {
  img {
    width: 49%;
    height: 150px;
  }
}

#storeList {
  .store{
    margin:0;
    padding:0;
    position: relative;
    height:70px;
  .store-left{
    float: left;
    width: 70px;
    height:70px;
    img{
      margin:4px 0 0 4px;
      width:60px;
      height:60px;
      
    }
  }
  .store-right{
    width: 285px;
    height:70px;
    p{
      position:absolute;
      width:285px;
      left:70px;
      font-size: 14px;
      margin: 0;
    }
    p:nth-child(2){
      position: absolute;
      width: 100px;
      left:250px;
      bottom:10px;
    }
    float: left;
  }
  }

}
</style>