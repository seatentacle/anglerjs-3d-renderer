import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import development from './configs/webpack/webpack.development';
import production from './configs/webpack/webpack.production';

type WEBPACK_ENV = 'production' | 'development';

const NODE_ENV = process.env.NODE_ENV as WEBPACK_ENV;
const devMode = NODE_ENV !== 'production';

const config: webpack.Configuration = webpackMerge({
  mode: NODE_ENV,
  entry: {
    app: path.resolve(__dirname, 'src/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    alias: {
      animations: path.resolve(__dirname, 'src/animations'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      lib: path.resolve(__dirname, 'src/lib'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
}, devMode ? development : production);

export default config;
