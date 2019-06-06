// I learned that the strict equality operator deems values being compared that are different types, are considered unequal
// Setup
function testStrict(val) {
 if (val === 7) { // Change this line
   return "Equal";
 }
 return "Not Equal";
}

// Change this value to test
testStrict(10);
