function solution(myString, pat) {
  let result = 0;
  for (let i = myString.indexOf(pat); i < myString.length; i++) {
    myString.slice(i, pat.length + i).includes(pat) ? result += 1 : result
  }
  return result
}