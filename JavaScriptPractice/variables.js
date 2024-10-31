//1. var: old way
//ES6 
//Scope: of var
//functionally/locally + global scope

var x = 10;
function test(){
    var y = 20;
    console.log(y);
    console.log(x);
}
console.log(x);

var pop = "Hello JavaScript";
function rel(){
    var top = "JavaScript Var inside rel Function"
    console.log(top);
}
rel();
test();
console.log(pop);

//Here latest declared value is printed. In Java re-declaration is not allowed, but in JavaScript re-declaration of the variable is allowed.
var browser = "Chrome";
var browser = "Firefox"; //Here it is re-declaration of the variable
browser = "edge"; // Here it is re-initialization of the Value
console.log(browser);


///////////
var g;
console.log("The value of g: " + g); //Here JavaScript will assign default value 'undefined' to the Variable g
g = "New Value of g Variable";
console.log("The value of g: " + g);

//issue with var Keyword
//Here in this condition the Variable flag is changed to the value 'Hey Shrithe', 
//if we really want to use the Variable value 'Hey Eshaan' then we can't use. That's the problem with the var Keyword and we won't use in modern JavaScript nowadays.
var flag = "Hey Eshaan";
var t1 = 4;
if(t1>3){
    var flag = "Hey Shritha"; 
}
console.log(flag);

//After var Variable Keyword, let and const started

//2. let
//In order to declare any variable in JavaScript, let is the preferred variable declaration. It's a kind of improvement of var Variable declaration
//Scope: block scoped - {} this is called a block
//let is always a blocked scope
let m = "Hey Eshaan";
let time = 4;

if(time > 3){
    let msg = "Hello, How are you?"
    console.log(msg);
}
//console.log(msg);
console.log(m);

//can we update the let variable? yes

//var can be re-declared/re-initialized but let can e re-initialized but cannot be re-declared

let len = 4;
//let len =5; //This is not possible in let variable keyword
len = 5; //In order to update the let variable value, we need to use this way.

var length = 4;
var legth = 5; //In var both re-declared/re-initialized is possible.

//3. const: const means to provide the Contant Value.
// constane value, cannot be reassigned or modified after initialization

//const mg = "My First Contant Variable";
//mg = "Trying to update the Constant Variable Value"; 
//console.log(mg); //When we try to update the Constant Variable value, we get "TypeError: Assignment to constant variable." exception.

const days = 7;
//days = 10; //Here one cannot change the constant value, abd no of days in a week are 7. SO for these kind of fixed values we use const variable keyword.
console.log(100 * days);

//const p; //const declaration must be initialized.
//console.log(p);

let p;
console.log(p); //output will be with default value 'indefined'.





