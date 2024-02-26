function store_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
// Call the function with required information and additional options
var my_car = store_car('Toyota', 'Camry', { color: 'blue' }, { year: 2022 });
// Print the returned object to verify the stored information
console.log(my_car);
