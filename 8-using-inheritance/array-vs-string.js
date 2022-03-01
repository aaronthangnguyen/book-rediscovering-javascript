class MyString extends String {}
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const concString = new MyString().concat(new MyString());
const concArray = new MyArray().concat(new MyArray());

console.log(`instanceof MyString?: ${concString instanceof MyString}`);
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);
