const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/i,
      use: "raw-loader",
    });
    return config;
  },
});
