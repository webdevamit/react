module.exports = {
  globalSetup: "./setup.js",
  globalTeardown: "./teardown.js",
  testEnvironment: "./puppeteer-environment.js",
  maxConcurrency: 1,
  verbose: true,
  displayName: "XWeb-Automation",
  rootDir: ".",
};
