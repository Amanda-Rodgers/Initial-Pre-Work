// I learned that variables which are declared within a function as well as the function parameters have local scope, which means they are only visible within that function
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = ""
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
