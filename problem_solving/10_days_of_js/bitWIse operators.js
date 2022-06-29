// helper
// https://www.youtube.com/watch?v=3Nu3Mnvsbxg
function getMaxLessThanK(n, k) {
  let max = 0;
  for (let a = n; a > 1; a--) {
    for (let b = a - 1; b > 0; b--) {
      if (a & (b < k) && a & (b > max)) {
        max = a & b;
      }
    }
  }
  return max;
}
