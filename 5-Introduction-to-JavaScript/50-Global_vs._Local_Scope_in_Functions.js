//I learned how that a local variable will override a global variable
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";



  // Only change code above this line
  return outerWear;
}

myOutfit();
