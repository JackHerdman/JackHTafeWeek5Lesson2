let numbers = [2, 3, 1, 4, 2];

function multiplyReducer(acc, val) {     //times the first number but the second number then the product
    return acc * val;                    //of those by the third number
}
let productOfNumbers = numbers.reduce(multiplyReducer);
console.log(productOfNumbers);

let num1 = 12;
let num2 = 15;
console.log(Math.max(num1, num2)); // tells highest number
console.log(Math.min(num1, num2)); // tells lowest number

// Q1 - Create an array of numbers and use the array.reduce method to find the smallest number in the array
console.log("Question 1 - find the smallest number");
let myNumbers = [2, 45, 20, 60, 3, 405, 50, 37];
console.log(myNumbers.reduce((num1, num2) => Math.min(num1, num2)));
console.log();

// Q2 - Create an array of strings and use the array.reduce method to find the length of the longest string in the array

console.log("Question 2 - find the longest word");
let myWords = ["Small", "Big", "Humungous", "Extraordinarily", "Mega", "Miniscule"];
console.log(myWords.reduce((acc, curr) => Math.max(acc, curr.length), 0));
console.log();

// Q3 - Create an array of objects called bankers. Each should have a name (string) and netWorth (number). Use the array.reduce method to find the total netWorth of all the bankers. Then use that number to calculate the average netWorth of all the bankers.
console.log("Question 3 - Total and Average net Worth of bankers");
let bankers = [{
    name: "Billy Bill",
    netWorth: 5
}, {
    name: "Frankie Frank",
    netWorth: 10
}, {
    name: "Julia Jules",
    netWorth: 15
}, {
    name: "Dennis Denistone",
    netWorth: 20
}];
let totalNetWorth = bankers.reduce((acc, curr) => acc + curr.netWorth, 0);
console.log(`Total Net Worth of all bankers is $${totalNetWorth}`);
let averageNetWorth = totalNetWorth / bankers.length;
console.log(`Average Net Worth of each bankers is $${averageNetWorth}`);

