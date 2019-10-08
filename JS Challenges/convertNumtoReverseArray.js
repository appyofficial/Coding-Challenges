
/*Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

    Example:
348597 => [7, 9, 5, 8, 4, 3]*/



function digitize(n) {
    let arr = n.toString().split("");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(parseInt(arr[i], 10));
    }
    console.log(newArr.reverse());
}

digitize(83993);





/*Other solutions

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

*/