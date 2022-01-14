class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }

  drive(distance) {
    this.miles += distance;
  }
}

const car = new Car(2022);
console.log(car);
car.drive(20);
console.log(car);
