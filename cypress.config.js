const { defineConfig } = require("cypress");

//importing cucumber module
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {

    //setting .feature file extension
    specPattern: "**/*.feature",
    stepDefinitions: "cypress/e2e/tests/**/*.js",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());

    },
  },
});
