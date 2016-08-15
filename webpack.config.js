var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: [/node_modules/, /styles/],
      loaders: ['react-hot','babel']
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
  ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ], 
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
