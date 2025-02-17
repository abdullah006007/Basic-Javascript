// getting all the electronics into electronics and clothing into clothing

const product = [
    {name :"laptop", category : "Electronics"},
    {name :"T-shirt", category : "clothing"},
    {name :"Headphone", category : "Electronics"},
    {name :"jeans", category : "clothing"},
]

let listedProduct = {
    Electronics : [],
    clothing : [], 
}


for(let i = 0; i< product.length; i++){
    let allProduct = product[i];
    if(allProduct.category==="Electronics"){
        listedProduct.Electronics.push(allProduct.name);
    } 
    else if(allProduct.category === "clothing"){
        listedProduct.clothing.push(allProduct.name);
    }
}

console.log(listedProduct)