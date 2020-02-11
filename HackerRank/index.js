/*https://www.hackerrank.com/challenges/mini-max-sum/problem */

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const max = [...arr]
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((a, b) => a + b);

  const min = [...arr]
    .sort((a, b) => b - a)
    .slice(1)
    .reduce((a, b) => a + b);

  console.log(min, max);
}

miniMaxSum([1, 3, 5, 7, 9]);
