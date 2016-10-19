'use strict';

const config = require('./webpack.config.base');

config.output = {
  filename: '[name].bundle.js',
  path: './app/public/scripts',
};

module.exports = config;
