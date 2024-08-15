function solution(s) {
  const arr = s.split(" ")
  let result = 0;
  arr.map((x, i) => x === 'Z' ? result -= +(arr[i-1]) : result += +x)
  return result
}