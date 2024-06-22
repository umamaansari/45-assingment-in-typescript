"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function copyArray(magicianArray) {
    return [...magicianArray];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magicians);
make_great(copyMagicianArray);
console.log("This is my original array:");
show_magicians(magicians);
console.log("This is my modified copy of the array:");
show_magicians(copyMagicianArray);
