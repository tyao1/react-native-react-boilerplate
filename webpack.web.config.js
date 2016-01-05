(function() {
  'use strict';

  var path = require('path');
  var webpack = require('webpack');

  module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
      'main': [
        './src/main.web.js'
      ],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
    },
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx|es6)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'eslint-loader',
        }
      ],
      loaders: [
        {
          test: /\.(js|jsx|es6)$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'stage-1', 'react']
          }
        }
      ],
      resolve: {
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js']
      },
      plugins: [
      ]
    }
  };
}());
