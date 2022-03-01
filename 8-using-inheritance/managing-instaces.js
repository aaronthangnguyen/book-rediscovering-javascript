class Names {
  constructor(...names) {
    this.names = names;
  }

  filter1(selector) {
    return new Names(...this.names.filter(selector));
  }

  filter2(selector) {
    const constructor = Reflect.getPrototypeOf(this).constructor;
    return new constructor(...this.names.filter(selector));
  }

  filter3(selector) {
    const constructor =
      Reflect.getPrototypeOf(this).constructor[Symbol.species] ||
      Reflect.getPrototypeOf(this).constructor;

    return new constructor(...this.names.filter(selector));
  }
}

class SpecializedNames extends Names {
  static get [Symbol.species]() {
    return Names;
  }
}

const specializedNames = new SpecializedNames("Java", "C#", "JavaScript");
console.log(specializedNames.filter1((name) => name.startsWith("Java")));
console.log(specializedNames.filter2((name) => name.startsWith("Java")));
console.log(specializedNames.filter3((name) => name.startsWith("Java")));
