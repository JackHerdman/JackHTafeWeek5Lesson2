//Declare an array of objects with properties name and age. Use an array.forEach loop to iterate over each object and print the name and age of the object to the console. Do the same using a for and for..of loop

let animals = [{
    name: "Fish",
    age: 40
},{
    name: "Cat",
    age: 30
},{
    name: "Dog",
    age: 19
},{
    name: "Ant",
    age: 8
}];
console.log("ForEach Loop");
animals.forEach(obj => console.log(obj));
console.log();

console.log("For Loop");
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal);   
}
console.log();

console.log("For ..Of Loop");
for (let animal of animals) {
    console.log(animal);
}
console.log();
