class Counter {}

Counter.prototype.count = 0;
Counter.prototype.increment = function () {
  this.count += 1;
};

const counter1 = new Counter();

const counter2 = new Counter();

console.log(`Prototype has: ${Object.keys(Reflect.getPrototypeOf(counter1))}`);
console.log(`Before increment, instance has: ${Object.keys(counter1)}`);

console.log(counter1.count);
console.log(counter2.count);

counter1.increment();

console.log(`After increment. instance has: ${Object.keys(counter1)}`);

console.log(counter1.count);
console.log(counter2.count);
