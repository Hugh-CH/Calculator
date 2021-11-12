const readline = require('readline-sync');

var ans;

console.log('Welcome to the calculator');

console.log('Enter first number:');
const first_num = readline.prompt();

console.log('Enter second number:');
const second_num = readline.prompt();

console.log('%s * %s = %s',first_num,second_num,first_num*second_num)