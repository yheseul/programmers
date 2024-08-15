function solution(my_str, n) {
  const arr = my_str.split('')
  for (let i = n; i < arr.length; i += n+1) {
    arr.splice(i, 0, ',')
    if(i >= arr.length) break
  }
  return arr.join('').split(',')
}