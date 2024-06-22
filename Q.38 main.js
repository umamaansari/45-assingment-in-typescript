"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = `dDefault country`) {
    console.log(`${city} is in ${country}`);
}
describe_city(`karachi`, `pakistan`);
describe_city(`Tokyo`, `japan`);
describe_city(`paris`);
