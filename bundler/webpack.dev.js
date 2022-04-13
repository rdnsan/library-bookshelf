const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

function infoColor(message) {
  return `\u001b[1m\u001b[34m${message}\u001b[39m\u001b[22m`;
}

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    allowedHosts: 'all',
    hot: true,
    watchFiles: ['../src/**'],
    static: {
      watch: true,
      directory: path.join(__dirname, '../public'),
    },
    client: {
      logging: 'info',
      overlay: true,
      progress: false,
    },
    onListening: (devServer) => {
      if (!devServer) throw new Error('webpack-dev-server is not defined!');
      const domain = `http://localhost:3000`;
      console.log(`Project running at ${infoColor(domain)}`);
    },
  },
});
