import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, '../../stories/index.tsx'),
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    port: 6060,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'angler-3d-renderer',
      template: path.resolve(__dirname, '../../stories/template.html'),
    }),
  ],
};

export default config;
