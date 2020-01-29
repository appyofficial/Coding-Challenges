/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.

*/

//Solution
function diffArray(arr1, arr2) {
    var newArr = [...arr1, ...arr2];
    const object = {};
    const result = [];

    newArr.forEach(item => {
        if (!object[item])
            object[item] = 0;
        object[item] += 1;
    });

    for (const prop in object) {
        if (object[prop] < 2) {
            if (!isNaN(prop)) {
                result.push(parseInt(prop));
            } else {
                result.push(prop);
            }

        }
    }

    return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
