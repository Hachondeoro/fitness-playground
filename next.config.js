const withPlugins = require("next-compose-plugins");

// prettier-ignore
module.exports = withPlugins(
    [],
  {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.csv$/i,
        use: "raw-loader",
      });
      return config;
    },
  }
);
