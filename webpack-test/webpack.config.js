const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js',
  },
  context: path.resolve(__dirname, "./"), // 这个必须有，不然会有问题
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  mode: "development",
	devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /(\.less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    })
  ]
}