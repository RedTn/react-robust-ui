const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/env', { modules: false }], '@babel/react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          require.resolve('sass-loader')
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader')
          }
        ]
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [
          require.resolve('@storybook/addon-storysource/loader')
        ],
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '..', 'src'), path.resolve(__dirname, '..', 'node_modules')]
  },
};
