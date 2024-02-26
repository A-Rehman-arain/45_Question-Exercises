let usernames: string[] = ['eric', 'admin', 'alice', 'bob', 'john']; // Array of usernames

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
