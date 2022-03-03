"use strict";

class BoundedSet extends Set {
  constructor(capacity, initialValues) {
    super();
    this.capacity = capacity;

    if (initialValues.length <= capacity) {
      initialValues.forEach((value) => this.add(value));
    }
  }

  add(value) {
    if (this.has(value)) return;

    if (this.size < this.capacity) {
      super.add(value);
    } else {
      throw new Error(`exceeded vapacity of ${this.capacity} elements`);
    }
  }

  static get [Symbol.species]() {
    return BoundedSet;
  }
}

const set = new BoundedSet(5, ["Apple", "Banana", "Grape", "Mangoe"]);

set.add("Orange");
set.add("Apple");

try {
  set.add("Tangerine");
} catch (ex) {
  console.log(ex.message); // exceeded capacity of 5 elements
}

set.delete("Grape");
set.add("Peach");
console.log(set.size); // 5

const set2 = new BoundedSet(2, ["Apple", "Banana", "Grape"]);
console.log(set2.size); // 0
console.log(set2); // BoundedSet {capacity: 2}
