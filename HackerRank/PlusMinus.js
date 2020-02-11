// Complete the plusMinus function below.
/*https://www.hackerrank.com/challenges/plus-minus/problem */

function plusMinus(arr) {
  let length = arr.length;
  let totalMinus = 0;
  let totalPlus = 0;
  let totalZero = 0;
  arr.map(n => {
    if (n > 0) {
      totalPlus++;
    } else if (n < 0) {
      totalMinus++;
    } else {
      totalZero++;
    }
  });

  console.log((totalPlus / length).toFixed(6));
  console.log((totalMinus / length).toFixed(6));
  console.log((totalZero / length).toFixed(6));
}

document.getElementById("app").innerText = plusMinus([-4, 3, -9, 0, 4, 1]);
