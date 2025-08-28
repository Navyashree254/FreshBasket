module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.extensions.push('.mjs');
      return webpackConfig;
    }
  }
};
