// let reverse1 = [1, 2, 3, 4, 5, 6, 7];

// Style one
// let rev = reverse.reverse()

// style two with push method

let reverse1 = [1, 2, 3, 4, 5, 6, 7];
let reversalNUmber = []
for(i = reverse1.length -1; i>=0  ;i--){  
    let num = reverse1[i]
    reversalNUmber.push(num)
}
console.log(reversalNUmber)


// Style 3
// Using Unshift
let reverse12 = [1, 2, 3, 4, 5, 6, 7];
let newReverse = [];
for(let reverse of reverse12){
    newReverse.unshift(reverse)
    

}
console.log(newReverse)



// With string array

const friends = ['Elon MAsk', 'Bill', 'Rahim', 'Karim']

let rev = []
for(i=0; i<friends.length; i++){
    element = friends[i]
    rev.unshift(element)

}
console.log(rev)

// Another way

let rev_rev = []
for(let friend of friends){
    rev_rev.push(friend)
    
}
console.log(rev_rev)