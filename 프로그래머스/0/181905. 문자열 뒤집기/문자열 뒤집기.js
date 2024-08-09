function solution(my_string, s, e) {
  const str = my_string.slice(s, e+1).split('').reverse().join('');
  const result = my_string.split('')
  result.splice(s, e-s+1, str)
  return result.join('')
}