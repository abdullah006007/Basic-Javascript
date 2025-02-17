// Get average number of the even number in the following list

function avgNumber(numbers){

    let evenNumbers= []
    for(number of numbers){
        if(number%2===0){
            evenNumbers.push(number)

        }     
    }
    // get the sum 
    let sum = 0;
    for(let evenNumber of evenNumbers){
        sum = evenNumber+sum

    }
    let size = evenNumbers.length
    let averageNumber = sum/size
    result = 'the even numbers total addition is: '+ sum + ' The average number of the even number is :'+ averageNumber;
    return result;
    

}

let num = [ 12, 14, 53, 23, 54, 56, 98, 76]
console.log(avgNumber(num))