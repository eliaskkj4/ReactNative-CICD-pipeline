// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
      semi: ['error', 'always'],           // Kræver semikolon
      'comma-style': ['error', 'last'],    // Kræver komma sidst på linjen
    },
  },
]);