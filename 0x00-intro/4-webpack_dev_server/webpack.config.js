var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.bundle.js"
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'Holberton School webpack',
       filename: './index.html',
     })
   ]
};
