const repeatString = function(string, repeat) {

  let stringarray = new Array()
  if (repeat < 0) {
    return "ERROR";
  } else {
    for (let i= 0; i < repeat; i++) {
       stringarray.push(string);} }
 
  text = stringarray.join("");
  return text;
    }

// Do not edit below this line
module.exports = repeatString;
