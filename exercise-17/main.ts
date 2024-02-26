const myFriends: string [] = ["Ali", "Tariq", "Madad" , "Ayaz","Hussain",
"Ahmed"];
console.log(`table is not  available I can invite only 2 persons\n`);

let friend1 = myFriends.pop();
console.log(`sorry Mr.${friend1} you are not invited!`);


let friend2 = myFriends.pop();
console.log(`sorry Mr.${friend2} you are not invited!`);


let friend3 = myFriends.pop();
console.log(`sorry Mr.${friend3} you are not invited!`);

let friend4 = myFriends.pop();
console.log(`sorry Mr.${friend4} you are not invited!`);

for(let i = 0; i < myFriends.length; i++){
    console.log(`Mr.${myFriends[i]} you are still invited`)
}

myFriends.pop();
myFriends.pop();

console.log(myFriends);