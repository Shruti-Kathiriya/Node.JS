const chalk = require('chalk');
const log = console.log;
//console.log(chalk.blue('Hello world!'));
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// log(chalk.blue.bgRed.bold('Hello world!'));
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);


//
var validator = require('validator');
const res = validator.isEmail('foo@bar.com')
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res)); 