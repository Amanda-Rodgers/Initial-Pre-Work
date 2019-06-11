// I learned how to use the destructuring assignment to assign variables from nested objects
// CORRECTED CODE: Past file had different lesson's code, this file has correct Code
const LOCAL_FORECAST = {
 today: { min: 72, max: 83 },
 tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
 "use strict";
 // change code below this line
 const {tomorrow:{ max: maxOfTomorrow}} = forecast; // change this line
 // change code above this line
 return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
