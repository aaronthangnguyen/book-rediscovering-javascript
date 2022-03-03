export const FREEZING_POINT = 0;

export function f2c(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

export const temperaturePoints = { freezing: 0, boiling: 100 };

export class Thermostat {
  constructor() {}
}

const FREEZING_POINT_IN_F = 32;

function c2f(celsius) {
  return celsius * 1.8 + 32;
}

const FREEZING_POINT_IN_K = 237.15,
  BOILING_POINT_IN_K = 373.15;

export { c2f, FREEZING_POINT_IN_K };

function c2k(celsius) {
  return celsius + 273.15;
}

export { c2k as celsiusToKelvin };

export default function unitsOfMeasures() {
  return ["Celsius", "Delisle scale", "Fahrenheit", "Kelvin"];
}
