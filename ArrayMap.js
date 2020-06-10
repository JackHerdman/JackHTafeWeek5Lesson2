let numbers = [2, 5, 4, 1, 7];

function doubleNumber(num) {
    return num * 2;
}
let numbersDoubled = numbers.map(doubleNumber); //passes in each element and does something to it to
//produce a new array
console.log(numbersDoubled);

let teachers = [{
    givenName: "Aliya",
    surname: "Love",
    subject: "Math"
}, {
    givenName: "Mischa",
    surname: "Sach",
    subject: "History"
}, {

    givenName: "Jenny",
    surname: "Matthews",
    subject: "Science"
}];

let people = [{
    firstName: "Jagoda",
    lastName: "Dowling"
}];

function teacherToPerson(teacher) {
    return {
        firstName: teacher.givenName,
        lastName: teacher.surname
    }
}
let teachersAsPeople = teachers.map(teacherToPerson);
// let teachersAsPeople = teachers.map(teacher => ({firstName: teacher.givenName, lastName: teacher.surname}))

console.log(teachers)
console.log(teachersAsPeople)

console.log();
// Q1 - Use the array.map function to convert an array of strings into an array of the length of each of those strings
console.log("Question 1 - String Array as Numbers");
let myStringArray = ["The", "New", "Destiny", "Season", "Launched", "This", "Morning"];
let myNumberArray = myStringArray.map(string => string.length);
console.log(myStringArray)
console.log(myNumberArray)
console.log();

// Q2 - Create an array of numbers. Use the array.map function to add 5 to each of those numbers
console.log("Question 2 - Number Array plus 5");
let plus5Array = myNumberArray.map(num => num + 5);
console.log(plus5Array)
console.log();
// Q3 - Create an array of people with properties firstName and lastName. Use the array.map function to create an array of the full names of each of the people.
console.log("Question 3 - Full Name Array");
let names = [{
    firstName: "Minty",
    lastName: "Freshbreath"
}, {
    firstName: "Chocolate",
    lastName: "Mudcake"
}, {
    firstName: "Icecream",
    lastName: "Sundae"
}];
console.log(names);
let fullNames = names.map(name => `${name.firstName} ${name.lastName}`);
console.log(fullNames);
console.log();
// Q4 - Create an array of pets with properties name (string), age (number) and owner (object with name and age). Use the array.map function to get an array of the names of all the owners.
console.log("Question 4 - Pet Owners");
let pets = [{
    name: "Rex",
    age: 5,
    owner: {
        name: "Bob James",
        age: 50
    }
}, {
    name: "Felix",
    age: 6,
    owner: {
        name: "Jennifer Flaxseed",
        age: 23
    }
}, {
    name: "Daisy",
    age: 19,
    owner: {
        name: "Florence Fieldhand",
        age: 44
    }
}];

let petOwners = pets.map(pet => `${pet.owner.name}`)
console.log(petOwners);