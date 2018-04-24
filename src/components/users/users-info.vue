<template>
  <div class="container">
    <h2 class="title">用户信息中心</h2>
    <div class="nav">
      <router-link :to="{path:'?info=follow'}" tag="span"
                   class="follow" :class="{active : val=='follow'}">我的关注</router-link>

      <router-link :to="{path:'?info=share'}" tag="span"
                   class="share" :class="{active : val=='share'}">我的分享</router-link>
      <ul class="clearfix">
        <li v-for="item in userData">
          {{ item.title }}
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
  export default {
    name: "users-info",
    data(){
      return {
        userData: {},
        val: 'follow'
      }
    },
    methods: {
      changeInfo(){
        this.userData = this.$store.state.userData[this.val];
      }
    },
    created(){
      this.changeInfo();
    },
    watch: {
      $route(){
        this.val = this.$route.query.info;
        this.changeInfo();
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    width: 1020px;
    margin: 10px auto;
  }
  .title {
    font:600 16px/50px 'Microsoft YaHei';
    background: linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.2));
    border-radius: 6px;
    margin-bottom: 20px;
    padding-left: 20px;
    color: #333;
  }
  .nav {
    text-align: right;
    ul li {

    }
  }
  .follow,.share {
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 14px;
    font-family: Simsun;
    cursor: pointer;
    border-radius: 4px;
    background: rgba(123,242,45,.1);
    &:hover {
      background: rgba(123,242,45,.2);
    }
    &.active {
      font-weight: bold;
      background: rgba(123,242,45,.2);
    }
  }



</style>
