"use strict";

class FunctionalSet extends Set {
  filter(predicate) {
    return new FunctionalSet([...this].filter(predicate));
  }
  map(mapper) {
    return new FunctionalSet([...this].map(mapper));
  }
  reduce(accumulator, identity) {
    return [...this].reduce(accumulator, identity);
  }
}

const set = new FunctionalSet(["Jack", "Jill", "Tom", "Jerry"]).add("Bill");
console.log(set);
