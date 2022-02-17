const chalk = require('chalk');
const log = console.log;
function info(...args) {
    log(chalk.green(args));
}
function warm(...args) {
    debugger;
    log(chalk.yellow(args));
}
module.exports = { info, warm };