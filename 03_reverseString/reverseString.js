const reverseString = function(text) {;
  let string = text.toString();
  let size = string.length;
  let reversed = new Array();

  for (let i =0; i <= size; i++){
   reversed.push(string.charAt(size -i)); }
 
  return reversed.join("")}

// Do not edit below this line
module.exports = reverseString;
