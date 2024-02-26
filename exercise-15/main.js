var guestlist = ["hunain ", "muneeb ", "sarim", "haris"];
var dontcome = guestlist[0];
console.log(dontcome, "nhi a sakta");
guestlist.splice(0, 1, "hassam");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",  would u like to dinner with me?")); });
