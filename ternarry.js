/**
 * Ternary
 * Ternary has Three parts
 * 
 *    ?       :
 * 
 * 
 * condition ? do something when true : do something when false
 */

// age = 10
// age  >= 18 ? console.log(" You are eligible for meal") : console.log("You are not eligible for meal")


let price = 500;
const isleader = true;


if (isleader === true){
    price = 0;
}

else{
    price = price + 100;
}

// Ternary
price = isleader === true ?  0 : price + 100;