const chalk = require("chalk");
const puppeteer = require("puppeteer");
const size = require("./size");

module.exports = async function () {
  console.log(chalk.green(":Start"));
  let options = {
    handleSIGINT: false,
    headless: true,
    devtools: false,
    timeout: 30000,
    args: [
      "--start-maximised",
      `--window-size=${size.width},${size.height}`,
      "--no-sandbox",
      '--proxy-server="direct://"',
      "--proxy-bypass-list=*",
      "--disable-gpu",
      "--no-default-browser-check",
      "--no-first-run",
      "--enable-automation",
      "--disable-default-apps",
      "--disable-popup-blocking",
      "--disable-translate",
      "--disable-device-discovery-notifications",
      "--disable-setuid-sandbox",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-renderer-backgrounding",
      "--enable-logging",
      "--v=1",
    ],
  };

  const browser = await puppeteer.launch(options);
  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser;
  // Instead, we expose the connection details via file system to be used in tests
  process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
};
