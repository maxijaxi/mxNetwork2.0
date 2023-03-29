module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,js,css,html,png,jpg,jpeg,svg}"],
  swDest: "build/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 30, // Cache images for 30 days
        },
      },
    },
  ],
};
