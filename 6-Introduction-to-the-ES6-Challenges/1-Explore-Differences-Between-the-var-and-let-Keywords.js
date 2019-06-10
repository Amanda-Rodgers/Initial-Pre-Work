// I learned the difference between using var and let, let can only declare a variable once and will throw errors
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
