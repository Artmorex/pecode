const { defineConfig } = require("cypress");
const dotenvOutput = require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
    baseUrl: 'https://www.pecodesoftware.com',
    env: {
      endpoint: dotenvOutput.parsed.endpoint,
      username: dotenvOutput.parsed.username,
      password: dotenvOutput.parsed.password,
    },
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      json: true,
      html: true,
      reportsDir: 'reports',
      reportFilename: 'report',
      overwrite: true
    },
    video: true,
  },
});
