<template>
  <div>
    <div id="search">
      <mt-search v-model="searchValue"></mt-search>
      <mt-button type="default" @click="search">搜索</mt-button>
    </div>
    <div v-show="!isSearch">
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

      <select v-model="sortSelected" @change="sortByType(sortSelected)">
        <option value="comprehensive">综合排序</option>
        <option value="startDeliveryCheapest">起送价最低</option>
        <option value="distanceClosest">距离最近</option>
        <option value="deliveryFastest">配送最快</option>
        <option value="deliveryCheapest">配送费最低</option>
      </select>

      <div class="storeList">
        <div class="store" v-for="store in storeList" :key="store.id">
          <img src="../img/lbt4.png" alt />
          <p>
            {{store.storeName}}
            <br />
            星星：{{store.star}} 月售{{store.monthSell}}
            <br />
            起送：{{store.startDelivery|intFilter|moneyFilter}} 夜间配送{{store.nightDelivery|oneDecimalFilter|moneyFilter}}
            <br />
          </p>
          <p>{{store.deliveryTime}}分钟&nbsp;&nbsp;{{store.distance|distanceFilter}}</p>
        </div>
      </div>
    </div>
    <div v-show="isSearch">
      <div class="storeList">
        <div class="store" v-for="store in searchList(searchValue)" :key="store.id">
          <img src="../img/lbt4.png" alt />
          <p>
            {{store.storeName}}
            <br />
            星星：{{store.star}} 月售{{store.monthSell}}
            <br />
            起送：{{store.startDelivery|intFilter|moneyFilter}} 夜间配送{{store.nightDelivery|oneDecimalFilter|moneyFilter}}
            <br />
          </p>
          <p>{{store.deliveryTime}}分钟&nbsp;&nbsp;{{store.distance|distanceFilter}}</p>
        </div>
      </div>
      <div>{{searchMessage}}</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      isSearch: false,
      searchValue: "",
      storeList: [],
      sortSelected: "comprehensive",
      searchMessage: ""
    };
  },

  created() {
    this.getStoreData();
  },
  computed: {
    sortStoreList() {
      // var storeList = this.storeList;
      // for (let i = 0; i < storeList.length; i++) {
      //   for (let j = storeList.length - 1; j > i; j--) {
      //     if (
      //       Number(storeList[j].distance) < Number(storeList[j - 1].distance)
      //     ) {
      //       var temp = storeList[j];
      //       storeList[j] = storeList[j - 1];
      //       storeList[j - 1] = temp;
      //     }
      //   }
      // }
      // return storeList;
      // this.storeList = storeList;
    }
  },
  methods: {
    getStoreData() {
      this.axios
        .get(
          "https://www.easy-mock.com/mock/5d4a5bb7ee89405f39e4eb24/example/storelist"
        )
        .then(res => {
          this.storeList = res.data.storeList;
        });
    },
    sortByType(type) {
      console.log(typeof type);
      console.log(type);
      switch (type) {
        case "comprehensive":
          this.getStoreData();
          break;
        case "startDeliveryCheapest":
          this.sortByStartDeliveryCheapest();
          break;
        case "distanceClosest":
          this.sortByDistance();
          break;
        case "deliveryFastest":
          this.sortByDeliveryFastest();
          break;
        case "deliveryCheapest":
          this.sortByDeliveryCheapest();
          break;
      }
    },
    sortByStartDeliveryCheapest() {
      for (let i = 0; i < this.storeList.length; i++) {
        for (let j = this.storeList.length - 1; j > i; j--) {
          if (
            Number(this.storeList[j].startDelivery) <
            Number(this.storeList[j - 1].startDelivery)
          ) {
            var temp = this.storeList[j];
            this.$set(this.storeList, j, this.storeList[j - 1]);
            this.$set(this.storeList, j - 1, temp);
          }
        }
      }
    },
    sortByDistance() {
      console.log(this.storeList);
      for (let i = 0; i < this.storeList.length; i++) {
        for (let j = this.storeList.length - 1; j > i; j--) {
          if (
            Number(this.storeList[j].distance) <
            Number(this.storeList[j - 1].distance)
          ) {
            // var temp = storeList[j];
            // storeList[j] = storeList[j - 1];
            // storeList[j - 1] = temp;
            var temp = this.storeList[j];
            this.$set(this.storeList, j, this.storeList[j - 1]);
            this.$set(this.storeList, j - 1, temp);
          }
        }
      }
      // console.log(storeList)
      // var a =[1,2,3];
      // var b =[10,9,8]

      // this.$set(a,0,4);
      // console.log(a);
      // console.log(b);
    },
    sortByDeliveryFastest() {
      for (let i = 0; i < this.storeList.length; i++) {
        for (let j = this.storeList.length - 1; j > i; j--) {
          if (
            Number(this.storeList[j].deliveryTime) <
            Number(this.storeList[j - 1].deliveryTime)
          ) {
            var temp = this.storeList[j];
            this.$set(this.storeList, j, this.storeList[j - 1]);
            this.$set(this.storeList, j - 1, temp);
          }
        }
      }
    },
    sortByDeliveryCheapest() {
      for (let i = 0; i < this.storeList.length; i++) {
        for (let j = this.storeList.length - 1; j > i; j--) {
          if (
            Number(this.storeList[j].nightDelivery) <
            Number(this.storeList[j - 1].nightDelivery)
          ) {
            var temp = this.storeList[j];
            this.$set(this.storeList, j, this.storeList[j - 1]);
            this.$set(this.storeList, j - 1, temp);
          }
        }
      }
    },

    search() {
      if (this.searchValue !== "") this.isSearch = true;
      else {
        if (this.isSearch == false) {
          Toast({
            message: "请输入要搜索的内容",
            position: "top",
            duration: 2000
          });
        }
        this.isSearch = false;
      }
    },

    searchList(keywords) {
      var newList = [];
      this.storeList.forEach(item => {
        // 遍历字符串，找到第一个满足的字符串的下标，如果没有找到则返回-1
        if (item.storeName.indexOf(keywords) != -1) {
          newList.push(item);
        }
      });
      if (newList.length == 0) {
        this.searchMessage = "附近没有搜索结果";
      } else {
        this.searchMessage = "";
      }
      return newList;
    }
  }
};
</script>

<style lang="scss" scoped>
#search {
  position: relative;
  button {
    position: absolute;
    width: 20%;
    height: 50px;
    padding: 0;
  }
}
.mint-search {
  display: inline-block;
  width: 80%;
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

.storeList {
  .store {
    margin: 0;
    padding: 0;
    position: relative;
    height: 70px;
    img {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 60px;
      height: 60px;
    }
    p {
      margin: 0;
      height: 0;
      line-height: 20px;
      font-size: 10px;
    }
    :nth-child(2) {
      margin-top: 5px;
      position: absolute;
      left: 80px;
    }

    :last-child {
      margin-top: 5px;
      position: absolute;
      right: 0px;
      top: 40px;
    }
  }
}
</style>