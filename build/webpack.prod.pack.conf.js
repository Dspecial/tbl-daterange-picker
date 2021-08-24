'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.pack.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  // devtool: config.build.productionSourceMap ? config.build.devtool : false,
  //修改output
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: config.build.assetsPublicPath,
    filename: 'tbl-daterange-picker.min.js',
    library: 'tbl-daterange-picker', //library指定的就是你使用require时的模块名
    libraryTarget: 'umd', //打包格式，选umd支持node和浏览器2种执行坏境
    umdNamedDefine: true
  },
  //添加external，解决以<script>标签形式使用打包后的组件时，出现vue未定义
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    //修改打包css
    new ExtractTextPlugin({
      filename: 'tbl-daterange-picker.min.css',
      allChunks: true,
    }),
  ]
})

module.exports = webpackConfig
