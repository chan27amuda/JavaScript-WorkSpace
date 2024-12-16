//Binary Search: Sorted Array's
// Implementing the below program using Iterative Binary Search Algorithm

let arr = [1, 3, 4, 7, 13, 17, 28, 45, 97, 138, 345];

function findIndexOfElemUsingIterativeBinarySearch (arr, value){

    let startIndex = 0;
    let endIndex = arr.length - 1;

    while(startIndex <= endIndex){
        let midIndex = Math.floor((startIndex + endIndex) / 2);

        if(arr[midIndex] == value){
            return midIndex;
        }else if(value < arr[midIndex]){
            endIndex = midIndex - 1;
        }else {
            startIndex = midIndex + 1;
        }
    }
    return -1;

}

let foundIndexPosition;

//Finding the Index of the givn Value '97' in an Array
foundIndexPosition = findIndexOfElemUsingIterativeBinarySearch(arr, 97);
if(foundIndexPosition < 0){
    console.log(`Element 97 is not found in an Array`);
}else{
    console.log(`Element 97 is placed at index position ${foundIndexPosition} in an Array`);
}


//Finding the Index of the givn Value '101' in an Array
foundIndexPosition = findIndexOfElemUsingIterativeBinarySearch(arr, 101);
if(foundIndexPosition < 0){
    console.log(`Element 101 is not found in an Array`);
}else{
    console.log(`Element 101 is placed at index position ${foundIndexPosition} in an Array`);
}


//Finding the Index of the givn Value '4' in an Array
foundIndexPosition = findIndexOfElemUsingIterativeBinarySearch(arr, 4);
if(foundIndexPosition < 0){
    console.log(`Element 4 is not found in an Array`);
}else{
    console.log(`Element 4 is placed at index position ${foundIndexPosition} in an Array`);
}