function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}".`);
}

// Call the function to create a large shirt with the default message
make_shirt();

// Call the function to create a medium shirt with the default message
make_shirt('medium');

// Call the function to create a small shirt with a different message
make_shirt('small', 'Hello, World!');

