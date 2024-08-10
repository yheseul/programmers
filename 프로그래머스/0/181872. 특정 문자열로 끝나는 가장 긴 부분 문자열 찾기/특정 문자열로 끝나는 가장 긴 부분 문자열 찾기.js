function solution(myString, pat) {
  return pat.length == 1 ? myString.slice(0, myString.lastIndexOf(pat)+1) : myString.slice(0, myString.lastIndexOf(pat) + pat.length)
}