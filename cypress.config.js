const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    video:false,
    specPattern:'cypress/e2e/cucumber-tests/features/*.feature',
    baseUrl:'https://amazon.nl'
  },
});
