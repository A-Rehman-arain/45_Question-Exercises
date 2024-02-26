function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Creating a ".concat(size, "-sized shirt with the message: \"").concat(message, "\"."));
}
// Call the function to create a large shirt with the default message
make_shirt();
// Call the function to create a medium shirt with the default message
make_shirt('medium');
// Call the function to create a small shirt with a different message
make_shirt('small', 'Hello, World!');
