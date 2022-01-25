const createCar = () => {
  return new Car();
};

class Car {}

console.log(createCar());
// OK, because createCar() is a callback function running after declaration
