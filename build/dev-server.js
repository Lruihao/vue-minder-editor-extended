require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const os = require('os')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')
const port = process.env.PORT || config.dev.port
const autoOpenBrowser = !!config.dev.autoOpenBrowser
const proxyTable = config.dev.proxyTable
const app = express()
const compiler = webpack(webpackConfig)
const chalk = require('chalk')

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
compiler.hooks.compilation.tap('WebpackTranslationPlugin', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    if (typeof cb == "function") {
      cb()
    }
  })
})

Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(hotMiddleware)

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

let networkIP = ''
try {
  networkIP = os.networkInterfaces().en0[1].address
} catch (e) {
  networkIP = '';
}

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

const localhostURL = `http://localhost:${port}`
const networkURL = `http://${networkIP}:${port}`
console.log(chalk.green('> 正在启动本地服务...'))
devMiddleware.waitUntilValid(() => {
  console.log('\n  App running at:')
  console.log(`  - Local:   ${chalk.cyan(localhostURL)}`)
  console.log(`  - Network: ${chalk.cyan(networkURL)}\n`)
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(networkURL)
  }
  _resolve()
})

const server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
