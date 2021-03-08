const utils = require('./utils')
const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = config.build.env

const webpackConfig = merge(baseWebpackConfig, {
   mode: 'production',

  entry: './src/components/plugin.js',
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('./vue-minder-editor-[chunkhash:5].js'),
    chunkFilename: utils.assetsPath('./[name].[chunkhash].js'),
    // //增加以下库配置信息
    library: 'vueMinderEditorPlus',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   }
    // },
    // runtimeChunk: {
    //   name: 'runtime'
    // }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        show_copyright: false,
        comments: false,
        compress: {
          drop_debugger: true,
          drop_console: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    // new MiniCssExtractPlugin({
    //   filename: utils.assetsPath('css/[name].[hash].css'),
    //   chunkFilename: utils.assetsPath('css/[id].[hash].css'),
    // }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
