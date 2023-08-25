const chalk = require("chalk");

module.exports = async function () {
  let pid = global.__BROWSER_GLOBAL__.process().pid;
  process.kill(pid);
  console.log(chalk.green(":End"));
};
