# Chapter 8. Using Inheritance

JavaScript implements **prototypal** inheritance

## Understanding Prototypal Inheritance

- Prototypal inheritance is implemented using delegation
- Delegation is better than inheritance
- Instead of relying on base class or superclass, prototypal inheritance relies on an object next in the chain to serve as its base
- Prototypal inheritance is dynamic which allows altering object that serves as the base at runtime
- Base object is called the object's prototype

## Prototype Chain

- Object chaining
- `Reflect.getPrototypeOf`

## Behavior of Get vs. Set

- Gets search deep, but sets are always shallow

## Inheriting from a Class

- Extending a class
- Overriding methods
- `extends` implies prototypal inheritance
  - `object.prototype` is different from `Reflect.getPrototypeOf(object)` https://stackoverflow.com/q/38740610
  - `object.prototype` is instance's prototype. `Reflect.getPrototypeOf(object)` is prototype of **instance's parent**
- Changing the prototype chain using `Reflect.setPrototypeOf()`
- Using default constructors
- Extending legacy classes
- Managing instance types with species
