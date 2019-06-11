// CORRECTED CODE: This file has correct code for this lesson, previously put different lesson's code into this file
// I learned how to use the destructuring assignment to assign variables from arrays
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
