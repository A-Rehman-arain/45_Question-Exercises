function store_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };
    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }
    return car;
}

// Call the function with required information and additional options
let my_car = store_car('Toyota', 'Camry', { color: 'blue' }, { year: 2022 });

// Print the returned object to verify the stored information
console.log(my_car);
