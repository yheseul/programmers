function solution(i, j, k) {
  const arr = Array.from({ length: j - i + 1 }, (_, idx) => idx + i);
  return (arr.join('').split('').filter(x => (x + '').includes(k))).length
}