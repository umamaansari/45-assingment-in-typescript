"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, text = `I love Typecript`) {
    console.log(`creating a ${size} shirt with the message: ${text}`);
}
;
make_shirt(`large`);
make_shirt(`medium`);
make_shirt(`small`, `I love python`);
