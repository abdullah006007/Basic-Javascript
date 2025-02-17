// first 100 discount
// fist 200 discount

function layeredDiscountTotal(quantity){
    let first100Price = 100;
    let second100Price = 90;
    let above200Price = 70;

    if(quantity<=100){
        let total = first100Price*quantity
        return total;

    }
    if(quantity<=200){
        letFirst100Total = 100*quantity
        let remainingQuantity = quantity -100
        let remainingTotal = remainingQuantity*second100Price
        let total = letFirst100Total + remainingTotal 
        return total

    }
    else{
        const first100Total  = 100*quantity
        const second100Total = second100Price*quantity
        const remainingQuantity = quantity - 200
        const remainingTotal = remainingQuantity*above200Price
        const total = first100Total + second100Total + remainingTotal 
        return total
    }

}

let result = layeredDiscountTotal(300)
console.log(result)