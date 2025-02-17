// Ticket fair Calculator

let age = 63;
let ticketPrice = 800



if (age < 10) {

    console.log("Free ticket")
    
    
}
else if(age >= 10 && age < 20 ){
    // 50% discount
    discount = ticketPrice*50/100;
    discounted_price = ticketPrice - discount;
    console.log("As a student you got 50% of so you have to pay", discounted_price );
}


else if(age >= 60){
    // 15% discount
    discount = ticketPrice*15/100;
    discounted_price = ticketPrice - discount;
    console.log("As a Senior citizen you got 15% of so you have to pay", discounted_price );

}