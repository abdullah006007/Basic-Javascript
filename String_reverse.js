// string reverse

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person'
const word1 = statement.split(' ')
reversed_word = ' '
for(i = word1.length-1; i>=0; i--){
    let singleWord = word1[i]
    reversed_word = reversed_word+ singleWord
    if(i>0){
        reversed_word= reversed_word+ ' '

    }
}
console.log(reversed_word)
