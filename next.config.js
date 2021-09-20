const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

// prettier-ignore
module.exports = withPlugins(
    [withImages], 
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
