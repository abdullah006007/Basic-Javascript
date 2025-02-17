// Subtask-1:
// Display sum of all the odd numbers from 81 to 131.

x = 81;
sum = 0;

while(x<=131){
   
    if(x%2==1){
        sum= sum+x;

    }
    x++;

}
console.log("Total sum", sum)



// Subtask-2:
// Display sum of all the even numbers from 206 to 311.


x = 206;
sum = 0;

while(x<311){
    if(x%2===0){
        sum= sum+x
        console.log("sum of each even Numbers", sum)
    }
    x++;
    console.log("Total sum of ", sum)
}