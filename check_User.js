function checkDigit(name){
    if(typeof name!=='string'){
        return 'invalid input'

    }
    let containsDigits= false
    for(i =0; i<name.length;i++){
        let char = name[i]
        // if(!isNaN(char)&& char !== " "){
        //     containsDigits = true;
        //     break;

        // }

        if(char=>'0' && char<='9'){
            containsDigits= true;
            break

        }

    }
    return containsDigits;

}

let result = checkDigit('abdullah123')
console.log(result)
