/*Link missing */

function aVeryBigSum(ar) {
  let total = ar.reduce((a, b) => a + b, 0);
  return total;
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
