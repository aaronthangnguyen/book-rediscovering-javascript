class Car {}

console.log(Reflect.ownKeys(Car.prototype));

L = [];

console.log(Reflect.ownKeys(L));

O = {};

console.log(Reflect.ownKeys(O));
