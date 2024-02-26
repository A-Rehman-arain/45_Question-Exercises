var myFriends = ["ali", "hamza", " hassan"];
console.log(myFriends);
console.log("we have 3 more friends to invite on dinner\n");
myFriends.unshift("yasir");
console.log(myFriends);
myFriends.splice(2, 0, "muhammed ali");
console.log(myFriends);
myFriends.push("Hammad");
console.log(myFriends);
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], " you are invited to my dinner"));
}
