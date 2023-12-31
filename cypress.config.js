const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "reports",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    baseUrl: "https://computer-database.gatling.io",
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    video: true,
  },
});
