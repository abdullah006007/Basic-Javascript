// Check whether a string contains all the vowels a, e, i, o, u
// const exampleString = "A quick brown fox jumps over the lazy dog";

// const vowels = ["a", "e", "i", "o", "u"];
// let isAllVowelExist = true;

// let missingVowels = [];

// const lowercase = exampleString.toLowerCase();


// for (let singleVowel of vowels) {
//   isAllVowelExist = lowercase.includes(singleVowel);
//   if (isAllVowelExist == false) break;
// }

// if (isAllVowelExist == true){
//     console.log("OK");
// }
// else{
//     console.log("NOT OK");
// }
     




// Check whether a string contains all the vowels a, e, i, o, u

const exampleString = "A quick brown fox jumps over the lazy dog ";
const vowels = ["a", "e", "i", "o", "u"];

for(let vol of vowels){
    if(exampleString.includes(vol)){
        console.log('Yes all of them exist')
        break;
       

    }else{
        console.log("Doesn't exist")
        break;
        
    }

}

