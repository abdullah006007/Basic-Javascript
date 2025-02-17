// function findUnique(uniqueItem){
//     let uniqueItems = []
//     for(unique of uniqueItem){
//         if(uniqueItems.includes(unique)===false){
//             uniqueItems.push(unique)
                         
//         }

//     }
//     return uniqueItems

// }

// let item = ['lala', 'abu', 'cab', 'abd', 'abu', 'lala']
// console.log(findUnique(item))



function findUnique(uniqueItem){
    let uniqueItems = []
    for(unique of uniqueItem){
        if(uniqueItems!==uniqueItems.includes(unique)){
            uniqueItems.push(unique)
                         
        }

    }
    return uniqueItems

}

let item = ['lala', 'abu', 'cab', 'abd', 'abu', 'lala']
console.log(findUnique(item))