<template>
  <div id="app">
    <!-- <div class="box" @click="testFn"></div> -->
    <!-- <van-button class="btn" type="primary" size="small" round>主要按钮</van-button> -->
    <!-- <van-button disabled type="primary">禁用状态</van-button>
    <van-button loading type="info" loading-text="加载中..." />
    <van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">
  按钮
</van-button>
    <van-slider v-model="value" bar-height="4px" active-color="#ee0a24" /> -->
    <router-view/>
  </div>
</template>

<script>
// import { Toast } from 'vant'
export default {
  // data () {
  //   return {
  //     value: 50
  //   }
  // },
  // methods: {
  //   onChange (value) {
  //     Toast('当前值：' + value)
  //   },
  //   async testFn () {
  //     const res = await this.$http.get('/')
  //     console.log(res.data)
  //   }
  // }

}
</script>
<style lang="scss">
// #app{
//   .btn{
//     width:300px;
//     height: 60px;
//     background-color: pink;
//   }
// }
// .box{
//   width: 100px;
//   height: 50px;
//   background-color: aqua;
// }
</style>
