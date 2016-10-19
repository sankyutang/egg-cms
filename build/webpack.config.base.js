'use strict';

module.exports = {
  entry: {
    app: './cms/index.js',
    admin: './cms/admin/index.js',
  },
  module: {
    loader: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'stage-2' ],
          plugins: [ 'babel-plugin-component' ],
        },
      },
    ],
  },
};
