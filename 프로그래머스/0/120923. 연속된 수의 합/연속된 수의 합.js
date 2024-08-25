function solution(num, total) {
  let result = [];
  const a = (((2 * total) / num) + (1 - num)) / 2;
  for (let i = 0; i < num; i++) {
    result.push(a + i)
  }
  return result
}