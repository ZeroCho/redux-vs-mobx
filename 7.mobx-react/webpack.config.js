const path = require('path');

module.exports = {
  name: 'mobx-react',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['last 2 chrome versions']},
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: ["react-hot-loader/babel", ["@babel/plugin-proposal-decorators", { legacy: true }], ["@babel/plugin-proposal-class-properties", { loose: true }]],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    port: 3071,
    publicPath: '/dist/',
    hot: true,
  }
};
