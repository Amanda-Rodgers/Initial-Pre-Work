// I learned how to use class syntax to define a constructor function
function makeClass() {
 "use strict";
 /* Alter code below this line */
 class Vegetable {
   constructor(nameVegetable) {
     this.name = nameVegetable;
   }
 }
 /* Alter code above this line */
 return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
