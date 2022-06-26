const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:  {
    home: './src/js/index.js',
    results: './src/js/results.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/views/index.html',
      inject: true,
      chunks: ['home'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/views/results.html',
      inject: true,
      chunks: ['results'],
      filename: 'results.html'
    }),

  ]
};
