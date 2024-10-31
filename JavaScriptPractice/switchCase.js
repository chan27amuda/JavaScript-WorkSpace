function checkDayOfWeek(dayNumber){
    let day;

    switch (dayNumber) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            console.log("Invalid Day")
            break;
    }

    return day;
}

console.log(checkDayOfWeek(0));
console.log(checkDayOfWeek(3));
console.log(checkDayOfWeek(10));

//if we don't break the switch case statement, then it will move into each and every case statement until the last statement... if there is default then
//then it will move inside default.
//For example, in the above example if we remove break from each switch case including default
//and run 'console.log(checkDayOfWeek(0));' statement, then the output will print as below
/*
Invalid Day
Saturday
*/


//Cross Browser example using switch case statement.

let browser = "chrome";
switch (browser) {
    case "chrome":
        console.log("launch chrome")
        break;
    case "firefox":
        console.log("launch firefox")
        break;
    case "edge":
        console.log("launch edge")
        break;

    default:
        console.log("please pass the correct browser...." + browser)
        break;
}

//switch case can be used in 

//multi env: dev, qa, stage, uat, prod
//multi user: admin, developer, test, customer, etc.,
