//for loop
// print 1 to 10 

for(let i=1; i<=10; i++){
    console.log(i);
}

//another way of writing for loop in JavaScript
//for...of loop  (same as for each loop in Java) - iterates over iterable objects like arrays, strings and maps etc.

console.log("----------Starts for...of loop----------------------")

const array = [1,2,3,4,5];
for(const e of array){
    console.log(e);
}
console.log("----------End for...of loop----------------------")
//above code can also be written as below

for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

for(let i=0; i<=array.length; i++){
    console.log(array[i]); //output value is 'undefined'
}

//while loop
// 1 to 10

let p = 1;
while(p<=10){
    console.log(p);
    p++; //if we don't use p++ here then the p value will remain 1 all the time and this loop will run infinite times. 
    //instead of p++ we can also write "++p or p=p+1" both will work.
}

let l = 2;
while(l<=10){
    console.log(l); // output will be 2 4 6 8 10
    l = l+2;
}

//do-while loop

let h = 1;
do{
    console.log(h);//1 2 ..... 10
    h++;
}
while(h <=10);

//breake in loops: stop the execution and continue with next statement outside while or for loops. If used inside a nested block
//break is used to come out of the loop

//1 to 100: Print the Hi when you see the multiplication of 5 (with and without break)

let num = 5;
while(num <=100){
    //console.log(num);
    if(num % 5 == 0){
        console.log(num + " is divible by 5");
        break;
    }else{
        console.log(num + " is not divible by 5")
    }
    num++;
}


//continue: skip printing even numbers in a range from 1 - 9:


const browser = ["chrome", "firefox", "edge", "IE"];
for(const e of browser){
    console.log(e);
        if(e == "edge"){
            console.log("Launch Edge...");
            break; // we can use break with if statement only when it inside loop or switch statement.
        }
}


//for...in loop on object
//in JavaScript we can also create an Object, which is shown below

const user = { //here 'user' is an Object
    //name, age, city ... these 3 are the properties of the user object
    name:"Eshaan",
    age: 6,
    city: "Dallas"
}
//iterting the above object using for loop
//on the Object we can use for...in loop
for(const key in user){
    console.log(key + " : " + user[key]);
}

//we can use for...in loop with arrays also to iterate
const br = ["chrome", "firefox", "edge", "IE"];
for(const ele in br){ 
    console.log(ele + ":" + br[ele]);
}



