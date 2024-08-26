function solution(score) {
  let arr = []
  score.map(x => arr.push((x[0] + x[1]) / 2))
  let num = arr.slice().sort((a, b) => b - a);
  return arr.map(el => num.indexOf(el) + 1)
}