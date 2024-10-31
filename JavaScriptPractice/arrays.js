//Declaration of an Array

let myArray = []; //An empty array
//let numbers = [1,2,3,4,5]; // An array with numbers
//let fruits = ["apples", "banana", "orange"]; // An array with Strings

let lang = ["Java", "Python", "JS"];

//1. push method/function
//adds one or more elements to the end of an existing array and returns the new length of the array
lang.push("Ruby", "HTML");
lang.push("CSS");
console.log(lang);


//2. pop method/function
//removes the last item from the end of an array.
let numbers = [1,2,3,4,5]; // An array with numbers
numbers.pop();
console.log(numbers);

//3. shift method/function
//Removes the first element from an array and returns it
let fruits = ["apples", "banana", "orange"]; // An array with Strings
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

//4. unshift method/function
//Add one or more elements to the beginning of an array and returns the new length of an array
let colors = ["Red", "Green", "Black", "White"]; //An array containing String elements
console.log(colors.length);
colors.unshift("Blue");
console.log(colors);
console.log(colors.length);
colors.unshift("Purple", "Indigo");
console.log(colors);
console.log(colors.length);


//5. splice method/function
//Removes elements from an array and if necessary inserts new elements in their place returning the deleted elements
//@param start -- The zero based location in the array from which to start removing elements
//@param deleteCount -- The number of elements to remove
//@param items -- 
//@param Returns -- An array containing the elements that were added
let animals = ["dog", "cat", "bird", "fish"];
console.log(animals);
animals.splice(1,2,"bear", "elephant");
console.log(animals);
animals.splice(1,1,"kangaroo");
console.log(animals);


//6. slice method/function
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,4); //Here it will Start from index 1 ad excludes the last index. o/p is like [2,3,4]
console.log(newPop);


//7. concat methid/function
//it is combine 2 or more arrays and create a new array
let fr = ["apples", "banana", "orange"];
let num = [1,2,3,4,5];
let mixedArray = fr.concat(num);
console.log(mixedArray);


//8. indexOf method/function
//Returns the first index at which given element can be found in the array
//Return -1 if the element is not present in that particular array
let color = ["Purple", "Red", "Green", "Black", "White", "Red"];
let indexRed = color.indexOf("Red");
console.log(indexRed);
let indexEsh = color.indexOf("Eshaan");
console.log(indexEsh);

//fetch the 2nd Red index
//let secondRedIndex = color.indexOf("Red", 2); //Here starting from the index 2
let secondRedIndex = color.indexOf("Red", color.indexOf("Red")+1); //best way to get the 2nd occurance of the Red index
console.log(secondRedIndex);


//9. includes method/function
let test = ["admin", "customer", "seller", "vendor"]
let flag = test.includes("seller");
console.log(flag);
flag = test.includes("seller", "vendor");
console.log(flag);
flag = test.includes("Eshaan");
console.log(flag);


//10. forEach method/function
//A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//Performs the specified action for each element in an array.
let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e * 2);
})



