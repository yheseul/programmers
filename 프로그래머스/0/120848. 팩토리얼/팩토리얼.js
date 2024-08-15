function solution(n) {
  let num = 1;
  let i = 1;
  while (true) {
    num = num * i;
    if(num === n) return i
    if(num > n) return i - 1
    i++
  }
}