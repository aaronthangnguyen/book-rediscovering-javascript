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
