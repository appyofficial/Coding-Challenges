/*

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

//Solution
function sumAll(arr) {
    arr.sort(function (a, b) { return a - b });
    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }
    let total = newArr.reduce((a, b) => a + b, 0);
    console.log(total);
}

sumAll([5, 10]);