//Difference between map(), filter(), and reduce() in JavaScript

//1. map() method/function
//Calls a defined callback function on each element of an array, and returns an array that contains the results
//@param callbackfn -- A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array
let numbers = [1,2,3];
let doubleNumbers = numbers.map((e) => e *2);
console.log(doubleNumbers); //[2,4,6]

//farenheit to Celcius
//formula: (F-32) * (5/9)
let fahTemp = [32,68,104,125];

function fahToCel(fah){
    return (fah - 32) * (5/9);
}

let celTemp = fahTemp.map(fahToCel); //Here fahToCel function will acts as a callbackfn function.
console.log(celTemp);


//2. filter() method/function
//A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
//Returns the element of an array that meet the condition specified in a callback function.
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e) => e % 2 == 0);
console.log(evenNum);

//example-2 on filter()
let student = [
    {name:"Eshaan", age:6, gender:"Male"},
    {name:"Thanvi", age:5, gender:"Female"},
    {name:"Krishav", age:5, gender:"Male"},
    {name:"Shreyaan", age:3, gender:"Male"},
    {name:"Shritha", age:2, gender:"Female"},
];

let femaleStudent = student.filter((std) => {
    return std.gender === "Female" && std.age > 4;
})

console.log(femaleStudent);


//3. reduce() method/function
//
//


