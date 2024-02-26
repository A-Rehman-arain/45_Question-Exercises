var current_users = ['john', 'alice', 'bob', 'emma', 'sarah']; // List of current usernames
var new_users = ['alice', 'peter', 'JOHN', 'mike', 'sophie']; // List of new usernames
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var isTaken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
