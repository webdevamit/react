const NodeEnvironment = require("jest-environment-node");
const puppeteer = require("puppeteer");
const size = require("./size");
const environment = require("./core/environments");
class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    const wsEndpoint = process.env.PUPPETEER_WS_ENDPOINT;
    this.global.__TIMEOUT__ = 30000;
    this.global.__TEST_URL__ = `${environment}xweb`;
    this.global.__TEST_REACT_URL__ = `${environment}v2/xweb`;
    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
      //slowMo: 100
    });
    this.global.newBrowserPage = async function () {
      let page = await this.global.__BROWSER__.newPage();
      page.setViewport({
        width: size.width,
        height: size.height,
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      });
      page.evaluateOnNewDocument(
        `Object.defineProperty(window, 'runningXWebAutomation', {
              get() {
                return true;
              }
            })`
      );
      await page.setCookie({
        name: "username",
        value: "test-user",
        domain: ".rbsgrp.net",
        path: "/",
      });
      await page.setCookie({
        name: "SSOTOKEN",
        value: "TEST-TOKEN",
        domain: ".rbsgrp.net",
        path: "/",
      });
      await page.setRequestInterception(true);
      await page.setDefaultNavigationTimeout(29000);
      await page.setDefaultTimeout(29000);
      page.on("pageerror", (msg) => console.log());
      page.on("error", (msg) => console.log(`PAGE ERROR: ${msg.toString()}`));
      page.on("console", (msg) => {
        if (msg._text.startsWith("TEST")) {
          console.log(msg._text);
        }
      });
      return page;
    };
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
