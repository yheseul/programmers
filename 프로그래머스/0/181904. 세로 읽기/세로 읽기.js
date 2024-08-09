function solution(my_string, m, c) {
  let result = []
  for (let i = 0; i < my_string.length / m; i++) {
    let arr = ""
    arr = (my_string.slice(i*m, (i+1)*m))
    result.push(arr[c-1])
  }
  return result.join('')
}