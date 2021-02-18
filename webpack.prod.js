const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
    }),
  ],
});
