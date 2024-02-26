function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Create a separate array with the Great added to each magician's name
var great_magicians = make_great(magicians.slice());
// Call the function to show the original magicians' names
console.log("Original Magicians:");
show_magicians(magicians);
// Call the function to show the great magicians' names
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
