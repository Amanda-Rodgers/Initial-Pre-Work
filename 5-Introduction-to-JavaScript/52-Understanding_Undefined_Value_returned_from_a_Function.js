// I learned that when a function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
