function solution(myStr) {
  const result = myStr.split('a').join('b').split('b').join('c').split('c').filter(x => x !== '')
  return result.length !== 0 ? result : ["EMPTY"]
}