function add(num1, num2){
    result = num1+num2
    return result;
}

function subtract(num1, num2){
    result = num1-num2
    return result;
}

function multiply(num1, num2){
    result = num1*num2
    return result;
}

function divide (num1, num2){
    result = num1/num2
    return result;
}

// calculator

function calculator(a, b, operation){
    if(operation==='add'){
        const result = add (a,b);
        return result;
    }
    else if(operation==='subtract'){
        const result = subtract(a,b)
        return result

    }
    else if(operation==='multiply'){
        const result = multiply(a,b)
        return result
    }
    else if(operation==='divide'){
        const result = multiply(a,b)
        return result
    }
    else{
        return 'input 2 number and operation name allowed'
    }
    
}

let inputNum = calculator(11, 10, 'multiply')
console.log(inputNum)

