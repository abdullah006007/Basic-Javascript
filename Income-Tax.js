

function calculateTax(income, expenses){

    if(typeof income!=='number'||income<0 || typeof expenses!=='number'||expenses<0){
        return 'please input valid number'

    }
    let taxableAmount = income-expenses;
    let tax = taxableAmount*.2
    return tax;
}

let result = calculateTax(10000, -3000);
console.log(result)