const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname),
            '@src': path.resolve(__dirname, 'src'),
            '@asset': path.resolve(__dirname, 'asset'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@modules': path.resolve(__dirname, 'src/modules')
        }
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.(eot|json|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/' + process.env.NODE_ENV === 'development' ? '[path][name].[ext]' : '[name].[contenthash:8].[ext]'
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg|WEBP)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024,
                    },
                },
                generator: {
                    filename: 'static/images/' + process.env.NODE_ENV === 'development' ? '[path][name].[ext]' : '[name].[contenthash:8].[ext]',
                },
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'node_modules'),
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
            inject: 'head',
            favicon: 'asset/favicon.ico'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash].css"
        })
    ]
}