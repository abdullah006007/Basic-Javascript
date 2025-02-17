var friends = ["arif", "rafi", "Akash", "fahim","Abdullah"]

let bigName = " "
for(i = 0 ; i<friends.length; i++){
    let friendList = friends[i]
    if(friendList.length > bigName.length){
        bigName = friendList
    }
}
console.log(bigName)
