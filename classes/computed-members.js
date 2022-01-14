const NYD = "New Year's Day";

class Holidays {
  constructor() {
    this[NYD] = "January 1";
    this["Valentine's Day"] = "February 14";
  }
  ["list holidays"]() {
    return Object.keys(this);
  }
}

const usHolidays = new Holidays();

usHolidays["4th of July"] = "July 4";

console.log(usHolidays);
console.log(usHolidays["list holidays"]());

// JavaScript is weird, I know :(
