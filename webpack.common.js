const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     apiKey: JSON.stringify(process.env.REACT_APP_APIKEY),
    //     authDomain: JSON.stringify(process.env.REACT_APP_AUTHDOMAIN),
    //     projectId: JSON.stringify(process.env.REACT_APP_PROJECTID),
    //     databaseURL: JSON.stringify(process.env.REACT_APP_DATABASEURL),
    //     storageBucket: JSON.stringify(process.env.REACT_APP_STORAGEBUCKET),
    //     messagingSenderId: JSON.stringify(process.env.REACT_APP_MESSAGINGSENDERID),
    //     appId: JSON.stringify(process.env.REACT_APP_APPID),
    //   },
    // }),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
  ],
};
