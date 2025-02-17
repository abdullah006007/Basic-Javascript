function waitingTime(array, serial){

    if(!Array.isArray(array) || typeof serial !=='number' ){
        return 'invalid input'

    }

    let sum = 0;
    for(i = 0; i<array.length;i++){
        sum = sum+array[i]

    }
    let averageTime = Math.round(sum/array.length);
    let remainingPerson = serial-1-array.length
     
    let remainingTime = 0;
    if(remainingPerson>0){
        remainingTime = remainingPerson*averageTime


    }
    return remainingTime

}

let result = waitingTime(8,3);
console.log(result)