function calculateVAT( price ) {

    if(typeof price!=='number'){
        return "Invalid"

    }
    if(price<0){
        return "Invalid"
    }

    let calVat = price*7.5/100
    return calVat
}


function  validContact(contact) {
    
    let valid = true;
    if(typeof contact!=='string'){
        return "Invalid"
    }   
    if(contact.length===11){

        if(contact[0] !=="0" || contact[1] !=="1"){
            return false    
        }

        if(contact===' '){
            return false
        }

        return true;
    }
    else return false;
}


function willSuccess(marks) {

    if(!Array.isArray(marks)){
        return "Invalid"

    }
    
    let fail=0;
    let pass=0;
    for(let i =0; i<marks.length; i++){
        let mark = marks[i]

        if(mark<50){
            fail++;       
        } 
        if(mark>=50){
            pass++
        }

    }
    if(pass>fail){
        return true;
    }else{
        return false;
    }    
}


function validProposal(person1, person2) {

    if(typeof person1 !=='object'|| typeof person2!=='object'){
        return "Invalid"

    }
    
    let ageGap = Math.abs(person1.age-person2.age)
    if(person1.gender!==person2.gender && ageGap<=7){
        return true;
        
    } else return false;
}


function  calculateSleepTime(times) {

    for(let time of times){
        if(typeof time !=='number'){
            return "Invalid"
        }

    }

    let totalSec = 0;
    for(let time of times){
        totalSec = time+totalSec
    }
    let hour = Math.floor(totalSec/3600)
    let minute = Math.floor((totalSec % 3600) / 60)
    let second = totalSec%60

    return{hour:hour, minute:minute, second:second}
    
}