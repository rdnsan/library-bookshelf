const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');
const common = require('./webpack.prod');

module.exports = merge(common, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 'auto',
    }),
  ],
});
