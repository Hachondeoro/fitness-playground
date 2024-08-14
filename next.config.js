const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/i,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = withPlugins([], nextConfig);