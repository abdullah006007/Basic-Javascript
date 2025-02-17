age = 72;
const price = 500;

if (age <= 18){
    // free
    console.log(" You are eligibale for free meal ")

}

else if (age >= 30 && age < 50){
    // 10% discount
    const discount = price * 10 /100;
    discounted_Price = price -discount;
    console.log("You got 10% discount So, now you have to pay", discounted_Price)

}

else if (age >= 50 && age < 70){
    // 20% discount
    const discount = price * 20 /100;
    discounted_Price = price - discount;
    console.log("You got 20% discount So, now you have to pay", discounted_Price)
}

else if (age >= 70 && age < 90){
    // 50% discount
    const discount = price * 50 /100;
    discounted_Price = price - discount;
    console.log("You got 50% discount So, now you have to pay", discounted_Price)
}