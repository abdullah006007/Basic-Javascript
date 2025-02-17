// Nested 

let yourScore = 80;
let yourFriendScore = 65;


if (yourScore>= 80){
    if (yourFriendScore > 80){
        console.log("go for a lunch")
    }
    if(yourFriendScore < 80 && yourFriendScore>= 60){
        console.log("Good luck next time")
    }
    if(yourFriendScore <60 && yourFriendScore >= 40){
        console.log("keep your friend's message unseen")
    }

    if(yourFriendScore < 40){
        console.log("Block your friend")
    }

}
else{
    console.log("go to home and sleep and act sad")
}
