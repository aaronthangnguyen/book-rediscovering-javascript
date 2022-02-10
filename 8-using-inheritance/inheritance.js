class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  toString() {
    return `Name: ${this.firstName} ${this.lastName}`;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
}

class ReputablePerson extends Person {
  constructor(firstName, lastName, rating) {
    super(firstName, lastName);
    this.rating = rating;
  }
  toString() {
    return `${super.toString()} Rating: ${this.rating}`;
  }
  get fullName() {
    return `Reputed ${this.lastName}, ${super.fullName}`;
  }
}

const alan = new ReputablePerson("Alan", "Turing", 5);
console.log(alan.toString());
console.log(alan.fullName);
