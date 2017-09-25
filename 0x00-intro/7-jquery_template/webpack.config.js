var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.bundle.js"
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'Holberton School webpack',
       filename: './index.html',
       template: 'src/index.html'
     }),
     new webpack.HotModuleReplacementPlugin()
   ]
};
