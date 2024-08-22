function solution(dots) {
  [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots.sort()
  return Math.abs(x2 - x4) * Math.abs(y1 - y2)
}