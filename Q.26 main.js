"use strict";
//alian colors:2 choose for an alian as you did 
Object.defineProperty(exports, "__esModule", { value: true });
if (alian_color === "green") {
    console.log(" aliancolor is green player just earn 5 point");
}
else {
    console.log("player just earned 10 points");
}
alian_color = `yellow`;
//the version that fail will have no output
if (alian_color === "yellow") {
    console.log("player just earned 5 point !");
}
else {
    console.log("player just earned 10 points!");
}
