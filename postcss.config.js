module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        'defaults',
        'ie >= 8',
        'Firefox >= 3.5',
        'chrome  >= 35',
        'opera >= 11.5',
        'last 3 iOS versions'
      ]
    },
    'postcss-pxtorem': {
      rootValue: 106.667, // 根元素字体大小
      // propList: ['width', 'height']
      propList: ['*']
    }
  }
}
