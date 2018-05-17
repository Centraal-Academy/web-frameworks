const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    }),
    new VueLoaderPlugin()
  ]
}

module.exports = config
