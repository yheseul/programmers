function solution(num_list, n) {
  const num = num_list.slice(n)
  num_list.splice(n)
  num_list.unshift(...num);
  return num_list
}