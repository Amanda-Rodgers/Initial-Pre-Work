// I learned that if you define a variable outside of a function or define one without var it will be global variable meaning it is seen by all other code
// Declare your variable here
var myGlobal = "";
var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
 oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
