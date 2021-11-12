const readline = require('readline-sync');

var ans;

console.log('Welcome to the calculator');

console.log('Enter operator:');
const operator = readline.prompt();

console.log('Enter first number:');
const first_num = readline.prompt();

console.log('Enter second number:');
const second_num = readline.prompt();

if (operator == '*'){
    ans = first_num*second_num;
}   else if (operator == '/'){
    ans = first_num/second_num;
}   else if (operator == '+'){
    ans = parseFloat(first_num)+parseFloat(second_num);
}   else if (operator == '-'){
    ans = first_num-second_num;
}   else{
    console.error('Incompatible operator')
}

console.log('%s %s %s = %s',first_num,operator,second_num,ans)

