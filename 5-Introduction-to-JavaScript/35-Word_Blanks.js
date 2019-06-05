//I learned how to use the string concatenation operator + to build a new string with word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = ""

  result = "The " + myNoun + " is " + myAdjective + " but " + myVerb + " " + myAdverb + "!";


  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("fish", "small", "swam", "quickly");
