function solution(n) {
  let result = Array.from({ length: n }, () => Array(n).fill(0));
  result.map((_, i) => result[i][i] = 1)
  return result
}