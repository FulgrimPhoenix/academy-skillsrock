// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~app': path.resolve(__dirname, 'src/app'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~features': path.resolve(__dirname, 'src/features'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~routes': path.resolve(__dirname, 'src/routes'),
      '~services': path.resolve(__dirname, 'src/services'),
      '~styles': path.resolve(__dirname, 'src/styles'),
      '~utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
