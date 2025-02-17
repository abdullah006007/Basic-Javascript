// Capitalize Every first Letter of each word in a String

// const str = "Hello friends , i am habib";
// const strSplit = str.toLowerCase().split(' ');
// const upperFist = [];

// for(let str of strSplit){
//     upperFist.push(str[0].toUpperCase() + str.slice(1));
// };

// // console.log(upperFist.join(' '))
// console.log(upperFist.join(' '))






const line = 'hello! how are you today? all good?'

const lineLower = line.toLowerCase().split(' ');
const upperLine = [];

for(let line of lineLower){
    upperLine.push(line[0].toUpperCase() + line.slice(1))
}

console.log(upperLine.join(' '))