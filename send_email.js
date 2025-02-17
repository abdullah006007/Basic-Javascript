function sendNotification(email){
    if(!email.includes('@')){
        return 'Invalid email'
    }
    let splitMail = email.split('@')
    let firstName = splitMail[0]
    let secondPart = splitMail[1]
    let sendMail = firstName +' Send you an email from '+ secondPart
    return sendMail;

    
}

let result = sendNotification("abdullah@gmail.com");
console.log(result)
