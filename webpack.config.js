const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "dist"),
    filename: "vue-components.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  module : {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), 
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    })
  ],
};
