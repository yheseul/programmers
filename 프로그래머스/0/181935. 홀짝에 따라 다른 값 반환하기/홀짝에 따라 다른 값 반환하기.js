function solution(n) {
  const arr = [];
  if (n % 2 !== 0) {
    arr.push(n);
    for (let i = 2; i < n; i += 2) {
      if (n - i > 0) {
        arr.push(n - i);
      }
    }
  } else {
    arr.push(n ** 2);
    for (let i = 2; i < n; i += 2) {
      if (n - i > 0) {
        arr.push((n - i) ** 2);
      }
    }
  }

  return arr.reduce((arr, cur) => arr + cur);
}