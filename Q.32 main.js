"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_user = [`taha`, `daniyal`, `salman`, `mahnoor`, `sawera`];
let new_user = [`yamna`, `ausaf`, `abubakar`, `salar`];
new_user.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase().includes(lowerCase))) {
        console.log(`the username  ${newUsername} is not available . please write a different username`);
    }
    else {
        console.log(`the username ${newUsername}is available`);
    }
});
