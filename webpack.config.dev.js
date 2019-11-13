const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      { test: /\.js$/, exclude: '/node_modules', loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './template/index.html' })
  ]
}
