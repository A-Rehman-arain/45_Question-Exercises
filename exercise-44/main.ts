function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!");
}

// Call the function with different numbers of arguments
make_sandwich('cheese', 'ham', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich('peanut butter', 'jelly');
