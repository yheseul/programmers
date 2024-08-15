function solution(n) {
  let k = 2;
  let arr = []

  while (n != 1) {
    if (n % k == 0) {
      arr.includes(k) ? arr : arr.push(k)
      n /= k;
    } else {
      k++;
    }
  }
  return arr
}