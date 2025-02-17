// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98,5]

// find: 5

// output: 2

function repeated(numbers , inputNumber){
    count =0;
    for(number of numbers){
        if(number===inputNumber){
            count++;
        }             
    }
    return count
}

let numbers = [5,6,11,12,98,5]
let inputFInd = 5;


let result = repeated(numbers, inputFInd)
console.log(result)
