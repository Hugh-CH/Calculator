const readline = require('readline-sync');

var ans     = 0;
var numbers = [];

console.log('Welcome to the calculator');
console.log('=========================');

console.log('Enter operator:');
const operator = readline.prompt();

console.log('How many numbers do you want to %s?:',operator);
const repeats = readline.prompt();

for (let i=0;i<repeats;i++){
    console.log('Enter number %s',i+1);
    numbers[i] = readline.prompt();
 }

ans = numbers[0]

 for (let i=1;i<repeats;i++){
    if (operator == '*'){
        ans = ans*numbers[i];
    }   else if (operator == '/'){
        ans = ans/numbers[i];
    }   else if (operator == '+'){
        ans = parseFloat(ans)+parseFloat(numbers[i]);
    }   else if (operator == '-'){
        ans = ans-numbers[i];
    }   else{
        ans = ('ERROR:Incompatible operator')
    }
 }

 console.log('The answer is:  %s',ans)
