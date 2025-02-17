// Multi level condition

const price = 4000;


if (price >5000){
    // 10% discount
    const discount = price * 10 /100;
    discounted_Price = price -discount;
    console.log("You got 10% discount So, now you have to pay", discounted_Price)
}

else if (price > 3000){
    // 5% discount
    const discount = price * 5 /100;
    const discounted_Price = price - discount;
    console.log("You got 5% discount So, now you have to pay", discounted_Price)
}

else if (price > 4000){
    // 8% discount
    const discount = price * 8 /100;
    const discounted_Price = price - discount;
    console.log("You got 8% discount So, now you have to pay", discounted_Price)
}