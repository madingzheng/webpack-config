const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/es/index.js',
  mode: 'development',
  target: 'web',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'global'
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [ "html-loader" ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
    }
    ]
  }
}