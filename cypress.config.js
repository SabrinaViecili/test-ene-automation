const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    reporter: 'mochawesome',
    reporterOptions: {
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
      // Deixe vazio inicialmente
    },
    // specPattern: 'cypress/e2e/*.ts', // Ajuste conforme seu projeto
  },
});




