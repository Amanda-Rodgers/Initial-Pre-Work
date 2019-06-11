// I learned how to use getters and setters to control access to an object
function makeClass() {
 "use strict";
 /* Alter code below this line */
class Thermostat {
 constructor(fahrenheit) {
   this.celsius = 5/9 * (fahrenheit -32);
 }
 get temperature() {
   return this.celsius;
 }
 set temperature(updateTemp){
   this.celsius = updateTemp;
 }
}
 /* Alter code above this line */
 return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
