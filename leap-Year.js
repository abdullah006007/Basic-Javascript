// leap year

let year = 2000;

if((year%4===0 && year%100!==0) || year%400===0){
    console.log("this is leap year")

}else{
    console.log("This is not leap Year")
}