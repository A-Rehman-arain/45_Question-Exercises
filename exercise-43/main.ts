function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Create a separate array with the Great added to each magician's name
let great_magicians: string[] = make_great(magicians.slice());

// Call the function to show the original magicians' names
console.log("Original Magicians:");
show_magicians(magicians);

// Call the function to show the great magicians' names
console.log("\nGreat Magicians:");
show_magicians(great_magicians);

