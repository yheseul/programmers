function solution(my_string) {
  const regExp = /[a-zA-Z]/g;
  const str = my_string.split(regExp);
  let result = 0;
  str.map(x => {
    x !== '' ? result += +x : result
  })
  return result
}