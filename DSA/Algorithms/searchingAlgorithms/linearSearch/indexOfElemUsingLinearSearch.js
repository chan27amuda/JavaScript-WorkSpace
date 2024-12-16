//Linear Search: Unsorted Arrays
//JavaScript Program to find the Index of a given Number in an Array
//If found return the index of an Element, else return -1

let arr = [4,5,78,2,34,10,47,6];

function findElemIndexUsingLinearSearch(arr, value){
    //Looping through an Array to find the Index of the given Value
    for(i = 0; i < arr.length; i++){
        if(arr[i] === value){ //checking the condition arr[i] value is equal to given value, If True return index value 
            return i;
        }
    }

    return -1; //Here if the above condition is false for all the iterations, then return -1
}

let foundIndexPosition;

//Finding the Index of the givn Value '34' in an Array
foundIndexPosition = findElemIndexUsingLinearSearch(arr, 34);
if(foundIndexPosition < 0){
    console.log(`Element 34 is not found in an Array`);
}else{
    console.log(`Element 34 is placed at index position ${foundIndexPosition} in an Array`);
}


foundIndexPosition = findElemIndexUsingLinearSearch(arr, 100);
if(foundIndexPosition < 0){
    console.log(`Element 34 is not found in an Array`);
}else{
    console.log(`Element 34 is placed at index position ${foundIndexPosition} in an Array`);
}

foundIndexPosition = findElemIndexUsingLinearSearch(arr, 5);
if(foundIndexPosition < 0){
    console.log(`Element 34 is not found in an Array`);
}else{
    console.log(`Element 34 is placed at index position ${foundIndexPosition} in an Array`);
}

