// find the duplicated number

// let numbers = [12,12,2,34,555,34,]

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < numbers.length; j++) {
//         if (numbers[i] === numbers[j] && i !== j) {
//             console.log(numbers[i]);
//         }

//     }

// }


let numbers = [5,6,11,12,98,5,12, 12];

let repeatedNum = []
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) { // Start j from i + 1
        if (numbers[i] === numbers[j]) {
            repeatedNum.push(numbers[i])           
        }
    }

}
// Find unique Num
let uniqueNum = []
for(singleNUm of repeatedNum){
    if(!uniqueNum===uniqueNum.includes(singleNUm)){
        uniqueNum.push(singleNUm)
    }
}
let size = repeatedNum.length
console.log(uniqueNum+ " repeated "+ size+ ' times ')


// for(i=0; i<numbers.length;i++){
    
//    let iElement = numbers[i];
//    for(let j =1; j<numbers.length;j++){
//     let jElement = numbers[j];
//     if(iElement===jElement){
//         console.log(iElement);
        

//     }
    

//    }
    
// }

