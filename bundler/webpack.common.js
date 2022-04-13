const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const Dotenv = require('dotenv-webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

/** @type {import('webpack').Configuration} */
const config = {
  entry: path.resolve(__dirname, '../src/app/index.ts'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.[contenthash].js',
    sourceMapFilename: 'bundle.[contenthash].js.map',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': path.resolve(__dirname, '../src/app'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@config': path.resolve(__dirname, '../src/config'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@views': path.resolve(__dirname, '../src/views/'),
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Library Bookshelf',
      template: path.resolve(__dirname, '../src/templates/index.ts'),
      favicon: path.resolve(
        __dirname,
        '../public/static/icons/favicon-128x128.png'
      ),
    }),
    new Dotenv(),
    new WebpackPwaManifest({
      name: 'Library Bookshelf',
      short_name: 'Library Bookshelf',
      description: 'Simple App for Manage Your Bookshelf',
      background_color: '#f6f9fc',
      theme_color: '#6fdcbf',
      crossorigin: 'use-credentials',
      publicPath: '.',
      icons: [
        {
          src: path.resolve(
            __dirname,
            '../public/static/icons/android-chrome-512x512.png'
          ),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve(
            __dirname,
            '../public/static/icons/android-chrome-512x512.png'
          ),
          size: '512x512',
          purpose: 'maskable',
        },
      ],
    }),
    new DashboardPlugin(),
  ],
};

module.exports = config;
