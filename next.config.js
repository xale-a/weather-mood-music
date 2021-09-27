module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lastfm.freetls.fastly.net', 'openweathermap.org'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
