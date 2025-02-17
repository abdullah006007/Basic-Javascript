// BMI

let weight = 62;
let height = 1.65;
let BMI = weight/height**2

console.log(BMI.toFixed(2))

if (BMI < 18.5){
    console.log("You are underweight")
}
else if(BMI>=18.5 && BMI <=24.9) {
    console.log("you are normal.")
}

else if(BMI>= 25 && BMI <= 29.9){
    console.log("You are overweight")
}

else{
    console.log("You are obese")
}




