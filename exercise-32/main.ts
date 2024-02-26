let current_users: string[] = ['john', 'alice', 'bob', 'emma', 'sarah']; // List of current usernames
let new_users: string[] = ['alice', 'peter', 'JOHN', 'mike', 'sophie']; // List of new usernames

for (let new_user of new_users) {
    let isTaken: boolean = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
