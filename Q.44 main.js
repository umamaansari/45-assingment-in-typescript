"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makesandwich(item) {
    console.log(`making your sandwich with:`);
    item.forEach(element => console.log("" + element));
    console.log(`Enjoy your sandwich!`);
}
makesandwich([`Han`, `Cheese`, `Lettuce`]);
makesandwich([`Turkey`, `Bacon`]);
