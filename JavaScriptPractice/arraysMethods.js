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
//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result,
//and is provided as an argument in the next call to the callback function.
//@param callbackfn -- A function that accepts up to four arguments. The reuce method calls the callbackfn function one time for each element in the array.
//@param initialValue -- If initilValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function
//provides this value as an argument instead of an array value.

let numb = [1,2,3,4,5]; //Sum of Array elements is 15
let sum = numb.reduce((acc,num) => acc+num, 0);
//1st --> 0+1 (acc+num) = 1
//2nd --> 1+2 = 3
//3rd --> 3+3 = 6
//4th --> 6+4 = 10
//5th --> 10+5 = 15
console.log(sum);

//Max number in an Array
let top = [10,5,25,8,30,15,45];
let maxNumber = top.reduce((max,num) => {
    if(num > max){
        return num;
    }else{
        return max;
    }
}, top[0]);
console.log("Max Number in an Array: " + maxNumber);

//Minimum Number in an Array using Reduce Method

//cart: prodName, price --> return total price for all the products in the cart
let cartItems = [
    {prodName:"Jeans", price:2000},
    {prodName:"Shirt", price:1500},
    {prodName:"T-Shirt", price:1000},
    {prodName:"Shoes", price:1800},
    {prodName:"Jacket", price:3000},
];

let totalPrice = cartItems.reduce((total,item) => total + item.price, 0);
console.log(totalPrice);



