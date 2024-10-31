function checkAge(age){
    if(age >= 18){
        console.log("You are old enough to vote.");
    }
    else{
        console.log("Sorry, you must be 18 or older to vote");
    }
}

checkAge(10);
checkAge(30);
checkAge(0);

//multiple Condition

function checkNumber(number){
    if(number > 0){
        console.log("The number is +ve");
    }else if(number < 0){
        console.log("The number is -ve");
    }
    else{
        console.log("Zero number found");
    }
}

checkNumber(10);
checkNumber(-10);
checkNumber(0);

//Nested if-else:

function checkGrade(score){
    let grade;
    if(score >= 90){
        grade = 'A';
    }
    else{
        if(score >= 80){
            grade = 'B';
        }
        else{
            if(score >=70){
                grade = 'C';
            }
            else{
                grade = 'D';
            }
        }
    }
    console.log(grade);
}

checkGrade(55);
checkGrade(95);
checkGrade(85);
checkGrade(75);
checkGrade(35);


//will launch a Browser based on th browser name

function browserName(browser){
    if(browser == "chrome"){
        console.log("Launch Chrome Browser");
    }
    if(browser == "edge"){
        console.log("Launch Ege Browser");
    }
    if(browser == "firefox"){
        console.log("Launch Firefox Browser");
    }
    else{
        console.log("Please pass the correct Browser Name");
    }
}
browserName("chrome");

//In the above example we will have output of both "Launch Chrome Browser and Please pass the correct Browser Name". This is the problem is we use the 
//if else condition in this way.
//Here else if associated with the last if condition, that's y the last console statement is also printing.
//break is not applicable with the if statement alone. 
// if we really want to use break, then we need to For Loop / While Loop / Switch Case

//Now how to fix the above problem
//1. if -- elseif

function browserNameCorrect(browser){
    if(browser == "chrome"){
        console.log("Launch Chrome Browser");
    }
    else if(browser == "edge"){
        console.log("Launch Ege Browser");
    }
    else if(browser == "firefox"){
        console.log("Launch Firefox Browser");
    }
    else{
        console.log("Please pass the correct Browser Name");
    }
}
browserNameCorrect("chrome");
browserNameCorrect("firefox");

//Again with the above solution the problem is, if we have 100 if else conditions the it will check for every if else condition and it will keep on 
//checks until the given condition matches.
//Performance wise is not good.

//Again the above problem can solved by using the Switch Case statement.




