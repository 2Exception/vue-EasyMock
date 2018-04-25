<template>
  <div class="container">
    <canvas id="cvs"></canvas>
  </div>
</template>

<script>
  import {danMu} from '@/lib/danmu.js'
  export default {
    name: "page404",
    mounted(){
      danMu();
    }
  }

</script>

<style scoped lang="less">
  .container {
    width: 1020px;
    margin: 40px auto;
    h2 {
      font: 700 30px/50px '';
    }
    p {
      font-size: 16px;
      color: #666;
    }

    canvas {
      border-radius: 20px;
    }
  }

</style>
