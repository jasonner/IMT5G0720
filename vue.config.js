// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 14
});
module.exports = {
  // 基本路径
  publicPath:"./",
  // 输出文件目录
  outputDir: 'web-demo',
  lintOnSave: false,
  devServer: {
    proxy:{
      "/api": {
          target: "http://xz502.tpddns.cn:25008", //目标地址
          ws: true, 
          changeOrigin: true,
          pathRewrite: {
              "^/api": ''
          }
      },
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}