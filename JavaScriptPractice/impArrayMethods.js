//1. every() Method/Function
/*
Determines whether all the members of an array satisfy the specified test
@param predicate --> A function that accepts up to three arguments. The every method calls the predicate function for each element
in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end f an array.
@param thisArg --> An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
*/

let num = [1,2,3,4,5];
let flag = num.every((e) => e < 10); //Returns 'True'
console.log(flag);

let num1 = [1,2,3,4,5,10];
let flag1 = num1.every((e) => e < 10); //Returns 'False'
console.log(flag1);
