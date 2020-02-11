/*https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen */

// Complete the staircase function below.
function staircase(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(" ".repeat(n - 1 - i) + "#".repeat(i + 1));
  }

  arr.forEach(n => console.log(n));
}

staircase(10);
