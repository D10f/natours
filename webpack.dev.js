const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.html$/,
      use: ['html-loader']
    },
    {
      test: /\.(ttf|eot|svg|woff2?)/,
      use: ["url-loader"]
    },
    {
      test: /\.(svg|png|jpg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "images"
        }
      }
    },
    {
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "videos"
        }
      }
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchOptions: {
      aggregateTimeout: 1000,
      ignored: /node_modules/
    }
  },
  devtool: 'source-map'
};
