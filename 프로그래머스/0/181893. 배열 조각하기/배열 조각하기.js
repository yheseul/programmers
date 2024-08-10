function solution(arr, query) {
  query.map((_, i) => {
    i % 2 ? arr.splice(0, query[i]) : arr.splice(query[i] + 1)
  })
  return arr
}