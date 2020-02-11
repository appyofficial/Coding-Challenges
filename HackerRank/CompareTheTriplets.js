/*
link: https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/

function compareTriplets(a, b) {
  let scoreA = 0;
  let scoreB = 0;

  a.forEach((num, idx) => {
    if (num > b[idx]) {
      scoreA++;
    } else if (num < b[idx]) {
      scoreB++;
    } else {
      scoreA + 0;
    }
  });

  console.log([scoreA, scoreB]);
}

compareTriplets([17, 28, 30], [99, 16, 8]);
