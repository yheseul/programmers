function solution(array) {
  const result = array.join('').match(/7/g)
  return result === null ? 0 : result.length
}