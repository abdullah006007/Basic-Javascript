

function calculateFinalScore(inputScore){
    if(typeof inputScore!=='object'){
        return 'invalid input'

    }

    if(typeof inputScore.name!=='string'|| typeof inputScore.testScore!=='number' || 
        typeof inputScore.schoolGrade!=='number' || typeof inputScore.isFFamily!=='boolean'){
        return 'Invalid input'

    }

    let score = inputScore.testScore+inputScore.schoolGrade
    if(inputScore.isFFamily===true){
        score+=20
    }

    if(score>=80){
        return true
    }else{
        return false
    }
}

let result = calculateFinalScore({
    name: 'abdullah',
    testScore :45,
    schoolGrade : 25,
    isFFamily: true,

})
console.log(result)