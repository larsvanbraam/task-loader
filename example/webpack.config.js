const path = require('path');

module.exports = {
  devServer: {
    contentBase: './',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
