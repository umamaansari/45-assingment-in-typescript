"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacture, modelName, ...extraOptions) {
    const CarInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOptions)
    };
    return CarInfo;
}
let Obj1 = { num1: 1, num2: 2 };
let Obj2 = { num3: 1, num2: 5 };
let obj3 = Object.assign({}, Obj1, Obj2);
console.log(storeCarInfo('Honda', 'Civic', { color: 'pink' }, { features: ['navigation', 'power window'] }));
