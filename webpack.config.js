const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist/js')
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules:[
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: ['node_modules'],
    alias: {
      // vue.js のビルドを指定する
      vue: 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/js/',
    open: false,
    watchContentBase: true,
    port: '3000'
  }
}