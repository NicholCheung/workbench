const path = require('path')
const Webpack = require('webpack')
const { merge } = require("webpack-merge")
const CommonConfig = require('./webpack.config.js')

const config = {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    optimization: {
        usedExports: true
    },
    devServer: {
        open: true,
        compress: true,
        port: 8080,
        hot: true,
        proxy: [
            {
                context: ['/user/login', '/user/register'],
                target: 'http://127.0.0.1',
                changeOrigin: true,
                // secure: true
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
}


module.exports = merge(CommonConfig, config)