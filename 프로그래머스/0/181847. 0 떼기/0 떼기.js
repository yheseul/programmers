function solution(n_str) {
  let num = 0;
  for (let i = 0; i < n_str.length; i++) {
    if(n_str[i] == 0) {
      num += 1
    } else break
  }
  return num != 0 ? n_str.slice(num) : n_str
}