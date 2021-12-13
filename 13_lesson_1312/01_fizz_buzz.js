let number = 35;
let answer;

if (number % 3 === 0 && number % 5 === 0) {
    answer = 'FizzBuzz';
} else if (number % 5 === 0) {
    answer = 'Buzz';
} else if (number % 3 === 0) {
    answer = 'Fizz';
} else {
    console.log(number);
}
console.log(answer);

