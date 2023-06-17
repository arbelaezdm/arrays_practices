// Write a JavaScript function to check whether an 'input' is an array or not.
let is_array = function (input) {
  //For instance, if it's Object.prototype.toString, it reliably produces this string: [object Array]. This is handy in pre-ES2015 environments for determining whether the array is an array or something else
  console.log(toString.call(input));

  if (toString.call(input) === "[object Array]") return true;
  return false;
};

console.log(is_array([1, 2]));