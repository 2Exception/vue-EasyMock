<template>
  <div class="container">
    <div class="login-form">
      <form>

        <label class="clearfix">
          <span>用户名</span>
          <input type="text" placeholder="请输入用户名" ref="userInput" autocomplete="on">
        </label>

        <label class="clearfix">
          <span>密 码</span>
          <input type="text" placeholder="请输入密码" autocomplete="on">
        </label>

        <label class="clearfix">
          <button @click.prevent="sendLogin">登录</button>
        </label>

      </form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    beforeRouteEnter(to,from,next){
      next(vm => {
        let info = vm.$local.fetch('easy-mock')
        console.log(vm);
        if(info.login){
          vm.$router.push('/');
        }
      })
    },
    methods: {
      sendLogin(){
        let userName = this.$refs.userInput.value;
        let redirect = this.$route.query.redirect;

        if(userName) {
          this.$local.save('easy-mock',{
            login: true,
            userName: userName
          })

          if(redirect) {
            this.$router.push({
              path: '/' + redirect
            });
          }else {
            this.$router.push({
              path: '/'
            })
          }

        }else {
          alert('请输入您的用户名!')
        }
      }
    }
  }
</script>

<style scoped lang="less">

  .container {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 9999;
    left: 0;
    top: 0;
  }
  .login-form {
    width: 40%;
    margin: 120px auto;
    .el-button--primary {
      display: block;
      width: 100%;
    }

    label {
      display: block;
      width: 400px;
      margin: 20px auto;
      line-height: 40px;
      input {
        width: 80%;
        height: 40px;
        float: left;
        box-sizing: border-box;
        border: 1px solid #eee;
        padding-left: 10px;
        border-radius: 4px;
        transition: border .5s ease;
        &:hover {
          border: 1px solid rgba(24,141,24,.8);
        }
      }
      span {
        width: 20%;
        float: left;
        font-size: 16px;
        font-weight: bold;
      }
      button {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;
        font-size: 16px;
        background: rgba(24,141,24,.8);
        transition: background .3s ease;
        &:hover {
          background: rgba(24,141,24,.5);
        }
      }
    }
  }

</style>
