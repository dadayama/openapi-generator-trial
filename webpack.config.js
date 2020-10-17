const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/js/index.ts',
  output: {
    filename: './js/index.js',
    path: __dirname + '/public'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            },
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'pug-loader' }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: [
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.pug'
    })
  ],
  devServer: {
    contentBase: './public'
  }
};
