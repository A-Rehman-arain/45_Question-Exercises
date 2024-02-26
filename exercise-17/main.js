var myFriends = ["Ali", "Tariq", "Madad", "Ayaz", "Hussain",
    "Ahmed"];
console.log("table is not  available I can invite only 2 persons\n");
var friend1 = myFriends.pop();
console.log("sorry Mr.".concat(friend1, " you are not invited!"));
var friend2 = myFriends.pop();
console.log("sorry Mr.".concat(friend2, " you are not invited!"));
var friend3 = myFriends.pop();
console.log("sorry Mr.".concat(friend3, " you are not invited!"));
var friend4 = myFriends.pop();
console.log("sorry Mr.".concat(friend4, " you are not invited!"));
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr.".concat(myFriends[i], " you are still invited"));
}
myFriends.pop();
myFriends.pop();
console.log(myFriends);
