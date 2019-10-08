//Write function avg which calculates average of numbers in given array.

function find_average(array) {
    // your code here
    let sum = array.reduce((a, b) => a + b, 0);
    let average = sum / array.length;
    return (average);
}