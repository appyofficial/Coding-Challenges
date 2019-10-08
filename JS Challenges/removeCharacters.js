/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */
function removeChar(str) {
    //You got this!
    let arr = str.split("");
    arr.shift();
    arr.pop();
    let newString = arr.join("");
    return newString;
};

removeChar("Hello")

/*
Other solutions:

1.
function removeChar(str) {
  return str.slice(1, -1);
}

2.
const removeChar = str => str.slice(1,-1)

3.
function removeChar(str){
 return str.substring(1, str.length-1);
};
 */