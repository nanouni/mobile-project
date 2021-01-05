module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue 就是将 px 换算成 rem 的基准值
      // 公式：适配的标准屏 / 10，做rem布局时，眼中只有标准屏，其他所有屏幕等比例缩放
      // 375px / 37.5 =》 10rem
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
