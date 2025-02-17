// Finding the Unique product inside of array


let uniqueItems = []

let product = ["laptop", "Phone", "laptop", "tablet", "Phone"]

for(i = 0 ; i< product.length; i++){
    let allProduct = product[i]
    if(!uniqueItems.includes(allProduct)){
        uniqueItems.push(allProduct)
    }

}
console.log(uniqueItems)

