var path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,
    devtool: "eval",
    optimization: {
      minimizer: [
        // 解决视讯的安全扫描，webpack 源码泄漏
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: false, // 移除所有 console
              drop_debugger: true, // 移除 debugger
              // pure_funcs: ['console.log'] // 移除特定函数
            },
            output: {
              comments: false // 移除所有注释
            },
            mangle: true // 混淆变量名
          },
          extractComments: false // 不提取注释到单独文件
        })
      ]
    },
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: true,
    cacheBusting: true,
    devtool: 'cheap-module-eval-source-map',
    poll: false,
    errorOverlay: true,
    notifyOnErrors: true
  },
}
