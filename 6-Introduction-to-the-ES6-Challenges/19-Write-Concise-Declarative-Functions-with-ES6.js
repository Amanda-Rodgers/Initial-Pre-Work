// I learned how to concise declarative functions with ES6
// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    return this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
