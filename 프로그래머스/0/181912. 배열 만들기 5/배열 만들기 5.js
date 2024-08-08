function solution(intStrs, k, s, l) {
  let result = [];
  intStrs.forEach(x => {
    const num = x.split('').slice(s, s+l).join('')
    num > k ? result.push(+num) : result;
  });
  return result;
}