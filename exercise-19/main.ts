
let myFriends: string [] = ["Ali", "Ahmed", "Waqar", "Manzor", "Tariq"];

console.log(`I am inviting ${myFriends.length} friend to my dinner which are following\n`);

for(let i = 0; i< myFriends.length; i++){
    console.log(`${i + 1}.${myFriends[i]}`)
}
