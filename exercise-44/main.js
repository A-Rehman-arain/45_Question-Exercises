function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Sandwich is ready!");
}
// Call the function with different numbers of arguments
make_sandwich('cheese', 'ham', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich('peanut butter', 'jelly');
