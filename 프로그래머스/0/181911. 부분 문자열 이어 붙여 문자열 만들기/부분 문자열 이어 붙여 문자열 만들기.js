function solution(my_strings, parts) {
  let result = '';
  my_strings.map((x, i) =>{
    result += x.split('').slice((parts[i])[0], (parts[i])[1] + 1).join('')
  })
  return result
}