function solution(my_string, indices) {
  const arr = [...my_string]
  indices.sort((a,b) => a-b).map((_, i) => arr.splice(indices[i] - i, 1))
  return arr.join('')
}