class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }
  get age() {
    return new Date().getFullYear() - this.year;
  }

  get distanceTraveled() {
    return this.miles;
  }

  set distanceTraveled(value) {
    if (value < this.miles) {
      throw new Error("Error!");
    }
    this.miles = value;
  }

  static get ageFactor() {
    return 0.1;
  }

  static pickBetter(firstCar, secondCar) {
    const computeScore = (car) =>
      car.age * Car.ageFactor + car.distanceTraveled * car.distanceFactor;

    return computeScore(firstCar) < computeScore(secondCar)
      ? firstCar
      : secondCar;
  }
}

Car.distanceFactor = 0.01;

const car = new Car(2004);
console.log(car.age);
console.log(car.distanceTraveled);
car.distanceTraveled = 101;
console.log(car.distanceTraveled);

const firstCar = new Car(2007);
firstCar.distanceTraveled = 150_000;
const secondCar = new Car(2010);
secondCar.distanceTraveled = 175_000;

console.log(Car.pickBetter(firstCar, secondCar));
