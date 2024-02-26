let guestlist = ["hunain ", "muneeb ", "sarim","haris"];
let dontcome = guestlist[0];
console.log(dontcome, "nhi a sakta");
guestlist.splice(0, 1, "hassam");
guestlist.forEach(guest => console.log(`salam ${guest},  would u like to dinner with me?`));