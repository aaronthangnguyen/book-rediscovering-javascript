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

const set = new FunctionalSet(["Jack", "Jill", "Tom", "Jerry"]);

const jSet = set.filter((name) => name.startsWith("J"));
const allCaps = set.map((name) => name.toUpperCase());

const totalLengthOfJWords = set
  .filter((name) => name.startsWith("J"))
  .reduce((total, word) => total + word.length, 0);

console.log(jSet);
console.log(allCaps);
console.log(totalLengthOfJWords);
