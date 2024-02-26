const myFriends: string [] = ["ali", "hamza", " hassan"]
console.log(myFriends);

console.log(`we have 3 more friends to invite on dinner\n`);

myFriends.unshift("yasir");
console.log(myFriends);

myFriends.splice(2, 0, "muhammed ali");
console.log(myFriends);

myFriends.push("Hammad");
console.log(myFriends);

for(let i = 0; i < myFriends.length; i++ ){
    console.log(`Mr. ${myFriends[i]} you are invited to my dinner`);
}