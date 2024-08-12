function solution(arr, k) {
  const newArr = new Array(k).fill(0);
  const set = new Set(arr);
  return newArr.map((x, i) => i < set.size ? x + [...set][i] : x - 1)
}