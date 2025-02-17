// "lightweight and durable backpack"

let description = "lightweight and durable backpack"
let singleWord = description.split(" ")


let reversed = ""
for(i = singleWord.length-1; i>= 0; i--){
    let newElement = singleWord[i]; 
    reversed = reversed+newElement
    if(i>0){
        reversed= reversed + ' '

    }

}
console.log(reversed)