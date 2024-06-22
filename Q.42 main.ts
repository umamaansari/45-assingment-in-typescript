let magicians = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];

function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = `the Great ${magicianArray[i]}`;
    }
}

make_great(magicians);
console.log(magicians);



