function solution(myString, pat) {
  const newstr = myString.replace(/A/g, 'b');
  const resultstr = newstr.replace(/B/g, 'a');
  
  return resultstr.toUpperCase().includes(pat) ? 1 : 0
}