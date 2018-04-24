<template>
  <div id="app">
    <div :class="{progress : isActive}"></div>
    <my-header></my-header>
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
  import Header from '@/components/header/header'
  export default {
    components: {
    'my-header': Header,
    },
    data(){
      return {
        isActive: false
      }
    },
    watch: {
      $route(){
        this.isActive = true;
        setTimeout(()=>{
          this.isActive = false;
        },2000)
      }
    }

}
</script>

<style lang="less">
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .5s linear;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
  .progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: #0A74DA;
    animation: widthAdd 2s ease-in-out;
    z-index: 9999;
  }

  @keyframes widthAdd {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }

</style>
