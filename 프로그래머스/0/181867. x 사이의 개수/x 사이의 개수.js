function solution(myString) {
  let result = [];
  myString.replaceAll('x', ' ').split(' ').map(x => result.push(x.length));
  return result
}