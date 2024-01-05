const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'omu41y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
