const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //chromeWebSecurity: false,
  //defaultCommandTimeout: 20000,
  //pageLoadTimeout: 30000,
  //video: false,
  e2e: {
    // baseUrl: 'https://www.google.com',
    //slowTestThreshold: 1000,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
